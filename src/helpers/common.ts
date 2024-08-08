import { MAX_DEPTH } from '@/constants/common';

/**
 * 尝试将 JSON 字符串解析为 TypeScript 类型 T 的实例。
 * @param str 可选的 JSON 字符串。如果未提供，则直接返回 [defaultValue, undefined]，如果提供非字符串，则直接返回并提示内容不是一个字符串。
 * @param defaultValue 可选的默认值。
 * @returns 一个元组，其中第一个元素是解析后的 T 类型实例，如果解析失败则为 defaultValue；第二个元素是解析过程中遇到的错误，如果没有错误则为 undefined。
 */
export function tryJsonParse<T>(str?: any, defaultValue?: T): [T | undefined, Error | undefined] {
  // 当输入字符串不存在时，直接返回 undefined
  if (!str) {
    return [defaultValue, undefined];
  }
  if (typeof str !== 'string') {
    return [str, new Error('Input is not a string')];
  }
  try {
    // 尝试解析 JSON 字符串，成功时返回解析结果和 undefined
    return [JSON.parse(str), undefined];
  } catch (e) {
    // 解析失败时，返回 defaultValue 和捕获的错误
    return [defaultValue, e as Error];
  }
}

/**
 * 将一个数组扁平化，并返回一个新数组。
 * @param arr 要扁平化的数组。
 * @param depth 可选的扁平化深度，默认为 MAX_DEPTH。
 * @returns 一个扁平化后的新数组。
 */
export function flat<T extends { children?: T[] }>(arr: T[], depth = MAX_DEPTH): T[] {
  const result = [] as T[];
  arr.forEach((item) => {
    if (depth > 0 && item.children?.length) {
      result.push(...flat(item.children, depth - 1));
    } else {
      result.push(item);
    }
  });
  return result;
}

/**
 * 将一个数组转换为 Map。
 * @param arr 要转换为 Map 的数组。
 * @param key 要作为 Map 的键的字段或函数。
 * @param depth 可选的扁平化深度，默认为 MAX_DEPTH。
 * @returns 一个 Map，其中键为 key 字段或函数返回的值，值为对应的数组元素。
 */
export function toMap<T extends { children?: T[] }>(
  arr: T[],
  key: keyof T | ((item: T) => string),
  depth = MAX_DEPTH,
): Map<string, T> {
  return new Map<string, T>(
    flat(arr, depth).map((item) => [typeof key === 'function' ? key(item) : String(item[key]), item]),
  );
}

/**
 * 将给定的平面数组转换为树形结构
 *
 * @param arr 待转换的数组，其中每个元素都可能包含一个子项数组
 * @param key 用于确定每个元素唯一标识的属性或函数
 * @param parentKey 用于确定每个元素父节点标识的属性或函数
 * @param depth 转换的最大深度，防止无限递归，默认为MAX_DEPTH
 * @returns 转换后的树形结构数组
 */
export function toTree<T extends { children?: T[] }>(
  arr: T[],
  key: keyof T | ((item: T) => string),
  parentKey: keyof T | ((item: T) => string),
  depth = MAX_DEPTH,
): T[] {
  // 初始化树形结构数组
  const tree = [] as T[];
  // 深拷贝原数组以避免修改原始数据
  const clonedArr = structuredClone(arr).map((item) => {
    // 确保每个元素的子项数组存在，如果不存在则初始化为空数组
    if (!item.children?.length) {
      item.children = [];
    }
    return item;
  });
  // 将数组转换为map，以便快速查找和操作
  const map = toMap(clonedArr, key, depth);
  // 遍历每个元素，根据parentKey将其添加到正确的父节点下，或作为根节点
  clonedArr.forEach((item) => {
    // 根据parentKey获取当前元素的父节点标识
    const key = typeof parentKey === 'function' ? parentKey(item) : String(item[parentKey]);
    // 如果map中存在该父节点标识，则将当前元素添加到对应父节点的子项数组中
    if (map.has(key)) {
      map.get(key)?.children?.push(item);
    } else {
      // 否则，将当前元素作为根节点添加到树形结构数组中
      tree.push(item);
    }
  });
  // 返回构建好的树形结构数组
  return tree;
}

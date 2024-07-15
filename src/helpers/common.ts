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

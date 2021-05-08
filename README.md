# vue-easy-admin

[更新日志](CHANGELOG.zh_CN.md)

- [介绍](#介绍)
- [git地址](#git地址)
- [预览地址](#预览地址)
- [文档](#文档)
- [预安装](#预安装)
    - [环境要求](#环境要求)
    - [UI框架](#ui-框架)
    - [图标](#图标)
    - [插件](#插件)
    - [建议开发环境](#建议开发环境)
- [安装](#安装)
- [使用](#使用)
    - [开发环境](#开发环境)
    - [打包](#打包)
    - [格式化](#格式化)
    - [其他](#其他)
- [Git 提交规范](#git-提交规范)
- [已完成功能](#已完成功能)
- [正在开发的功能](#正在开发的功能)
- [浏览器支持](#浏览器支持)

## 介绍

项目基于`element-plus`,`typescript`,`vue3.0`实现的 vue3 风格的后台管理系统。

## git地址

[vue-easy-admin](https://gitee.com/Flee.Lethe.net/vue-easy-admin.git) - master分支

## 预览地址

暂无

## 文档

暂无

## 预安装

### 环境要求

- `Node.js`: - 版本最好大于 `12.0.0`
- `npm` : - 包管理工具.

### UI 框架

- [Element-plus](https://element-plus.gitee.io/)

### 图标

暂无

### 插件

- [Vue Router](https://github.com/vuejs/vue-router-next)
- [Vuex](https://github.com/vuejs/vuex)
- [vue-i18n](https://github.com/intlify/vue-i18n-next) - 国际化
- [lodash](https://github.com/lodash/lodash) - JavaScript 实用程序库
- [axios](https://github.com/axios/axios) - Http 数据交互
- [TypeScript](https://www.typescriptlang.org/)

### 建议开发环境

- `Git`: - 版本管理工具
- `Visual Studio Code` - (VSCode): 最新版本
    - [VS Code Extensions](./.vscode/extensions.json)
        - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备
        - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
        - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
        - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

## 安装

```js
//  使git对文件名大小写敏感
git config core.ignorecase false

// 拉取项目代码

git clone https://gitee.com/Flee.Lethe.net/vue-easy-admin.git vue-easy-admin

cd vue-easy-admin

// 如果使用别的包管理工具，可以自行安装
npm install

```

## 使用

### 开发环境

```bash
npm serve
```

### 打包

```bash

npm build # 打包
```

### 格式化

```bash
npm lint:stylelint # 样式格式化

npm lint # 代码格式化
```

### 其他

暂无

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

    - `feat` 增加新功能
    - `fix` 修复问题/BUG
    - `style` 代码风格相关无影响运行结果的
    - `perf` 优化/性能提升
    - `refactor` 重构
    - `revert` 撤销修改
    - `test` 测试相关
    - `docs` 文档/注释
    - `chore` 依赖更新/脚手架配置修改等
    - `ci` 持续集成

<!-- ## 代码贡献

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request` -->

## 已完成功能

- [x] 项目搭建

## 正在开发的功能

- [ ] 主题配置
- [ ] 黑暗主题
- [ ] 国际化
- [ ] 登录和注销
- [ ] 菜单（可以搜索及拖拽以及菜单布局）
- [ ] 多标签页/面包屑
- [ ] 基于角色的权限管理
- [ ] 基于后台的权限管理
- [ ] 分离的路由和菜单设置
- [ ] 可折叠侧边栏
- [ ] 可拖拽侧边栏
- [ ] 多标签页模式/全局控制
- [ ] 菜单搜索
- [ ] 页面加载 loading
- [ ] 滚动条组件
- [ ] 弹窗扩展（可拖拽,全屏,自适应高度）
- [ ] 模拟数据
- [ ] hook 封装
- [ ] 表单组件
- [ ] 右键菜单
- [ ] 水印插件
- [ ] 动画组件
- [ ] 二维码插件
- [ ] 详情组件
- [ ] 验证组件
- [ ] 树组件
- [ ] 图片预览组件
- [ ] 表格组件
- [ ] 图表库
- [ ] 数字动画
- [ ] 首屏加载等待动画
- [ ] 数据导入导出
- [ ] 全局错误处理
- [ ] 富文本组件
- [ ] 上传组件
- [ ] 打包 Gzip
- [ ] 打包 CDN

更多组件/功能/建议/bug/欢迎提交 pr 或者 issue

## 浏览器支持

本地开发推荐使用`Chrome`浏览器,在火狐浏览器进行开发相对卡顿。

支持现代浏览器, IE 暂不支持，后续考虑支持 ie11

| IE | Edge | Firefox | Chrome | Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ES%20Module)

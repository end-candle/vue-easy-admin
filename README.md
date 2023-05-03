# vue-easy-admin

[更新日志](CHANGELOG.zh_CN.md)

-   [介绍](#介绍)
-   [git 地址](#git地址)
-   [预览地址](#预览地址)
-   [文档](#文档)
-   [预安装](#预安装)
    -   [环境要求](#环境要求)
    -   [UI 框架](#ui-框架)
    -   [图标](#图标)
    -   [插件](#插件)
    -   [建议开发环境](#建议开发环境)
-   [安装](#安装)
-   [使用](#使用)
    -   [开发环境](#开发环境)
    -   [打包](#打包)
    -   [格式化](#格式化)
    -   [其他](#其他)
-   [Git 提交规范](#Git-Commit-Message-Convention-提交消息约定)
-   [已完成功能](#已完成功能)
-   [正在开发的功能](#正在开发的功能)
-   [浏览器支持](#浏览器支持)

## 介绍

项目基于`element-ui`,`javascript`,`vue2.0`实现的 vue2 风格的后台管理系统。

## git 地址

[vue-easy-admin](https://gitee.com/endcandle/vue-easy-admin.git) - master 分支

## 预览地址

[https://admin.flee-lether.cn](https://admin.flee-lether.cn/)

## 文档

暂无

## 预安装

### 环境要求

-   `Node.js`: - 版本最好大于 `12.0.0`
-   `pnpm` : - 包管理工具.

### UI 框架

-   [Element-plus](https://element-plus.gitee.io/zh-CN)

### 图标

暂无

### 插件

-   [Vue Router](https://github.com/vuejs/vue-router)
-   [pinia](https://pinia.vuejs.org/)
-   [vue-i18n](https://github.com/intlify/vue-i18n) - 国际化
-   [lodash-es](https://github.com/lodash/lodash) - JavaScript 实用程序库
-   [axios](https://github.com/axios/axios) - Http 数据交互
-   [wangeditor](http://www.wangeditor.com/) - 富文本编辑器
-   [element-plus](https://element-plus.gitee.io/zh-CN) - UI 组件库

### 建议开发环境

-   `Git`: - 版本管理工具
-   `Visual Studio Code` - (VSCode): 最新版本
    -   [VS Code Extensions](./.vscode/extensions.json)
        -   [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备
        -   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
        -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
        -   [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

## 安装

```bash
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
// 启用项目
npm run dev
```

### 打包

```bash

npm run build # 打包
```

### 格式化

```bash
npm run format # 代码格式化
```

### 其他

暂无

## Git Commit Message Convention 提交消息约定

> 遵循[Angular 的提交约定](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)。

## 已完成功能

-   [x] 项目搭建

## 正在开发的功能

-   [ ] 多标签页/面包屑
-   [ ] 富文本组件
-   [ ] 分离的路由和菜单设置
-   [ ] 模拟数据
-   [ ] 全局错误处理
-   [ ] 主题配置
-   [ ] 登录和注销
-   [ ] 打包 Gzip
-   [ ] 右键菜单
-   [ ] 表格组件
-   [ ] 黑暗主题
-   [ ] 国际化
-   [ ] 菜单（可以搜索及拖拽以及菜单布局）
-   [ ] 基于角色的权限管理
-   [ ] 基于后台的权限管理
-   [ ] 可折叠侧边栏
-   [ ] 可拖拽侧边栏
-   [ ] 多标签页模式/全局控制
-   [ ] 菜单搜索
-   [ ] 页面加载 loading
-   [ ] 滚动条组件
-   [ ] 弹窗扩展（可拖拽,全屏,自适应高度）
-   [ ] 表单组件
-   [ ] 水印插件
-   [ ] 动画组件
-   [ ] 二维码插件
-   [ ] 详情组件
-   [ ] 验证组件
-   [ ] 树组件
-   [ ] 图表库
-   [ ] 数字动画
-   [ ] 首屏加载等待动画
-   [ ] 数据导入导出
-   [ ] 上传组件
-   [ ] 打包 CDN

更多组件/功能/建议/bug/欢迎提交 pr 或者 issue

## 浏览器支持

本地开发推荐使用`Chrome`浏览器,在火狐浏览器进行开发相对卡顿。

支持现代浏览器, IE 暂不支持，后续考虑支持 ie11

|     IE      |      Edge       |     Firefox     |     Chrome      |     Safari      |
|:-----------:|:---------------:|:---------------:|:---------------:|:---------------:|
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ES%20Module)

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

[vue-easy-admin](https://gitee.com/Flee.Lethe.net/vue-easy-admin.git) - master 分支

## 预览地址

暂无

## 文档

暂无

## 预安装

### 环境要求

-   `Node.js`: - 版本最好大于 `12.0.0`
-   `npm` : - 包管理工具.

### UI 框架

-   [Element-ui](https://element.eleme.cn/#/zh-CN)

### 图标

暂无

### 插件

-   [Vue Router](https://github.com/vuejs/vue-router-next)
-   [Vuex](https://github.com/vuejs/vuex)
-   [vue-i18n](https://github.com/intlify/vue-i18n-next) - 国际化
-   [lodash-es](https://github.com/lodash/lodash) - JavaScript 实用程序库
-   [axios](https://github.com/axios/axios) - Http 数据交互
-   [wangeditor](http://www.wangeditor.com/) - 富文本编辑器
-   [reseter.css](https://krishdevdb.github.io/reseter.css/) - 浏览器通用重置央视
-   [element-ui](https://element.eleme.cn/#/zh-CN) - UI组件库
-   [@antv/g2](https://g2.antv.vision/zh) - 图表组件库

### 建议开发环境

-   `Git`: - 版本管理工具
-   `Visual Studio Code` - (VSCode): 最新版本
    -   [VS Code Extensions](./.vscode/extensions.json)
        -   [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备
        -   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
        -   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
        -   [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化

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
// 启用项目
npm run serve
// 启动mock服务
npm run mock
```

### 打包

```bash

npm run build # 打包
```

### 格式化

```bash
npm run lint # 代码格式化
```

### 其他

暂无

## Git Commit Message Convention 提交消息约定

> 改编自[Angular 的提交约定](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)。

#### TL;DR:

消息必须匹配以下正则表达式:

```js
/^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/;
```

#### 例子

出现在“Features”标题下，“compiler”子标题:

```
feat(compiler): add 'comments' option
```

出现在“性能改进”标题下，在“中断更改”下有中断更改的解释:

```
perf(core): improve vdom diffing by removing 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

如果下面的 commit 和 commit ' 667ecc1 '是在同一个版本下，那么它们不会出现在变更日志中。如果没有，恢复提交将出现在“revert”标题下。

```
revert: feat(compiler): add 'comments' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

### 完整的消息格式

一个提交消息由**页眉**、**正文**和**页脚**组成。标题有**类型**，**范围**和**主题**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**header**是强制性的，**scope**是可选的。

### 恢复

如果提交恢复了前一个提交，它应该以' revert: '开头，然后是被恢复的提交的头文件。在 body 中，它应该说:' This revert commit <hash>. ''，其中哈希是正在被恢复的提交的 SHA。

### 类型

如果前缀是' feat '， ' fix '或' perf '，它将出现在更新日志中。然而，如果有任何[BREAKING CHANGE](#footer)，提交将始终出现在变更日志中。
其他前缀则由您自行决定。对于与变更日志无关的任务，建议使用' docs '， ' chore '， ' style '， ' refactor '和' test '前缀。

### 范围

范围可以是任何指定提交更改位置的内容。例如' core '， ' compiler '， ' ssr '， ' v-model '， ' transition '等…

### 主题

主题包含对更改的简要描述:

-   使用祈使句，现在时:“change”而不是“changed”或“changes”
-   第一个字母不要大写
-   结尾没有点(.)

### 主体

就像在**主语**中一样，使用祈使句，现在时态:“change”而不是“changed”或“changes”。
主体应该包括改变的动机，并与以前的行为进行对比。

### 页脚

页脚应该包含任何关于 Breaking Changes 的信息，也是这个提交关闭的 GitHub 问题的地方。

**Breaking CHANGE **应该以单词“Breaking CHANGE:”开头，并加一个空格或两个换行符。然后使用提交消息的其余部分。

## 已完成功能

-   [x] 项目搭建
-   [x] 多标签页/面包屑
-   [x] 富文本组件
-   [x] 分离的路由和菜单设置
-   [x] 模拟数据
-   [x] 全局错误处理

## 正在开发的功能

-   [ ] 主题配置
-   [ ] 黑暗主题
-   [ ] 国际化
-   [ ] 登录和注销
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
-   [ ] 右键菜单
-   [ ] 水印插件
-   [ ] 动画组件
-   [ ] 二维码插件
-   [ ] 详情组件
-   [ ] 验证组件
-   [ ] 树组件
-   [ ] 图片预览组件
-   [ ] 表格组件
-   [ ] 图表库
-   [ ] 数字动画
-   [ ] 首屏加载等待动画
-   [ ] 数据导入导出
-   [ ] 上传组件
-   [ ] 打包 Gzip
-   [ ] 打包 CDN

更多组件/功能/建议/bug/欢迎提交 pr 或者 issue

## 浏览器支持

本地开发推荐使用`Chrome`浏览器,在火狐浏览器进行开发相对卡顿。

支持现代浏览器, IE 暂不支持，后续考虑支持 ie11

|     IE      |      Edge       |     Firefox     |     Chrome      |     Safari      |
| :---------: | :-------------: | :-------------: | :-------------: | :-------------: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ES%20Module)

- [x] :dart: storybook构建
- [x] :dart: 基础组件
- [x] :dart: 通讯组件
- [x] :dart: 视频组件
- [x] :dart: 重构Hooks
- [x] :trophy: 完善动画
- [x] :dart: 完善路由
- [x] :dart: 添加模拟数据
- [ ] :trophy: 部署Travis CI

[English](./README.EN.md) | 简体中文

<p align="center"><img width="500" src="https://ae01.alicdn.com/kf/Ud525d91fae7b4e16894af6c20dba87abK.jpg"></p>

<!-- <p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg" alt="Coverage Status"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
</p> -->

<h2 align="center"> Chat-UI —— React组件库 </h2>
<p align="center"><b> 一套基于React Hooks的组件库,实现了45个为移动端而生的常用组件 </b></p>

[→ 预览地址](https://react-chat-ui.netlify.app/)

# 开发笔记

- [生态](#生态)
- [必须收藏的资源](#必须收藏的资源)
- [快速入门](#快速入门)
  - [安装](#安装)
  - [用法](#用法)
- [贡献者们](#贡献者们)
- [维护者](#维护者)
- [感谢](#感谢)
- [License](#license)

### 特性

- 换用`styled-components`管理样式组件, 具有良好的扩展性 同时实践了 `CSS-IN-JS` 的开发理念
- 将 `hygen` 作为模板引擎, 减少重复代码工作。开发过程中有思考地重构, 致力提高可复用性, 让代码量减少了三分之一

## 参考资料

- [storybook文档](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)
- [React文档](https://reactjs.org/docs/getting-started.html)
- [dribbble设计稿](https://dribbble.com/shots/5262706-Daily-UI-13-Direct-Messaging)

## 快速入门

### 安装

```bash
$ cd chat-ui              # please ignore this command if you executed 'omi init' in an empty folder
$ npm install             # install modules
$ yarn run storybook      # start
```

目录说明:

```
├─ _templates
├─ .storybook
├─ public
├─ src
│  ├─ assets        //静态资源
│  ├─ components    //组件目录
│  ├─ data          //存放模拟数据
│  ├─ hooks         //存放抽取出的React Hooks
│  └─ stories       //storybook入口文件
```

## 贡献者们

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/gloomyKevin"><img width="60px" src="https://avatars1.githubusercontent.com/u/47132374?s=460&u=a4cddb370a56c1c4253607dcf5ba96b524c6a989&v=4"></a>
            </td>
        </tr>
    </tbody>
</table>

## 维护者

- [gloomyKevin](https://github.com/gloomyKevin)


## License

- [MIT](https://opensource.org/licenses/MIT)



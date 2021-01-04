# Project Hallinto Nuxt - Contribution Guide

> **NOTE**
>
> Please read this file entirely if you're new to the project.

---

## PRE-REQUESTS

You must know the followings to be able to contribute to the project.

- Typescript knowledge
- Functional Programming
- OOP
- Vue.js with Typescript
- Nuxt.js with Typescript
- Vuex
- ORM Natures

---

## Toolings

- VSCode (RECOMMENDED) or WebStorm
- Vetur Vscode Extension
- Git
- Eslint
- Prettier

> You need to install above tools on your development device in order to run this project.

---

## Commenting

For available comments, visit [typedoc.](https://typedoc.org/guides/doccomments/)

Comments are important parts of the Typescript projects.
You'll see the benefits of it when the project become larger
and more developers are collaborating in the single project.
Comments that follows the `typedoc` will show as documentation on supported text-editors.

See the example comment in `lib/business-layer/auth.ts`.

---

## Typescript

The reason for using Typescript is to reduce the bugs that'll run into when we run the code on browser. We can see those type of bugs while implementing.

If you don't know Typescript at all, you should read [5mins-intro-of-typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) to at least understand what is typescript and why we're using it.

<br/>

### Vue Typescript

Vue Version 2 has very little Typescript support compare to Vue Version 3.
Since Vue3 is not stable yet(during the period of this documentation is written), we can learn Vue2 with Typescript very fast.

I suggest you to read [vue-typescript-support](https://vuejs.org/v2/guide/typescript.html#ad) section in vue official docs.

<br/>

**Vue Typescript with Class Style Syntax**

If you're enthusiastic about OOP and wants to write Vue Typescript with Class Style Syntax, Vue has officially maintained class style decorators library.

- Read about [vue-class-component library.](https://class-component.vuejs.org/)

Although the vue has `vue-class-component` library, it doesn't support decorators for things like props, models and so on. To get Decorator support for those, we need `vue-property-decorator` which is an extension of `vue-class-component`.

- Read about [vue-property-decorator library.](https://github.com/kaorun343/vue-property-decorator)

<br/>

### Nuxt Typescript

Since we're using `nuxt.js` in this project, we also need to know the typescript methods of `nuxt` specific methods. Luckily, `nuxt.js` does have official typescript support with proper documentation.

- Read about [typescript-nuxt documentation.](https://typescript.nuxtjs.org/)

> All of the above Typescript related libraries are already installed in this project.
> You don't need to install anything to make things work.
>
> Open `issue` about Typescript if you don't understand the docs or stuck with Typescript.

---

## Vuex

Vuex is a must in a vue project. So, you must understand vuex in order to contribute in this project.

Read about [vuex.](https://vuex.vuejs.org/)

### Nuxt Vuex

Although `nuxt.js` already include `vuex` in it, writing style of `vuex` in `nuxt` is a little bit different, which is more easier than official `vuex`.

Read about [vuex in nuxt.js.](https://nuxtjs.org/docs/2.x/directory-structure/store)

### Vuex ORM

This is can be consider as a separate topic for the vuex. However, we need Vuex ORM since we're developing the enterprise level project. Normally, vuex alone will become complex more and more as the project grows larger. To decoupled the complex and large amount of data, Vuex creator created the Vuex ORM which is enable Global State as a Relational Mapping.

Read about [vuex-orm.](https://vuex-orm.org/)

> The whole Vuex ORM library is developed with Typescript.
> So, we don't need additional installations to enable Typescript support for this.
>
> Also, Vuex ORM is already installed in this project. You only need to learn how to write Vuex ORM.

---

## Project

> This section will be explaining about this project.

### Directories Structure

Nuxt.js already has it's own directory structure out of the box which reduce a lot of architectural problems.

Read about [nuxt directory structure](https://nuxtjs.org/docs/2.x/directory-structure/nuxt)

<br/>

**Project Specific Directories**

Since we installed `vuex-orm`, we need to organize the ORM models and database. Therefore, you can find there's a folder called `vuex-orm` with the `models` and `database` folders inside it.

As application grows, sooner or later, it'll become necessary to implement customized logics. To separate those kind of logics with the UI components, there is a folder called `lib`, which will contain all the customized logics.

To be able to separate the application UI and Business Logics such as data fetching, we'll be separating the folder called `business-layer` inside `lib` folder, which will provide business related data and doing business specific logics.

```
/root-of-project
|--...
|--/lib
  |--/business-layer
|--/vuex-orm
  |--/models
  |--/database
|--...
```

---

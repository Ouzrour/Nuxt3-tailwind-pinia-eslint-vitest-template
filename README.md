## The Full Version of Nuxt3 with Tailwindcss , Eslint , Pinia 3 , Vitest ( and documentation )  
![](/banner.png)
#### By : Ouzrour Ilyas
#### Last Update : 15.8.23

---


### Installation of Nuxt3

1. Installation de nuxt3 par le script ( the name of the folder must don't contain any space ) :

```shell
npx nuxi@latest init Name_of_project
```

2. run :

```shell
npm i
```

3. test it in dev mod :

```
npm run dev -- -o
```
4. create a folder in the root folder named "**_assets_**" ( a good practice then letting them in the public folder because the vite engine optimize all files in this folder : images / css / js / ts ... )
### installation of Eslint

1. run the code :

```shell
# ESLint
npm install --save-dev eslint
npm install --save-dev @typescript-eslint/eslint-plugin@latest --save-dev
# Prettier
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
# TypeScript support
npm install --save-dev typescript @typescript-eslint/parser @nuxtjs/eslint-config-typescript
```

2. add a file name is "**_.eslintrc.cjs_**" in the root path :

```
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {},
}
```

3. add this lines to "scripts" in "**_package.json_**" :

```
"lint:js": "eslint --ext \".ts,.vue\" --ignore-path .gitignore .",
"lint:prettier": "prettier --check .",
"lint": "npm run lint:js && npm run lint:prettier",
"lintfix": "prettier --write --list-different . && npm run lint:js --fix"
```

4. create a file named "**_.prettierignore_**" and paste this into it :

```
#prettierignore
*.log*
.nuxt
.nitro
.cache
.output
.env
dist
```

5. run this code to test it :

```shell
npm run lint
```

### Tailwind installation

1 . run the installation code : 
```shell
npm install --save-dev @nuxtjs/tailwindcss
```
2. add the tailwind's module to the "**_nuxt.config.js_**" file : 
```
// nuxt.config.ts

export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    '@nuxtjs/tailwindcss',
  ],
})
```
3. create a default tailwindcss config file named "**_tailwind.config.js_**" in the root path : 
```js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
    },
  },
  plugins: [],
}
```
### installation of Pinia 3

1. install it with this code : 
```shell
npm i --save-dev @pinia/nuxt
```
2. add the module to the "**_nuxt.config.js_**" file : 
```
// nuxt.config.ts

export default defineNuxtConfig({
  // ...
  modules: [
    // ...
    '@pinia/nuxt',
  ],
})
```
3. create a folder named "**_stores_**"
4. we gonna create a counter ( example ) , create a "**_counter.ts_**" on it : 
```ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: (state) => state.count,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
```
5. we gonna create a file with "**_Counter.vue_**" on the "**_components_**" ( that exist in the root folder ) :
```
<template>
  <div>
    <div >
      <p >Counter: {{ getCount }}</p>
      <button
        type="button"
        @click="increment"
      >
        Increment
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useCounterStore } from "@/stores/counter";

export default defineComponent({
  setup() {
    const store = useCounterStore();
    const getCount = computed(() => store.getCount);
    const { increment } = store;
    return { getCount, increment };
  },
});
</script>
```
### Vitest
1. install the packages :
```shell
# Vitest
npm install --save-dev vitest jsdom @vitejs/plugin-vue
# Test utils
npm install --save-dev @vue/test-utils @nuxt/test-utils
```
2. configure a file in the root folder named "_**vitest.config.js**_" :
```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
```
3. install the vitest plugin for eslint  : 
```
npm install --save-dev eslint-plugin-vitest
```
4. integrate it to the "**_.eslintrc.cjs_**" file : 
```
// .eslintrc.cjs

module.exports = {
  // ...
  plugins: ['vitest'],
  // ...
}
```
5. Add the following script to your project: 
```
// package.json

{
  // ...
  "scripts": {
    // ...
    "test": "vitest"
    // ...
  }
  // ...
}
```
6. create a folder in root folder named "**_tests_**"
7. creating a ts file like that ( this is just the structure ) : 
```ts
// tests/HelloWorld.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.vm).toBeTruthy()
  })
})
```
8. run the command : 
```
npm run test
```
### Addition
1. add a folder "**_plugins_**" : 
Nuxt automatically reads the files in your `plugins` directory and loads them at the creation of the Vue application. You can use `.server` or `.client` suffix in the file name to load a plugin only on the server or client side. 
2. add a folder "**_layouts_**" : Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.
Layouts are placed in the layouts/ directory and will be automatically loaded via asynchronous import when used. Layouts are used by adding <NuxtLayout> to your app.vue, and either setting a layout property as part of your page metadata (if you are using the ~/pages integration), or by manually specifying it as a prop to <NuxtLayout>. (Note: The layout name is normalized to kebab-case, so someLayout becomes some-layout.)
3. create the folder : `content` ( docs : [Here](https://nuxt.com/docs/guide/directory-structure/content )) , `middleware` ( docs : [Here](https://nuxt.com/docs/guide/directory-structure/middleware )) ,`modules`( docs : [Here](https://nuxt.com/docs/guide/directory-structure/modules )) ,`composables` ( docs : [Here](https://nuxt.com/docs/guide/directory-structure/composables )).

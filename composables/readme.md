# Composables Directory

Nuxt 3 uses the `composables/` directory to automatically import your Vue composables into your application using auto-imports!

Under the hood, Nuxt auto generates the file `.nuxt/imports.d.ts` to declare the types.

Be aware that you have to run `nuxi prepare`, `nuxi dev` or `nuxi build` in order to let Nuxt generate the types. If you create a composable without having the dev server running, TypeScript will throw an error, such as `Cannot find name 'useBar'`.

Check the full documentation  [Here](https://nuxt.com/docs/guide/directory-structure/composables)

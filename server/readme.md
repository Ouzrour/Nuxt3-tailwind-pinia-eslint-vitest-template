# Server Directory


Nuxt automatically scans files inside these directories to register API and server handlers with HMR support:

    ~/server/api
    ~/server/routes
    ~/server/middleware

Each file should export a default function defined with **defineEventHandler()** or **eventHandler()** (alias).

The handler can directly return JSON data, a Promise or use event.node.res.end() to send a response.

Check the full documentation  [Here](https://nuxt.com/docs/guide/directory-structure/server)
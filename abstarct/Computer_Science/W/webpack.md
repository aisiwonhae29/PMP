# webpack

### To Run JavaScript in a browser

1. include a script for each functionality; but this makes hard to scale because loading too many scripts cause a network bottleneck.
2. Use a big .js file containing all your project code, also has problems about scope, size, readability and maintainability.
3. Their dependencies and bundles them into a single file that can be loaded by a web browser.
4. Webpack can bundle not only JavaScript but also CSS, images, and other assets.


### about

- Because of the complexity of modern web application, webpack made for optimizing the management

- Hundres of import, requiers Css, difference from dev and production codes, performance optimization.

### fucntion

- Managements of modules
- Manage of resources
- Bundling
- Optimization of development
- Optimization of production
- security and consistency


### structure

\# basic

project/
├── src/
│   ├── index.tsx         ← entry point (리액트, TS)
│   ├── App.tsx
│   └── style.css
├── dist/
│   └── index.html         ← 출력될 HTML
├── webpack.config.js      ← Webpack 설정
├── package.json
├── tsconfig.json

\# experts

project/
├── build/
│   ├── webpack.base.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── index.tsx
├── public/
│   └── index.html
├── dist/
├── .env
├── package.json

### example code

- [example code](../../../Language/web/webpack/src/index.js)

- command: npm run build
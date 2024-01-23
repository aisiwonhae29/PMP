# PostCSS

### about

- node.js tool that transforms your styles using JavaScript plugins
- transforms your CSS code into an abstract syntax tree (AST) and then provides an API for analyzing and modifying it using JavaScript plugin
- provides a large ecosystem of plugins to perform different functionalities(ex: linting, minifying, inserting vendor prefixes ... )


### Command

- create 'postcss.config.js' file

```
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
};
```

- write Your CSS
  
```
.example {
    display: flex;
    transition: transform 0.3s;
}
```

- run Autoprefixer
  
```
"scripts": {
    "build-css": "postcss styles.css -o dist/styles.css
}
cmd: npm run build-css
```
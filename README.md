# gridsome-remark-classes
Gridsome Remark plugin to add css classes to any element

Inspired by [chrisg86/gatsby-remark-classes](https://github.com/chrisg86/gatsby-remark-classes)

# Installation

```
npm install --save @noxify/gridsome-remark-classes
```

# Usage

```js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    }
  ],

  transformers : {
    remark : {
      plugins : [
        ['@noxify/gridsome-remark-classes', {
          'heading[depth=1]': 'title',
          'heading[depth=2]': 'subtitle',
          'paragraph': 'text-normal font-serif'
        }]
      ]
    }
  }
}
```
# Documentation

You can find the complete documentation here: https://webstone.info/documentation/gridsome-remark-classes

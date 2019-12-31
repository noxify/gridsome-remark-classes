# gridsome-remark-classes
Gridsome Remark plugin to add css classes to any element

Inspired by chrisg86/gatsby-remark-classes

# Installation

```
npm install --save @noxify/gridsome-remark-classes
```

# Configuration

## Globally

Inside the `gridsome.config.js` you can define it globally to enable this transformer for all data sources.

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

## Data Source

Inside the `gridsome.config.js` you can define it individual for each data source.

```js
module.exports = {

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            ['@noxify/gridsome-remark-classes', {
              'heading[depth=1]': 'title',
              'heading[depth=2]': 'subtitle',
              'paragraph': 'text-normal font-serif'
            }]
          ]
        }
      }
    }
  ]
}
```

# Usage

The transformer uses (unist-util-select)[https://github.com/syntax-tree/unist-util-select] to identify an element.

You can find a list of supported/existing/allowed nodes types at
* https://github.com/syntax-tree/mdast#nodes
* https://github.com/syntax-tree/unist-util-select#support


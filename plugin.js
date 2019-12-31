const selectAll = require('unist-util-select').selectAll;


/**
 * Source: https://github.com/chrisg86/gatsby-remark-classes/blob/master/index.js#L3
 */
const addClasses = (node, classes) => {
  node.data = node.data || {};
  node.data.hProperties = node.data.hProperties || {};
  node.data.hProperties.className = node.data.hProperties.className || [];

  node.data.hProperties.className.push(classes);

  return node;
};

module.exports = function (options) {

  return async function transform(tree) {
    
    const definitions = Object.keys(options);
        
    definitions.forEach(function(elementName) {
            
      const nodes = selectAll(elementName, tree);

      nodes.forEach(function(node) {
        try {
          node = addClasses(node, options[elementName])
        } catch(e) {          
        }
      });
    });
  }
}

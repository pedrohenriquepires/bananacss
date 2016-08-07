const getParam = require('./getParam.js');
const addProperty = require('./addProperty.js');
const removeProperty = require('./removeProperty.js');

const bnnHeight = (declarations) => {

  declarations.forEach((declaration, index) => {

    if (declaration.property === 'bnn-height') {

      removeProperty(declarations, index);

      const propertyHeight = getParam(declaration.value, 0);

      addProperty(declarations, index, 'max-height', propertyHeight);
      addProperty(declarations, index, 'height', '100%');

    }

  });

};

module.exports = bnnHeight;
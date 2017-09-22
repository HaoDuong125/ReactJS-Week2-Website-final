var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxProductConstants');

var FluxActionProduct = {
	
	// add product
	addToProduct: function (sku, update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    })
  },

  // Remove product
  removeFromProduct: function (sku) {
    AppDispatcher.handleAction({
      actionType: FluxProductConstants.PRODUCT_REMOVE,
      sku: sku
    })
  },

  // Update product
  updateProductUpdate function (productUpdate) {
    AppDispatcher.handleAction({
      actionType: FluxProductConstants.PRODUCT_UPDATE,
      productUpdate: productUpdate
    })
  }
};
class Product {
  // type = ''
  productType = ''
  unitType = ''
  productName = ''
  stock = 0
  productPrice = 0

  constructor (productName, stock, productPrice, unitType){
    this.productName = productName !== this.productName ? productName : this.productName
    this.stock = stock !== this.stock ? stock : this.stock
    this.productPrice = productPrice !== this.productPrice ? productPrice : this.productPrice
    this.unitType = unitType !== this.unitType ? unitType : this.unitType
    // console.log(this[productType]);
  }

  setProductType (productType){
    this.productType = productType
  }
  setUnitType (unitType){
    this.unitType = unitType
  }
  setProductName (productName){
    this.productName = productName
  }
  setStock (stock){
    this.stock = stock
  }
  setProductPrice (productPrice){
    this.productPrice = productPrice
  }

  getProductType (){
    return this.productType 
  }
  getUnitType (){
    return this.unitType 
  }
  getProductName (){
    return this.productName 
  }
  getStock (){
    return this.stock 
  }
  getProductPrice (){
    return this.productPrice 
  }
}

class Fashion extends Product {
 productType = 'Fashion'
}
class Food extends Product {
 productType = 'Food'
}

const stuff = new Fashion ('Shirt', 2, 50000, 'Pcs')

console.log(stuff.getProductType());
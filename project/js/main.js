const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
    }
 
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render());
        }
    }
    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    goodsSum(){
        console.log(this.goods.reduce(
           (p,c) => {return parseInt(p + c.price);}   
        ,''))
    }
    
}

class ProductItem{
    constructor(product, img="https://placehold.it/200x150"){
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    
    render(){
         return `<div class="products-item">
                <img alt="some img" src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
    
}



 
let list = new ProductsList();

class Basket {
    addGoods() {
        let bask = document.querySelector('.basket');
        let add = new elemBasket();
        bask.insertAdjacentHTML('beforeend',add.render());

    }
    removeGoods() {

    }
    changeGoods() {

    }
    render(){
        let visible = document.querySelector(".basket");
            visible.style = 'visibility: visible;';
    }
}

class elemBasket {
    constructor(itemProd = document.querySelector('.products-item')){
        this.title = itemProd.getElementsByTagName('h3');
        this.price = itemProd.getElementsByTagName('p');
    }
    render(){
        return `<div class="basket-item">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="delete-good">Удалить товар</button>
            </div>`
    }
}
let basket = new Basket();
let basketBtn = document.querySelector(".btn-cart");
 basketBtn.onclick = () => {basket.render();}
 let buyBtn = document.querySelector('.buy-btn');
 buyBtn.onclick = () => {
     basket.addGoods();
 }
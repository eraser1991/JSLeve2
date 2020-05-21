class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProduct();
        this.render();
    }
    _fetchProduct(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render());
        }
    }

    goodsSum(){
        console.log(this.goods.reduce(
           function(p,c){
               return parseInt(p + c.price);
                }
        ,''))
    }
    
}

class ProductItem{
    constructor(product, img="https://placehold.it/200x150"){
        this.title = product.title;
        this.id = product.id;
        this.img = img;
        this.price = product.price;
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

list.goodsSum();

// class basket {
//     constructor
//     render(){

//     }
//     goodsSum(){

//     }
// }

// class basketItem{
//     constructor
//     render(){

//     }
// }
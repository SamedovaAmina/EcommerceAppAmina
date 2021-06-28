
let products = [
    {
        id: 1,
        name: 'Navy Men Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'pants 1.jpeg',
        category: 'trousers',
        price: 45.99
    },
    {
        id: 2,
        name: 'Navy Women Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'pants 2.jpeg',
        category: 'trousers',
        price: 55.99
    },
    {
        id: 3,
        name: 'Navy Women Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'pants 3.jpeg',
        category: 'trousers',
        price: 85.99
    },
    {
        id: 4,
        name: 'Navy Men Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'pants 4.jpeg',
        category: 'trousers',
        price: 95.99
    },
    {
        id: 5,
        name: 'Navy Women Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'pants 5.jpeg',
        category: 'trousers',
        price: 66.99
    },
    {
        id: 6,
        name: 'Navy Men Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'shoes 1.jpg',
        category: 'shoes',
        price: 21.46
    },
    {
        id: 7,
        name: 'Navy Women Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'shoes 2.jpg',
        category: 'shoes',
        price: 32.34
    },
    {
        id: 8,
        name: 'Navy Women Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'shoes 3.jpg',
        category: 'shoes',
        price: 26.35
    },
    {
        id: 9,
        name: 'Navy Men Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'shoes 4.jpg',
        category: 'shoes',
        price: 25.99
    },
    {
        id: 10,
        name: 'Navy Women Pants',
        description: '98% COTTON 2% Elastane',
        picture: 'shoes 5.jpg',
        category: 'shoes',
        price: 35.23
    },
    {
        id: 11,
        name: 'Woman Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 1.jpeg',
        category: 'shirts',
        price: 35.23
    },
    {
        id: 12,
        name: 'Woman Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 2.jpeg',
        category: 'shirts',
        price: 35.23
    },
    {
        id: 13,
        name: 'Woman Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 3.jpeg',
        category: 'shirts',
        price: 35.23
    },
    {
        id: 14,
        name: 'Men Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 4.jpeg',
        category: 'shirts',
        price: 35.23
    },
    {
        id: 15,
        name: 'Men Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 5.jpeg',
        category: 'shirts',
        price: 35.23
    },
    {
        id: 16,
        name: 'Women Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 6.jpeg',
        category: 'shirts',
        price: 35.23
    },
    {
        id: 17,
        name: 'Men Long Sleeve Shirt',
        description: '%100 PAMUK',
        picture: 'shirts 7.jpeg',
        category: 'shirts',
        price: 35.23
    }
]
let categories = ['shoes', 'trousers', 'shirts'];

class DOMmanager{
    
    #counter;
    #counterBlock;
    #resetCounterBlock;

    constructor(){
        this.#counter = localStorage.counter ? +localStorage.counter : 0;
        this.#counterBlock = this.getElmBySelect('#cart-counter');
        this.#resetCounterBlock = this.getElmBySelect('#reset-counter');
    }
    
    
    createProductContainer(product = null){
        let
            block = this.#getTag('div'),
            container = this.#getTag('section'),
            picture = this.#getTag('img'),
            heading = this.#getTag('h3'),
            description = this.#getTag('p'),
            price = this.#getTag('p'),
            btnAdd = this.#getTag('button');

            block.className = 'col-lg-3 col-md-4 col-sm-5 col-xl-2 d-flex justify-content-center';
            container.className = 'product-container shadow border text-center p-2';
            container.style.width = '90%';
            container.style.height = '500px';
            picture.className = 'product-picture';
            picture.style.width = '100%';
            picture.style.height = '200px';
            picture.src = `../img/${product.picture}`;
            heading.className = 'product-heading';
            heading.innerText = product.name;
            description.className = 'product-description';
            description.innerText = product.description;
            price.className = 'product-price';
            price.innerText = `${product.price} $`;
            btnAdd.className = 'btn-add btn btn-outline-info';
            btnAdd.innerText = 'Add to Cart';
            btnAdd.addEventListener('click', () => {
                this.#counter++;
                localStorage.counter = this.#counter;
                this.#counterBlock.innerText = +localStorage.counter;
            });

            this.#insertAppendElements(container, picture, heading, description, price, btnAdd);
            block.appendChild(container);

            return block;
    }
    displaySlider(){

    }

    getElmBySelect(selector){
        return document.querySelector(selector);
    }

    getElmsBySelect(selector){
        return document.querySelectorAll(selector);
    }

    #getTag(tagName){
        return document.createElement(tagName);
    }
    #insertAppendElements(parent, ...elements){
        for (let elm of elements ) {
            parent.appendChild(elm);
        }
    }

    displayCounter(){
        this.#counterBlock.innerText = localStorage.counter ? localStorage.counter : 0;
    }
    subscribeResetCounterEvent(){
        this.#resetCounterBlock.addEventListener('click', () => {
            this.#counter = 0;
            this.#counterBlock.innerText = this.#counter;
            localStorage.counter = this.#counter;
        });                
    }
    clearProductList(selector){
        let parent = this.getElmBySelect(selector);
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

class ProductManager{
    #products;
    constructor(data){
        this.#products = data;
    }
    getAllProducts(){
        return this.#products;
    }


    getProductCategory($class = '', allCategories){
        let result = '';
        for (let categ of allCategories) {            
            if($class.includes(categ)){
                result = categ;
            }
        }

        return result;
    }
    getProducts(callback){
        let array = [];
        for (let product of this.#products) {
            if(callback(product)){
                array.push(product);
            }
        }

        return array;
    }
}






let domManager = new DOMmanager();

let productManager = new ProductManager(products); 

domManager.displayCounter();
domManager.subscribeResetCounterEvent();

// load home page
    (function () {
        domManager.clearProductList('.products-list');
        domManager.displaySlider();
        for (let product of productManager.getProducts( (x) => x.price >= 32)){
            domManager.getElmBySelect('.products-list').appendChild(domManager.createProductContainer(product));
    }
    }) ();

// a list of all products
domManager.getElmBySelect('#products').addEventListener('click', () =>{
    
    domManager.clearProductList('.products-list');

    for (let product of productManager.getAllProducts()) {
        domManager.getElmBySelect('.products-list').appendChild(domManager.createProductContainer(product));
    }
});

// home page + a list of popular products
domManager.getElmBySelect('.home').addEventListener('click', () => {
    domManager.clearProductList('.products-list');
    domManager.displaySlider();
    for (let product of productManager.getProducts( (x) => x.price >= 32)){
        domManager.getElmBySelect('.products-list').appendChild(domManager.createProductContainer(product));
    }
});

// categorized list of products
let categoriesBtns = domManager.getElmsBySelect('.category');

for (let btn of categoriesBtns) {
    btn.addEventListener('click', (e) =>{
        domManager.clearProductList('.products-list');
        let category = productManager.getProductCategory(e.target.className, categories);
        let productsCateg = productManager.getProducts((p) => p.category == category);
        for (let product of productsCateg){
            domManager.getElmBySelect('.products-list').appendChild(domManager.createProductContainer(product));
        }
    });
}

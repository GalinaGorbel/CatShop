"use strict"
@@include('card.js');
@@include('scrollup.js');

const obj = [{
    title: 'Кот полосатый',
    foto: './img/main/cat1.png',
    price: 30000,
    age: 3,
    paws: 4,
    discount: '-41%',
    sold: false,
    like: false
}, 
{    
    title: 'Кот полосатый',
    foto: './img/main/cat2.png',
    price: 40000,
    age: 4,
    paws: 4,
    discount: false,
    sold: true,
    like: false
}, 
{
    title: 'Кот полосатый',
    foto: './img/main/cat3.png',
    price: 20000,
    age: 2,
    paws: 4,
    discount: false,
    sold: false,
    like: false   
},
{
    title: 'Кот полосатый',
    foto: './img/main/cat1.png',
    price: 25000,
    age: 2,
    paws: 4,
    discount: false,
    sold: false,
    like: false
}, 
{    
    title: 'Кот полосатый',
    foto: './img/main/cat2.png',
    price: 30000,
    age: 2,
    paws: 4,
    discount: '-41%',
    sold: false,
    like: false
}, 
{
    title: 'Кот полосатый',
    foto: './img/main/cat3.png',
    price: 10000,
    age: 1,
    paws: 4,
    discount: false,
    sold: true,
    like: false   
}];

const card = new CardSort({
    obj: obj,
    wrap: '.main__center',
    qty: 6
});

card.init();
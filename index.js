import menuArray from '/data.js'

function getPropertyHtml(array) {
    return array.map(function(menu){
        return `<section>
            <h1 class=emoji>${menu.emoji}</hi>
            <div>
                <h1 class=title>${menu.name}</hi>
                <h2 class=ingredients>${menu.ingredients}</h2>
                <h1 class=title>$${menu.price}</hi>
            </div>
            <button class=add id=${menu.id}>+</button>
        </section>` 
    })
}

document.getElementById('container').innerHTML = getPropertyHtml(menuArray)


const pizza = document.getElementById('0') 
const hamburger = document.getElementById('1')
const beer = document.getElementById('2')
const order = document.getElementById('order')
const totalPrice = document.getElementById('totalPrice')
const complete = document.getElementById('complete')
const modal = document.getElementById('modal')
const checkout = document.getElementById('checkout')
let totalprice = 0

function addFood(price){   
    totalprice += price
    totalPrice.innerHTML = `$${totalprice}`
}

pizza.addEventListener('click',function(){
    order.innerHTML += `<div><h1 class="food" >Pizza</h1>
    <h1 class="price2">$14</h1></div>
    `
    addFood(14)
})

hamburger.addEventListener('click',function(){
    order.innerHTML += `<div><h1 class="food">Hamburger</h1>
    <h1 class="price2">$12</h1></div>
    `
    addFood(12)
})

beer.addEventListener('click',function(){
    order.innerHTML += `<div><h1 class="food">Beer</h1>
    <h1 class="price2">$12</h1></div>
    `
    addFood(12)
})
complete.addEventListener('click',function(){
    if (totalprice != 0){
        modal.style.display = 'inline'
    }
    
})  

modal.addEventListener('submit',function(e){
    e.preventDefault()
    modal.style.display = 'none'
    checkout.innerHTML = `
    <h1 class = "thanks">Thanks, Your order is on its way!</h1>`
})
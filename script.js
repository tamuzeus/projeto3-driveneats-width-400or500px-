

// active border

function activeBorderFood(element){

    let selector = document.querySelector('.containerFood .selector')
    if(selector !== null){
        selector.classList.remove('selector')
    }
    element.classList.add('selector')
}

function activeBorderDrink(element){

    let selector = document.querySelector('.containerDrink .selector')
    if(selector !== null){
        selector.classList.remove('selector')
    }
    element.classList.add('selector')
}

function activeBorderDessert(element){

    let selector = document.querySelector('.containerDessert .selector')
    if(selector !== null){
        selector.classList.remove('selector')
    }
    element.classList.add('selector')
}

// active buttons

function activeCheckedFood(element){
    let checked = document.querySelector('.containerFood .checked-button')
    let active = document.querySelector('.containerFood .active')

    if(active !== null){
        active.classList.remove('active')
    }

    checked.classList.add('active')
}

// active green button






























// // active border

// function activeBorderFood(){
//     let painel = document.querySelectorAll('.containerFood .painel');
//     for(let i = 0; i < painel.length ; i ++){
//         painel[i].classList.toggle('selectorFood')
//     }
// }

// function activeBorderDrink(){
//     let painel = document.querySelectorAll('.containerDrink .painel');
//     for(let i = 0; i < painel.length ; i ++){
//         painel[i].classList.toggle('selectorDrink')
//     }
// }

// function activeBorderDessert(){
//     let painel = document.querySelectorAll('.containerDessert .painel');
//     for(let i = 0; i < painel.length ; i ++){
//         painel[i].classList.toggle('selectorDessert')
//     }
// }

// // active buttons

// function activeCheckedFood(){
//     let buttonchecked = document.querySelectorAll('.containerFood .checked-button')
//     for(let i = 0; i < buttonchecked.length; i++){
//         buttonchecked[i].classList.toggle('activeFood')
//     }
// }

// function activeCheckedDrink(){
//     let buttonchecked = document.querySelectorAll('.containerDrink .checked-button')
//     for(let i = 0; i < buttonchecked.length; i++){
//         buttonchecked[i].classList.toggle('activeDrink')
//     }
// }

// function activeCheckedDessert(){
//     let buttonchecked = document.querySelectorAll('.containerDessert .checked-button')
//     for(let i = 0; i < buttonchecked.length; i++){
//         buttonchecked[i].classList.toggle('activeDessert')
//     }
// }

// // active green button












// // teste


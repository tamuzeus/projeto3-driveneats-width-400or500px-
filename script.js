// active border

function activeBorderFood(element){

    let selector = document.querySelector('.containerFood .selector')
    if(selector !== null){
        selector.classList.remove('selector')
    }
    element.classList.add('selector')
    activeGreen ()
}

function activeBorderDrink(element){

    let selector = document.querySelector('.containerDrink .selector')
    if(selector !== null){
        selector.classList.remove('selector')
    }
    element.classList.add('selector')
    activeGreen ()
}

function activeBorderDessert(element){
    let selector = document.querySelector('.containerDessert .selector')
    if(selector !== null){
        selector.classList.remove('selector')
    }
    element.classList.add('selector')
    activeGreen ()
}

// active buttons


function activeCheckedFood(element){
    
    let checked = element.querySelector('.containerFood .checked')
    let active = document.querySelector('.containerFood .active')
    if (active !== null){
        active.classList.remove('active')
    }
    checked.classList.add('active')
}


function activeCheckedDrink(element){
    
    let checked = element.querySelector('.containerDrink .checked')
    let active = document.querySelector('.containerDrink .active')
    if (active !== null){
        active.classList.remove('active')
    }
    checked.classList.add('active')
}


function activeCheckedDessert(element){
    
    let checked = element.querySelector('.containerDessert .checked')
    let active = document.querySelector('.containerDessert .active')
    if (active !== null){
        active.classList.remove('active')
    }
    checked.classList.add('active')
}



// active green button

function activeGreen (){
    let buttonConfirmation = document.querySelector('.buttonConfirmation')
    let textButton = document.querySelector('.textButton')

    let confirmationFood = document.querySelector('.containerFood .selector');
    let confirmationDrink = document.querySelector('.containerDrink .selector');
    let confirmationDessert = document.querySelector('.containerDessert .selector');

    if(confirmationFood && confirmationDrink && confirmationDessert){
        buttonConfirmation.classList.add('greenButton')
        textButton.innerHTML = "Fazer pedido"
    }
}




























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


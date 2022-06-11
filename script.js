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
// link do zap 

// https://wa.me/5599999045111
//https://wa.me/5599999045111?text=urldamensagempronta

function linkdoZap (){

    let confirmationFood = document.querySelector('.containerFood .selector');
    let confirmationDrink = document.querySelector('.containerDrink .selector');
    let confirmationDessert = document.querySelector('.containerDessert .selector');

    if(confirmationFood && confirmationDrink && confirmationDessert){
        
        const nameFoodDiv = confirmationFood.querySelector('.name')
        const nameDrinkDiv = confirmationDrink.querySelector('.name')
        const nameDessertDiv = confirmationDessert.querySelector('.name')

        const valueFoodDiv = confirmationFood.querySelector('.priceNumber')
        const valueDrinkDiv = confirmationDrink.querySelector('.priceNumber')
        const valueDessertDiv = confirmationDessert.querySelector('.priceNumber')

        const nameFood = nameFoodDiv.innerText
        const nameDrink = nameDrinkDiv.innerText
        const nameDessert = nameDessertDiv.innerText

        const valueFoodString = valueFoodDiv.innerText
        const valueDrinkString = valueDrinkDiv.innerText
        const valueDessertString =  valueDessertDiv.innerText

        const valueFood = parseFloat(valueFoodString)
        const valueDrink = parseFloat(valueDrinkString)
        const valueDessert = parseFloat(valueDessertString)

        const valueTotal = valueFood + valueDrink + valueDessert
        

        let textodecompra = `
        Olá, gostaria de fazer o pedido:
        - Prato: ${nameFood}
        - Bebida: ${nameDrink}
        - Sobremesa: ${nameDessert}
        Total: R$ ${valueTotal.toFixed(2)}
        `
        
        const link = `https://wa.me/5599999045111?${textodecompra}`;
        const encodedlink = encodeURI(link);

        openLink(encodedlink)
    }

    
}




function openLink (element) {window.open(element, "_blank");}


















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


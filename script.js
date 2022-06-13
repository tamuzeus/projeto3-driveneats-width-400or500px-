let confirmationFood;
let confirmationDrink;
let confirmationDessert;

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

    confirmationFood = document.querySelector('.containerFood .selector');
    confirmationDrink = document.querySelector('.containerDrink .selector');
    confirmationDessert = document.querySelector('.containerDessert .selector');

    if(confirmationFood && confirmationDrink && confirmationDessert){
        buttonConfirmation.classList.add('greenButton')
        textButton.innerHTML = "Fazer pedido"
    }
}

//Confirmation button

function greenArea(){
    let modal = document.querySelector('.modal')

    let nameSquareFood = document.querySelector('.squareFood .nameSquare')
    let priceSquareFood = document.querySelector('.squareFood .priceSquare')

    let nameSquareDrink = document.querySelector('.squareDrink .nameSquare')
    let priceSquareDrink = document.querySelector('.squareDrink .priceSquare')

    let nameSquareDessert = document.querySelector('.squareDessert .nameSquare')
    let priceSquareDessert = document.querySelector('.squareDessert .priceSquare')

    const totalPrice = document.querySelector('.totalPrice')

    if(confirmationFood && confirmationDrink && confirmationDessert){
        modal.classList.add('activeScreen')
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

        const valueFoodfixed = parseFloat(valueFoodString).toFixed(2)
        const valueDrinkfixed = parseFloat(valueDrinkString).toFixed(2)
        const valueDessertfixed = parseFloat(valueDessertString).toFixed(2)

        const valueFood = parseFloat(valueFoodString)
        const valueDrink = parseFloat(valueDrinkString)
        const valueDessert = parseFloat(valueDessertString)

        let soma = valueFood + valueDrink + valueDessert

        nameSquareFood.innerHTML = nameFood;
        priceSquareFood.innerHTML = valueFoodfixed;

        nameSquareDrink.innerHTML = nameDrink;
        priceSquareDrink.innerHTML = valueDrinkfixed;

        nameSquareDessert.innerHTML = nameDessert;
        priceSquareDessert.innerHTML = valueDessertfixed;

        totalPrice.innerHTML = soma.toFixed(2);
    }
}

function cancelConfirmation(){
    let modal = document.querySelector('.modal')
    modal.classList.remove('activeScreen')

    const header = document.querySelector('header')
    const article = document.querySelector('article')
    const footer = document.querySelector('footer')

    header.classList.remove('backfilter')
    article.classList.remove('backfilter')
    footer.classList.remove('backfilter')
}

// link do zap 

//https://wa.me/5599999045111?text=urldamensagempronta

function linkdoZap(){
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
        
        const nome = prompt('Digite seu nome: ')
        const endereço = prompt('Digite seu endereço: ')


        let textodecompra = `
        Olá, gostaria de fazer o pedido:
        - Prato: ${nameFood}
        - Bebida: ${nameDrink}
        - Sobremesa: ${nameDessert}
        Total: R$ ${valueTotal.toFixed(2)}

        Nome: ${nome}
        Endereço: ${endereço}
        `
        
        const link = textodecompra;
        const encodedlink = encodeURIComponent(link, "_blank");
        const allLink = "https://wa.me/5599999045111?text=" + `${encodedlink}`

        openLink(allLink)
    }
}

function openLink (element) {window.open(element);}














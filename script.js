if (document.readyState == 'loading') { document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();   
} 

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons);
    for(var i = 0; i < removeCartButtons.length;i++){
        var button = removeCartButtons[i];
        button.addEventListener('click',removeCartItem);
    }
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

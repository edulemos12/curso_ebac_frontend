const btn = document.querySelector('#submitbtn')

btn.addEventListener("click", function(){

    const num1 = document.querySelector('#num1').value
    const num2 = document.querySelector('#num2').value


    if (num1 < num2){
        alert('Formuário Válido');
    }

    else{
        alert('Formulário Invalido');
    }
})
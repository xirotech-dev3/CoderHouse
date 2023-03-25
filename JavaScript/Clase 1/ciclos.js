//------FOR-----------------------------------

// for(let i = 0; i < 10; i++){
//     alert(i)
// }
// for(let i = 10; i > 0; i--){
//     alert(i)
// }
// for(let i = 0; i < 10; i+=2){ <- suma de a 2
//     alert(i)
// }

let numero = parseInt(prompt('Ingrese un número:'))
let resultado
for (let i = 1; i <= 10; i++){
    resultado = numero * i
    alert(numero +' X '+i+'= '+resultado)
}

for (let i = 1; i <= 10; i++){
    resultado = numero * i  
    if (i == 5){
        break //<- rompe el for, lo puedo reemplazar por un continue que saltea el codigo que esta abajo de esa linea
    }
    alert(numero +' X '+i+'= '+resultado)
}
//------WHILE-----------------------------------
let entrada = prompt('Ingrese un dato:')

while(entrada != 'ESC'){
    alert('El usuario ingreso: '+entrada)
    entrada = prompt('Ingrese otro dato:')
}

//------DO WHILE-----------------------------------
//por lo menos se ejecuta 1 vez

let repetir = false
do {    
    alert('Solo una vez!')
} while (condition);

let askAgain = true
let userEmail = ''
let confirmUserEmail = ''

do {
    userEmail = prompt('Ingrese su correo: ')
    confirmUserEmail = prompt('Confirme su correo: ')

    if(userEmail === confirmUserEmail){
        alert('El correo: '+userEmail+' fue guardado con exito!')
        askAgain = false 
    }else{
        alert('Los correos deben ser iguales!')
    }
} while (condition);

//------SWITCH-----------------------------------


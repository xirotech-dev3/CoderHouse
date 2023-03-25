//LOCAL STORAGE
//                    key      , value
localStorage.setItem("saludo"  , "Hola Coder!")
localStorage.setItem("booleano", true)
localStorage.setItem("numero"  , 10)

const saludo   = localStorage.getItem("saludo")
const booleano = localStorage.getItem("booleano")
const numero   = localStorage.getItem("numero")

console.log(saludo)
console.log(typeof saludo) //<- string
console.log(booleano)
console.log(typeof booleano)//<- string
console.log(numero)
console.log(typeof numero)//<- string

//SESSION STORAGE
sessionStorage.setItem("array"  , [1,2,3])
sessionStorage.setItem("email", "email@hola.com")

const array = sessionStorage.getItem("array").split(",")
console.log(array)


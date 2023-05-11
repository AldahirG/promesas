// Objetivo: Mostrar el uso de promesas en JS
function sumarNumeroPromesa(numero){
    console.log(numero)
   var promesa = new Promise(function(resolve,reject){
    if (numero >= 7) {
        reject('El numero es muy alto')
        return
    }
        setTimeout( function (){
            resolve(numero +1) 
        }, 2000)

   })
   return promesa
}

// sumarNumeroPromesa(5).then(function(nuevoValor){
//     console.log(nuevoValor)
//     sumarNumeroPromesa(nuevoValor).then(function(nuevoValor){
//         console.log(nuevoValor)
//         sumarNumeroPromesa(nuevoValor).then(function(nuevoValor){
//             console.log(nuevoValor)
            
//         })
//     })
// })

// console.log(sumarNumeroPromesa(5))

sumarNumeroPromesa(5).then((nuevoValor)=>{
    console.log(nuevoValor)
    return sumarNumeroPromesa(nuevoValor)
})
.then((nuevoValor)=>{sumarNumeroPromesa(nuevoValor)
})
.then((nuevoValor)=>{
    console.log(nuevoValor)
})
.catch((err)=>{
    console.log(err)
})
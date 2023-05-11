console.log('Hola mundo')

function sumarNumero(numero, callback){
    if (numero => 7) {
        callback('El numero es muy alto')
        return
    }
        setTimeout( function (){
            callback(numero +1) 
        }, 2000)
    
    
}

sumarNumero(5, function(error, nuevoValor){
    if (error) {
        console.log(error)
        return
    }
    console.log(nuevoValor)
    sumarNumero(nuevoValor, function(error, nuevoValor2){
        if (error) {
            console.log(error)
            return
        }
        console.log(nuevoValor2)
        sumarNumero(nuevoValor2, function(error, nuevoValor3){
            if (error) {
                console.log(error)
                return
            }
            console.log(nuevoValor3)
        })
    })
})

// console.log(sumarNumero(5)) 
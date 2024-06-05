/*
function sayHello(n){
    console.log("saludo "+n)
}
function sayHellodelete() {
    setTimeout(function (){
        console.log("Saludo demorado")
    }, 500) 
    
}

sayHello(1)
sayHellodelete()
sayHello(2)


function sumar(acumulado,valor, collback){
    
    let total
    setTimeout(function() {
        total = acumulado + valor
        collback(total)
    }, 1000)

}

let acumulado = 0;

acumulado = sumar(acumulado, 2)
acumulado = sumar(acumulado, 2)

console.log("El total es", acumulado);


sumar(0, 2, function(acumulado){
    sumar(acumulado,5, function(acumulado){
        console.log(acumulado)
    })
})
*/
/*
let acumulado = 0;

async function sumarPromise(acumulado, valor){
    return new Promise(function(resolve, reject){
        if(valor == 5) return reject("NO ME GUSTAN LOS CINCOS")
        const total = acumulado + valor;
        resolve(total)
    })
}
async function main(){

    try{
        let total = await sumarPromise(acumulado, 2)
        total = await sumarPromise(total, 5)
        console.log(total)
    }
    catch(error){
        console.log(error)
    }
}

main()

// Segunda Manera
sumarPromise(acumulado, 2)
//then: para saber cuando la promesa se halla cumplido
    .then(function(total){
        return sumarPromise(total, 5)
})
    .then(function(total) {
        console.log(total)
    })
    .catch(function(error){
        console.log(error)
    })
*/

/*

async function getData(){
        console.log("solicitud a la API")
        try{
       data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
             .then((response) => response.json())
             .then((json) => console.log(json.title))
        }
        catch(error){
            console.error("error en la solicitud")
        }
        console.log("solicitud finalizada")
}
getData()
*/

//await: Obliga que se haga la promesa antes de pasar a la siguiente línea de código
async function getDataTwo(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const dataJSON = await data.json()

    console.log(dataJSON.title)
}

getDataTwo()
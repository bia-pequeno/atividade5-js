let things = ["livros", "café", "chuva", "tempo", "frio"]

console.log(things)

things.unshift("Beatriz")

things.pop()

things.splice(6,7, "musica","canela")

let remove = things.splice(0,1)

console.log(remove)

let number =[7,5,6,3,8,9,2,1,4]

let num = number.sort(function (a, b){
    return(a-b)
})

console.log(num)
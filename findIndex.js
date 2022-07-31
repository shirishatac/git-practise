const array1 = [14,46,67,89,100]
let array2 = array1.map(elem => elem*5);
let array3 = array2.find(elem => elem%10 === 0)


return(
    console.log(array3, array2, array1)
)
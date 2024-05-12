//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
document.write('Task 1 ', `<br >`)
const squarpr=(a,b) => a*b

document.write(squarpr(10,2))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
document.write(`<br >`,'Task 2',`<br >`)
const squarkolo=(r)=> 3.14*(r**2)

document.write(squarkolo(3))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
document.write(`<br >`,'Task 3',`<br >`)
const squarculindr=(r,h)=> 2*3.14*r*h+2*3.14*(r*r)
document.write(squarculindr(5,2))
// - створити функцію яка приймає масив та виводить кожен його елемент
document.write(`<br >`,'Task 4   ',`<br >`)
const arrayEl=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        document.write( arr[i] ,`<br >`)
    }
}
arrayEl([1,2,3,4,5,6,7]);
arrayEl(["nvhj ",'kjbckj ','djkbcg '])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write('Task 5')
const abzac=(string)=>{
    document.write(`<p><br>`,string,`</p>`)
}
abzac("n cdmjcn vmcc vnxvbhn mn vmc, khxcc")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('Task 6')
const lilu=(a)=>{
    document.write(`<li>`,a,`</li> `,`<li>`,a,`</li> `,`<li>`,a,`</li> `)
}
lilu("lol")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write('Task 7')
const lilupro=(a,kil)=>{
    for (let i = 0; i < kil; i++) {
        document.write(`<li>`,a,`</li> `)
    }
}
lilupro("kek",7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('Task 8')
const arrLu=(array)=>{
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>`,array[i],`</li> `)
    }
}
arrLu(['bgmgcf','iyggf','gbyf'])
arrLu([6,7,2,8,9,10])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write('Task 9')
const arrUser=(arr)=>{
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div> `)
    }
}
arrUser([
    {id:1, name: 'vasya', age: 31},
    {id:2, name: 'petya', age: 30},
    {id:3, name: 'kolya', age: 29},
    {id:4, name: 'olya', age: 28},
    {id:5, name: 'max', age: 30},
    {id:6, name: 'anya', age: 31},
    {id:7, name: 'oleg', age: 28},
    {id:8, name: 'andrey', age: 29},
    {id:9, name: 'masha', age: 30},
    {id:10, name: 'olya', age: 31},
    {id:11, name: 'max', age: 31}
]);
// - створити функцію яка повертає найменьше число з масиву
document.write('<br>' ,'Task 10       ')
const arrmin=(arrch)=>{
    let min=arrch[0]
    for (let i = 1; i < arrch.length; i++) {
        if (min>arrch[i]){
            min=arrch[i]
        }
    }
    document.write('<br>' ,min)
}
arrmin([5,1,9,2])
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
document.write('<br>' ,'Task 11','<br>' )
const arrsum=(arrch)=>{
    let sum=0
    for (let i = 0; i < arrch.length; i++) {
        sum+=arrch[i]
    }
    document.write(sum)
}
arrsum([1,5,2])
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
document.write('<br>' ,'Task 12','<br>' )
const swap=(arr,index1,index2)=>{
    let a = arr[index1];
    let b = arr[index2]
    arr[index1]=b
    arr[index2]=a
    document.write(arr)
}
swap([4,6,9,1],1,3)//6--1 => 4 1 9 6
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
document.write('<br>' ,'Task 13','<br>' )
const exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency===exchangeCurrency){
            document.write(sumUAH/currencyValue.value,'<br>')
        }
    }
}

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')
/*  Перша  дія  */

const arr =[];
for (let i= 10; i <= 20; i++){
    arr.push(i);
}
alert(`Числа від 10 до 20 = ${arr.join(', ')}`);


/*  Друга  дія  */

for (let i in arr) {
    arr[i] = arr[i] ** 2;
}

alert(`Квадрат чисел від 10 до 20 = ${arr.join(', ')}`);


/*  Третя   дія  */

arr.shift();

for (let i=1; i<=10; i++) {
    arr.shift();

    const a = 7;
    const sum = a * i;
    arr.push(`${a} * ${i} = ${sum}`);
}

alert(`Таблицю множення на 7 = ${arr.join('\n')}`);


/*  Четверта   дія  */

let number = 15;
let sum= 0;
for(let i=0; i<= number; sum+=i++) {

}

alert(`Сумма всіх цілих чисел від 1 до 15 = ${sum}`);

/*  П'ята   дія  */

number = 35;
sum= 1;
for(let i = 15; i <= number; i++) {
    sum= sum * i;
}

alert(`Добуток всіх цілих чисел від 15 до 35 = ${sum}`);

/*  Шоста   дія  */

number = 500;
sum= 0;
for(let i=0; i<= number; sum+=i++) {
}
sum = sum / 500
alert(`Середнє арифметичне всіх цілих чисел від 1 до 500 = ${sum}`);

/*  Сьома дія  */

number = 80;
sum= 0;
for(let i = 30 ; i<= number ; i+= 2) {
        sum=sum+i;
}

alert(`Суму лише парних чисел в діапазоні від 30 до 80 = ${sum}`);

/*  Восьма дія  */

const arrNew =[];
for (let i= 100; i <= 200; i++){
    if(i % 3 === 0)
        arrNew.push(i);
}
alert(`Всі числа в діапазоні від 100 до 200 кратні 3 = ${arrNew.join(', ')}`);


/*  Дев'ята дія  */


const naturalNumber = +prompt('Enter the number.');
const arrNaturalNumber = [];

if(Number(naturalNumber) && naturalNumber > 0){

    for (let i= 1; i <= naturalNumber; i++){
        if(naturalNumber % i === 0){
            arrNaturalNumber.push(i)
        }
    }

    alert(`Ваше натуральне число ${naturalNumber}, ось всі його дільники = ${arrNaturalNumber.join(', ')}`);


    /*  Дес'ята  дія  */

    const arrDividers= []

    for (let i = 0; i < arrNaturalNumber.length; i++){
        if ((arrNaturalNumber[i] % 2) === 0)
        {
            const res = arrNaturalNumber[i];
            arrDividers.push(res);
        }
    }

    alert(`Кількість парних дільників = ${arrDividers.join(', ')}.`)

    /*  Одинадцята дія  */

    const sumOfNumbers =  arrDividers.reduce((acc, number) => acc + number, 0);

    alert(`Сума парних дільників = ${sumOfNumbers} .`)

}else {
    alert('Entered invalid data.');
}



/*   Дванадцята дія    */

let result = 'X   ';

function buff(val){
    let buff = '';
    let pad = 4 - val;
    while( pad-- > 0 )
        buff += ' ';
    return buff;
}

for (let i = 0; i < 11; i++) {

    for (let j = 0; j < 11; j++) {

        if(i === 0 && j > 0){
            result +=j + '  ' + buff((j+'').length+2);
        }
        else if(j === 0 && i>0){
            result += '' + i + '';
        }
        else if(i>0 && j>0){
            result += buff((i*j+'').length ) + i*j;
        }
    }
    result += '\n'

}
alert(`Таблиця множення : \n ${result}`)
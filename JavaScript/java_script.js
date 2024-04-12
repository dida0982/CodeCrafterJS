/*

prototype  | ex: algumacoisa.__proto__
type comversion (typecasting) vs type coersion | ex: console.log(Number('9')+ 5)
transformar string em numeri e numero em strig | ex: let strig = "123" console.log(Number(string)) let number = 321 console.log(String(number))
quantos caracteres tem uma palavra | ex: let word = "Paralelepipedo" console.log(word.length) let number = 1234 console.log(String(numbre).lenght)
manipulacao de string e numeros | ex: let number = 345.33452345 console.log(Number.toFixed(2).replace(".",","))
transformar letras minusculas em maiusculas | ex: let word = "Programaçao é muito bacana!" console.log(word.toLowerCase().toUpperCase())
sumindo com letras | ex: let phrase = "Eu quero viver o Amor!" let myArray = phrase.split("o") console.log(myArray)
coloque _ ao inves de espaco | ex:let phrase = "Eu quero viver o Amor!" let myArray = phrase.split(" ") let phraseWithUnderscore = myArray.join("_") console.log(phraseWithUnderscore)
verifica se o texto tem uma palavra especifica | ex: let phrase = "Eu quero viver o Amor!" console.log(phrase.includes("Amor"))
criar array com construtor | ex: let myArray = new Array('a', 'b','c') console.log(myArray)
contar elementos da array | ex: console.log(['a', 'b', 'c'].length)
transformar strigs em um elemento de uma array | ex: let word = "manipulacoa" console.log(Array.from(word)) 
exercicios de arrays. Q) let techs = ["html", "css", "js"] | let techs = ["html", "css", "js"] //adicione um item no fim techs.push("nodejs") //adicione no começo techs.unshift("sql") //remova do fim techs.pop() //remova do comeco techs.shift() //pegar somente alfum elemento do array console.log(techs.slice(1,3)) //remover 1 ou mais itens em qualquer posicao do array techs.splice(1,2) //encontre a posicao de um alemento no array let index = techs.indexOf('html') techs.splice(index,1) console.log(techs)
expressoes e operadores| ex: 
*/

/*let number = 1;

(function () {                  Binary
  console.log('alo')
})()

let number = 1                  Unary
console.log(number + 1)

let number = 1                  Unary
console.log(++number)

let number = 1                  Unary
console.log(--number)


let number = 1                  Ternary
console.log(true ? "alo" : "nada")

let number = 1                  Ternary
console.log(false ? "alo" : "nada")


new = cria um novo objeto  

let name = new String('Mark')
name.surName = "Brito"
let age = new Number(23)
console.log(name, surName, age)

let date = new Date('2020-12-01')
console.log(date.__proto__)


operadores unarios 
typeof
delete

const person = {
    name:'Mark',
    age:25, 
}
delete person.age

console.log(person)


operadores aritimeticos 
//multiplicacao 
console.log(3.2 * 5.5)
//divisao 
console.log(12/2)
//soma 
console.log(34+67)
//sobtracao 
console.log(34-23)
//resto da divisao
let remaider = 11 % 9
console.log(remainder)
//incremento
let increment = 0
console.log(increment++)
console.log(++increment)
//decremento
let decrement = 0 
decrement--
console.log(decrement)
//exponencial 
console.log(3**2)
//grupamento operator ()
let total = (2+3)*5
console.log(total)
let total = ("alo alo" + "voce")
console.log(total)
//operadores de comparacao 
//Ira comparar valores e retornar um Boolean como resposta a comparacao

let one = 1 
let two = 2

// == igual a 
console.log(two == 1)
console.log(one == '1')
// != diferente de 
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
let one = 1
let two = 2
//=== estritamente igual a
// console.log(one === "1")
// console.log(one === 1)

// !== estritamente diferente de 
console.log(two !=="2")
console.log(two !==2)
let one = 1
let two = 2

// > Maior que 
// condole.log(one >= two)

// >= Maior igual a 
// console.log(one >= 1)
// console.log(two >=1)

//Menor que 
console.log(one<two)

// <= Menor igual a 
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)
//Opredores de atribuicao (Assignment)
let x
//assignment
x = 1

//addition assignment
// x = x + 2
x +=2

//subtraciton assignment
//x = x *2
x *=2

//remainder, exponetiation
// x %=2
// x **=2
console.log(x)
//Operadores logicos 
let pao = true 
let queijo = false 

//AND && 
//console.log(pao && queijo)

//NOT ! 
console.log(!pao)

//operador condicional (ternario)
let pao = true
let queijo = true 

const niceBreakfast = pao && queijo ? "Cafe top" : "Cafe ruim"

console.log(niceBreakfast)

let pao = true
let queijo = false 

const niceBreakfast = pao || queijo ? "Cafe top" : "Cafe ruim"

console.log(niceBreakfast)
// Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : 'can t drive'
console.log(canDrive)

// comparacao 
console.log('a' + 'a')

//retorna a uniao de duas strings
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha + 345)
//Falsy
0
-0
""
null
undefined
NaN
console.log(true ? 'verdadeiro' : 'falso')
//Truthy
true 
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity

// Operator precedence
*grouping                   ()
*negacao e incremento       ! ++ --
multiplicacao e divisao     * /
adicao e subtracao          +-
relacional                  < <= > >=c
igualdade                   == != === !==
and                         &&
or                          ||
consicional                 ?:
assignment (atribuicao)     = += -= *=

//if e else 
let temperatura = 38

if(temperatura >= 37){
  console.log('Febre')
} else {
  console.log('Saudavel')
}

let temperatura = 38

if(temperatura >= 37.5){
  console.log('Febre alta')
} else if(temperatira <37.5 && temperatura >= 37) {
  console.log('Febre moderada')
} else {
  console.log('Saldavel')
}

//tudo junto 

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature){
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudavel')
}
//switch
let expression = 'a' 

switch(expression) {
  case 'a':
    //codigo
    console.log('a')
    break
    case 'b':
      //codigo para expression b 
      console.log('b')
      break
      default:
        console.log('default')
        break
      }
      //calculadora
      
      function calculate(number1, operator, number2) {
  let result;
  
  switch (operator) {
    case '+':
      result = number1 + number2;
      return result;
      case '-':
        result = number1 - number2;
        return result;
        case '*':
          result = number1 * number2;
      return result;
      case '/':
        if (number2 !== 0) {
        result = number1 / number2;
        return result;
      } else {
        console.log('Divisão por zero não permitida');
        return; // Você pode escolher retornar algo específico aqui, como null ou undefined.
      }
      default:
        console.log('Operador não implementado');
        return; // Similarmente, você pode retornar null ou undefined aqui.
      }
    }
    
    console.log(calculate(4, '+', 8)); // Agora vai mostrar 12.
   //throw... catch
   //throw
   function sayMyName(name = '') {
    if (name === ''){
      throw 'Nome é obrigatorio'
    }
    console.log(name)
   }
    
   //try...catch
try{
  sayMyName('Guilherme')
} catch(e){
  console.log(e)
}   

console.log('apos ao try/catch')
//estrutura de repeticao 
//for
for(let i = 0; i < 10; i++){
  console.log(i)
}

//
for(let i = 100; i > 0; i--){
  if(i === 50) {
    break;
  }
  console.log(i)
}

//estrutura de repeticao 
//while

let i = 0;
while(i<10){
  console.log(i)
  
  i++
}

//for... of 
let name = 'Mike'
let names = ['Joao', 'Paulo', 'Pedro']

for(let name of names){
  console.log(name)
} 

//
let person = {
  name: 'Jphn',
  age: 30,
  wight: 88.6
}
for(let property in person){
  console.log(property)
  console.log(person[property])
}
*/
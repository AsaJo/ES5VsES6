//------------------------
//  OLD JAVASCRIPT https://www.youtube.com/watch?v=WZQc7RUAg18
//------------------------

// var names =['Alex','Zelda','Sita'];
// console.log(names)
// const counter = 10;

// console.log(counter);

// var counter =5;
// function sayName(){
//     let name = 'Zelda';
//     console.log(name);
// }
// sayName();
// // console.log(name);
// console.log(counter);

//-----------------------
//  CONCATENATION old JavaScript
//------------------------

// var nameGame = 'Zelda';
// var age = 23;
// console.log('Hello everyone, my name is '+ nameGame +'and I am '+ age);

//********************************************************** */

// function getBook(title = 'Herry Potter',auther){
//     return{
//         title:title,
//         auther:auther
//     }
// }
// var book = getBook('Harry Potter','JKR')
// console.log(book);

// var user={
//     nameGame= 'Zelda',
//     age= 23
// };
// var myName = user.age;
// console.log(myName);

//------------------------
//     FUNCTONS
//------------------------

// function sayMyName() {
//     console.log('hello my name is Zelda');
// }
// var sayMyAge = function() {
//     console.log('hello may age is 48');
// }
// sayMyName();
// sayMyAge();

// var user = {
//         name: 'Zelda',
//         age: 23,
//         sayMyName: function() {
//             console.log('My name is ' + this.name); // = user.name
//             var that = this;
//             var fullName = function() {
//                 console.log('My name is ' + that.name + ' and my age is ' + that.age);
//             }
//             fullName();
//         }
//     };
//     user.sayMyName();

//------------------------
//       ES6
//------------------------

//------------------------
//       CONST
// const todoList=['Milk','appels'];
// todoList = ['Milk'];// this givs us an error. "invalid assignment to const todoList"
// console.log(todoList);

// const list = [1,2,3,4,5,];
// for (let i = 0; i<list.length;i++){

//     console.log(i);
// }

// console.log(i); // Error let and const do not "leak out" in the for loop


// const list = [1,2,3,4,5,];
// for (var i = 0; i<list.length;i++){

//     console.log(i);
// }

// console.log(i); // var leaks out from the for loop.
//------------------------------------
//     LET
// let counter = 10;
// counter = 5;
// console.log(counter);


//-----------------------
//  CONCATENATION ES6
//------------------------

// const nameGame ='Zelda';
// const age = 23;

// console.log(`hello my name is ${nameGame} and i am  ${age } years old`);

//----------------------------------------------------------
// function getBook(title,author){
//     return {
//         title,
//         author
//     }
// }
// var book = getBook('harry Potter','JKR');
// console.log(book);

//------------------------------------------
// const list={

//     model:'Skoda',
//     items:['electrical', 'petrol']
// }
// const{model, items}= list;
// console.log(model,items);

//----------------------------------
//   ARROW FUNCTION  =>

// const sayLocation= function (){
//     console.log('my location is unknown');
// }
// const sayLocation = (location)=>{
//     console.log(`my location is ${location}`);
// }
// sayLocation('Wellington');
//


// const sayLocation = location =>
// console.log(`May location is ${location}`); // onliy if this return one parameter.
// sayLocation('Wellington');


const user={
    nameGame:'Zelda',
    age:23,
    sayMyName: function(){
        console.log(`hello, My nameis ${this.nameGame}`);
        const fullName =()=>{
            console.log(`hello, My nameis ${this.nameGame} and my age is ${this.age}`)
        }
        fullName();
    }
}
user.sayMyName();
console.log(user.nameGame);
//object constructor 
const user = new Object();
user.name = 'saurabh';





const user2={
  name: 'Saurabh',
  age: 32,
  0 : 'hello',
  "like apples": true


};


const mystery = "answer";
console.log(user2.name);
console.log(user2.age);
console.log(user2["like apples"]);
console.log(user2[0]);

console.log('user2',user2)

//const key =prompt("what do yo want to know about user?","name");
//console.log(user2[key]);


function makeuser(name,age){
return{
    name,
    age
};


}


const user3= makeuser('saurabh',32)
console.log('user3',user3)



//"in" operator
const user4 = {};
console.log('user4.name===undefined', user4.name===undefined);
console.log('"name" in user4',"name" in user4);



// "for in " loop through keys in objects 

for (let key in user2){
console.log(key,user2[key]);

}





















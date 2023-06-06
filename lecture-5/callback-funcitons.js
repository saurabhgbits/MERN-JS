function fun1(){

console.log('fun1');

}

function fun2(cb){
console.log('fun2');
cb();


}


fun2(fun1);
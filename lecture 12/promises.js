const egg = new Promise(resolve,reject) => {
    console.log('executor');
    resolve('successfully hatch');
    reject('fail');
}


egg 
 .then(value =>{
    console.log()

 }

 )
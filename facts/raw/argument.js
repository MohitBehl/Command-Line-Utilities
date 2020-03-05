function fn1(param1,param2){
    console.log("inside the function");
    console.log(param1+" "+param2);
    console.log(arguments);
}

fn1();
console.log("------------------------------------");
fn1("mohit");
console.log("------------------------------------");
fn1(1,2,3);
console.log("------------------------------------");
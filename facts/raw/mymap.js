let fun = function(x){
    if(x%2 == 0){
        x++;
    }else{
        x--;
    }
    return x;
}

Array.prototype.myMap = function(helper){
    let emptyArr = [];
    for(let idx = 0;idx < this.length;idx++){
        emptyArr[idx] = helper(this[idx]);
    }
    return emptyArr;
};
let arr = [10,11,12,13,14,15];
console.log("array after map : "+arr.myMap(fun));

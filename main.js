class DOBS{
  constructor(){
    
  }
  run(q){
    let arr = q.split(" ")
    let fun = arr[0];
    arr.shift();
    let str = arr.toString();
    eval(fun + "(" + str + ")")
  }
}

class DOBS{
  constructor(){
    
  }
  run(q){
    let arr = q.split(" ")
    let fun = arr[0];
    arr.shift();
    for(a in arr){
      arr[a] = "'" + arr[a] + "'";
    }
    let str = arr.toString();
    eval(fun + "(" + str + ")")
  }
}

class DOBS{
  constructor(){
    var dobf = {};
    dobf.vari = {};
    dobf.set(v, to, val){dobf[v] = val;}
  }
  run(q){
    let arr = q.split(" ")
    let fun = arr[0];
    arr.shift();
    let str = arr.toString();
    eval("dobf." + fun + "(" + str + ")")
  }
}

class DOBS{
  constructor(){
    var dobf = {};
    dobf.vari = {};
    dobf.create = function(v, id, binid, key, mkey){
      dobf.vari[v] = {"id": binid, "key": mkey}
    }
  }
  run(q){
    let arr = q.split(" ")
    let fun = arr[0];
    arr.shift();
    let str = arr.toString();
    eval("dobf." + fun + "(" + str + ")")
  }
}

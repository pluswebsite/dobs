//functions
var dobf = {};
    dobf.vari = {};
    dobf.create = function(v, id="id", binid, key="key", mkey){
      dobf.vari[v] = {"id": binid, "key": mkey}
    }

class DOBS{
  run(q){
    let arr = q.split(" ")
    let fun = arr[0];
    arr.shift();
    for(a in arr){
        if(arr[a][0] != "'"){
            arr[a] = "'" + arr[a] + "'";
        }
    }
    let str = arr.toString();
    eval("dobf." + fun + "(" + str + ")")
  }
}

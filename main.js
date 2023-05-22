//functions
var dobf = {};
    dobf.vari = {};
    
    //variable creation
    dobf.create = function(v, id="id", binid, key="key", mkey){
      dobf.vari[v] = {"id": binid, "key": mkey}
    }

    //DB acces
    dobf.get = function(w, from, bin, to="to", call="console.log"){
        let req = new XMLHttpRequest();

req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
      if(w === '*'){
        call(req.responseText);
      }
      else{
        call(JSON.parse(req.responseText)[w])
      }
  }
};

req.open("GET", "https://api.jsonbin.io/v3/b/" + dobf.vari[bin].id + "/?meta=false", true);
req.setRequestHeader("X-Master-Key", dobf.vari[bin].key);
req.send();
    }

class DOBS{
  run(q){
    let arr = q.split(" ")
    let fun = arr[0];
    arr.shift();
    for(let a in arr){
        if(arr[a][0] != "'"){
            arr[a] = "'" + arr[a] + "'";
        }
    }
    let str = arr.toString();
    eval("dobf." + fun + "(" + str + ")")
  }
}


let fs = require('fs');

   store = [
       {
           key:"5",
           value:"default"
       }
   ];

   module.exports.add = function(key,value)
    {
        if (key && value) {
            store.push({
                key: key,
                value: value

            });

            writing(store);
            // var file = JSON.parse(store);  

        }
        return store;   
    }

    function writing(data) {
        console.log("storrring");
        var input = JSON.stringify(data, null, 0);
        fs.writeFile('./files/store.json', input, succeded);
        function succeded(error) {
            console.log("written succcess")
        } 
        
    }



   function removeByKey(key)
    {

        for (let i = 0; i < store.length; i++) {
            if (key === store[i].key) {
                store.splice(i, 1);
                return store;
            }

        }


    };


  function  clear()
    {
      store=[];

    }
   module.exports.list=function()
    {
        let result =reading();
    //  for (let i = 0; i < store.length; i++) {
    //      console.log(store[i].value);
         
    //  }
        return result;
    }

function  reading()
{
    console.log("reading...");
    var data = fs.readFileSync('./files/store.json', 'utf8', function (error, result) {
        console.log(result);

    });
    return data;    
}

require('make-runnable');

// var express=require ('express');
// var app=express();



// var http=require('http');
// http.createServer(onRequest).listhen(8000);

// function onRequest(request,response) {

// }
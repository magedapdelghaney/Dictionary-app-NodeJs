
let fs = require('fs');



//Creat store with default data
store = [
    {
        key: "5",
        value: "default"
    }
];

// writing updated data to store file
function writing(data) {

    var input = JSON.stringify(data, null, 2);
    fs.writeFileSync('./files/store.json', input, succeded);
    function succeded(error) {
        console.log("written succcess")
    }

}

// reading updated data
function reading() {
    var data = fs.readFileSync('./files/store.json', 'utf8', function (error, result) {
        console.log(result);

    });
    var result = JSON.parse(data);
    return result;
}


// Creat dictionary key ,value data to store
//use module export to run by command line
module.exports.add = function (key, value) {
    var localStore = reading();
    let isExsit = false;
    for (let i = 0; i < localStore.length; i++) {
        if ((key === localStore[i].key)) {
            isExsit = true;
        }

    }
    if (key && value) {
        if (!isExsit) {
            localStore.push({
                key: key,
                value: value

            });

            //update json file with added key ,value data
            writing(localStore);
            return localStore;
        }
        else {
            return "Key already exsit"
        }

    }

}


//get value by key given
module.exports.get = function (key) {

    let store = reading();
    let isExsit = false;
    for (let i = 0; i < store.length; i++) {


        if (key === store[i].key) {
            isExsit = true;
            return store[i].value;
        }

    }
    if (!isExsit) {
        return "key not found"
    }

};

// remove value by given key 
module.exports.remove = function (key) {
    let isExsit = false;
    let localStore = reading();
    for (let i = 0; i < localStore.length; i++) {
        if (key === localStore[i].key) {
            isExsit = true;
            localStore.splice(i, 1);
        }

    }
    if (isExsit) {
        //update store data
        writing(localStore);
        return localStore;

    }
    else {
        return "key not found"
    }


};


//listing all data 
module.exports.list = function () {
    let result = reading();
    return result;
}

//clear store data;
module.exports.clear = function () {
    let localStore = [];
    writing(localStore);
    return localStore;
}


// let express=require ('express');
// let app=express();



// let http=require('http');
// http.createServer(onRequest).listhen(8000);

// function onRequest(request,response) {

// }

require('make-runnable'); // using make runnable for calling method direct
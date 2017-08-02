function show(first_name,last_name,callback){
    if(first_name == "Xiong"){
        var name = first_name.concat(' ',last_name)
        callback(name);
        return;
    }
    callback(null);
}


var call_back = function(name){
    console.log(name)
}
show('Xiong','Yi',call_back)

show('Zhou','hong',function(name){
    console.log(name)
})


var a1;
var a2 = null;
var a3 = 0;
var a4 ='0';
var a5 ={
    x:1
};
var a6= [];

a5.y = 10;

a =[1,23,45,8,6,7,8,98,9,9,19,0]


//for-each
const coding=["js","ruby","java","Cpp"]
  
coding.forEach( function (item){
    console.log(val); //values get printed
}) //callback  

//arrow func

coding.forEach((item)=>{
    console.log(item);
})

//in above functions name of function doesnot appear

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
//Immediately Invoked Function Expressions(IIFE)
//globalscope ke pollution se dikat hoothi hai issleye usske scope ko hatane ke leeye iife use kiya
(function chai()
{
    console.log(`connected`);
})(); //always ;
 //->this will call and execute
// ()()
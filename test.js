console.log("Hello Ashish, JavaScript started!")

/* This is a multi-line comment
   spanning multiple lines */
   // this is single line
var n=5
console.log(n)
var n=10
//let m=20 can not use same let

let m=10
myFunction()
function myFunction(){
    var n=15
    let m="ashish"
    let testUndefined
    console.log(testUndefined)
    let testNull=null
    console.log(testNull)
    let obj= {
        name:"navya",
        age:"10"
    }
    console.log(obj)
    console.log(n)
    console.log(m)
    const testConst=10
    console.log(testConst == 10)
    console.log(testConst ===10)
    console.log(5>3>1) // this is because 5>3 is true and true is converted to 1 and 1>1 is false
 //  console.log(5>3>2) // this is because 5>3 is true and true is converted to 1 and 1>2 is false

}
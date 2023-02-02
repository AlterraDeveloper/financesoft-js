
// global scope

var globalVar = 5;
let globalLet = 6;
const globalConst = 7;

window.globalLet = globalLet
window.globalConst = globalConst

function scope(){
    //functional scope
    console.log("variable without iden", globalLet);
    globalLet = 45;
    console.log("hoisting var", globalVar);
    // console.log("func scope", funcLet);
    {
        var globalVar = 10
        //local scope (in func)
        console.log("var from global", window.globalVar);
        console.log("let from global", window.globalLet);
        console.log("const from global", window.globalConst);
        console.log("lfs", globalVar);
        console.log("lfs", globalLet);
        console.log("lfs", globalConst);
        // console.log("lfs", funcLet);
    }
}

scope()
console.log("gs", globalVar);
console.log("gs", globalLet);
console.log("gs", globalConst);



{
    let globalLet = 100
    console.log("local (in global)", globalLet);
    //local (in global)
}

console.log("global", globalLet);
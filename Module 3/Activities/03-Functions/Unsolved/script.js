// TODO: Write Your JavaScript Code Here

function compareVals(arg1, arg2) {
    if (arg1 === arg2) {
        console.log("They are equal in type and value");
    } else if(arg1 == arg2){
        console.log("They are equal in value");
    }else {
        console.log("The values are not equal");
    }
}

compareVals(4, 4);
compareVals("4", 4);
compareVals("15", 1);
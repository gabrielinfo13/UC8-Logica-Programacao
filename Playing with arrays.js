//Defining the "Within Range" function.
function WithinRange(value){
    if(typeof value !== 'number'){
        return false;
    }
    return value >= this.lower && value <= this.upper;
}

let names = [10, 20, 30, 1, 5, 'JavaScript Filter', undefined, 'example'];

let selection = {
    lower: 1,
    upper: 60
};

let namesInRange = names.filter(WithinRange, selection);

console.log(namesInRange); //[10, 1, 5]
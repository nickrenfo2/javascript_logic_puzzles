console.log('===CHALLENGE 1===');

var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
var sums = [];
for (var i=0;i<primes.length;i++){
    var num = primes[i]+nonPrimes[nonPrimes.length-1-i];
    console.log('num: '+num);
    sums.push(num);
}

console.log('sums: '+sums);


console.log('===CHALLENGE 2===');

var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];

function sortNums(a,b){
    return a-b;
}

var sortedArray = numbers1.concat(numbers2);

sortedArray.sort(sortNums);

console.log("Sorted Nums: "+sortedArray);


console.log('===CHALLENGE 3===');

function Triangle(a,b){
    this.a = a;
    this.b = b;
    this.c = Math.sqrt((a*a)+(b*b));
}

var myTri = new Triangle(3,4);

for (var side in myTri){
    console.log(side+": "+myTri[side]);
}


console.log('===CHALLENGE 4===');

function addtorial(n){
    if (n==0)
        return 0;
    else
        return n+addtorial(n-1);
}

console.log(addtorial(5));
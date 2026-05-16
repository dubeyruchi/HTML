//let str1 = "KRITI";
//let str2 = "KRITI";
//let str3 = `KRITI`;
//let str4 = new String("KRITI");

//console.log (typeof(str4));
//console.log(str1,str2,str3,str4);
//console.log(str1===str2);
//console.log(str1[2]);

//console.log(str1.charAt(0));
//str1[0]='A';
//console.log(str1);

//str1 = str1 +"group of college";
//console.log(str1);
 
//let str5 = `"Student's books" `;
//console.log(str5); 
 
//let a = 10;
//let b = 20;
//let c = a + b;
//let result = `sum of ${a} and ${b} is ${c}`;
//console.log(result);

let str ="Oxford Group of college";
console.log(str.length);
console.log(str.indexOf('o'));
console.log(str.lastIndexOfindexOf('o'));
console.log(str.indexOf('p'));
console.log(str.indexOf('o',4));
console.log(str.includes('oxford'));
console.log(str.startsWith('hello'));
console.log(str.endsWith('hello'));


console.log(str.slice(2,6));
console.log(str.slice(6,2));
console.log(str.slice(-6,2));
console.log(str.substring(2,6));
console.log(str.replace('l','L'));
console.log(str.toLowerCase());
console.log(str.toUpperCase()); 


console.log(str);
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());


console.log(str.split(' '));

let str1 ="oxford";
let str2 = "college of ";
let str3 = "Research and Maagement";

console.log(str1.concat(' ',str2," ",str3));

const car ={
    make : "Tesla",            //property
    model : "Model 3",         //property
    year : 2026
};
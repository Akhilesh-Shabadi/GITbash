// // 1
// console.log("hi")
// console.log(10)
// console.log(10+10)
// console.log(10-10+"hi")
// // 2
// document.write("hi")
// document.writeln("hello")
// document.write("hey")
// // 3
// alert("wellcome to browser")
// console.log(1+"1")
// console.log(1-"1")
// console.log(1/2)
// console.log(1/"hi")
// console.log(1+10+10+12*2+"1"-2)
// console.log(1/10)
// console.log(1/0)
// console.log(1+20*2-2/4+(4+3)+3/6*5+1*0+1+3)
// // 4
// confirm("are you 18+")
// var resp=confirm("are you 18+")
// if (resp==true)
// {
//     alert("welcome to the webpage")
// } else {
//     alert("go and watch pogo")
// }
// // 5
// prompt("enter your age")
// var age=prompt("enter your age")
// if(age>18){
//     alert("welcome to the webpage")
// } else {
//     alert("not valid age")
// }
// // 6
// var num=10;
// var num1=20;
// console.log(num+num1);
// // 7.
// console.log(num);
// var num=12;
// // 8.
// var a=Number(prompt("enter number1"));
// var b=Number(prompt("enter number2"));
// var c=a+b;
// alert(c);
// // 9.
// var a=10;
// var b=6;
// var c=a+b;
// console.log(c);
// primitive data type
// let a=12;   // 1.
// let b=10.5;
// console.log(a);
// console.log(b);
// console.log(typeof a);
// console.log(typeof b);
// let num1=10;    // 2.
// let num2=3;
// console.log(num1/num2);
// console.log(parseInt(num1/num2));
// console.log(parseFloat(num1/num2));
// let res=145.89; // 3.
// console.log(res);
// console.log(res.toFixed(2));
// console.log(res.toFixed(5));
// let res=145.89;     // 4.
// console.log(res);
// console.log(res.toPrecision(4));
// let res=145.89;     // 5.
// console.log(res);
// let strres=res.toString();
// console.log(strres);
// console.log(typeof strres);
// note
// var num3=15;    // 1.
// let num4=0;
// let res=num3/num4;
// console.log(res);
// var num5=-15;   // 2.
// let num6=0;
// let res1=num5/num6;
// console.log(res1);
// NaN
// console.log(12-"hi");
// var num=Number("hello");
// console.log(num);
// console.log(typeof NaN);

//String
// 1. Double quotes ("")
// let str="Rajesh"
// console.log(str);
// console.log(typeof str);
// 2. Single quotes ('')
// let str='Raj';
// console.log(str);
// console.log(typeof str);
// 3. Back tick (``)
// let n=3000;
// let b=18;
// let deduc=(n*b)/100;
// let final=n-b;
// console.log("ur sal is" +n+100+"and the deduction is" +deduc+"final sal is"+final);
// console.log(`ur sal is ${n+100} and the deduction is ${deduc} final sal is ${final}`);

// String method 
// 1.length (property)
// let str="Rajesh is a good boy";
// console.log(str.length);
// console.log(str[0]);
// console.log(str[20]);
// console.log(str[str.length-1]);
// console.log(str.charAt(0));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.charCodeAt(1));
// // console.log(string.fromcharcode(65));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("a",2));
// console.log(str.indexOf("z"));
// let email="mr abc@gmail.com";
// console.log(email.endsWith(".com"));
// console.log(email.endsWith("gmail"));
// console.log(email.startsWith("mr "));
// console.log(email.startsWith("mrs "));
// console.log(email.includes("@"));
// console.log(email.includes("#"));
// console.log(email.includes("gmail"));
// let ss="   raj kumar  ";
// console.log(ss);
// console.log(ss.length);
// console.log(ss.trimStart().length);
// console.log(ss.trimEnd().length);
// Slice 
// let r=" rajesh";
// console.log(r[-1]);
// console.log(r.slice(1));
// console.log(r.slice(1,5));
// console.log(r.slice(-5,-1));
// console.log(r.slice(-1,3));
// console.log(r.slice(3,-1));
// console.log(r.slice(1,-6));
// console.log(r.slice(3,-3));
// substring
// let e="rajesh";
// console.log(e.substring(1,5));
// console.log(e.substring(-2,-5));
// console.log(e.substring(-2,3));
// console.log(e.substring(5,3));
// substr
// let q="rajesh";
// console.log(q.substr(2,3));
// Replace and ReplaceAll
// let w="Good morning rajesh and good morning rakesh";
// console.log(w.replace("morning","evening"));
// console.log(w.replaceAll("morning","evening"));
// Split 
// let str="rajesh is a good boy";
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("").reverse());
// console.log(str.split(" ").reverse());
// console.log(str.split("").reverse().join(""));
// console.log(str.split(" ").reverse().join(""));
// console.log(str.split("").reverse().join(" "));
// console.log(str.split(" ").reverse().join(" "));
// repeat
// let y=5;
// let str=y.toString()
// console.log(Number (str.repeat(4)));

// Boolean
// let bool=true;
// console.log(bool);
// console.log(typeof bool);
// let boo=false;
// console.log(boo);
// console.log(typeof boo);
// console.log(1<2);
// console.log(1==1);
// if(false){
//     console.log("i am a if block excute only if the value is true");
// } else {
//     console.log("i am a else bolck");
// }

// undefined
// let somevalue;
// console.log(somevalue);
// let value=undefined;
// console.log(typeof value);
// console.log(value);

// null
// let somevalue=null;
// console.log(somevalue);
// console.log(typeof somevalue);

// type casting implicitly
// console.log(10+"hi");
// console.log(10+"20");
// console.log(10-"false");
// console.log(10-true);
// console.log(10+null);
// console.log(10+undefined);
// console.log(10*"20");
// console.log(10+"20");
// console.log(10/"20");
// type casting explicitly
// console.log(Number(10));
// console.log(Number("-20"));
// console.log(Number("10"));
// console.log(Number("zero"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number("hi"));
// Boolean explicitly
// console.log(Boolean(10));
// console.log(Boolean(Infinity));
// console.log(Boolean(-Infinity));
// console.log(Boolean(2/0));
// console.log(Boolean(101));
// console.log(Boolean(0.01));
// console.log(Boolean(0.0));
// console.log(Boolean(-0.0));
// console.log(Boolean(NaN));
// console.log(Boolean("hi"));
// console.log(Boolean("true"));
// console.log(Boolean("false"));
// console.log(Boolean("0"));
// console.log(Boolean(" "));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// BIgInt
// let bNum=BigInt(12);
// let bNum1=13n;
// console.log(bNum);
// console.log(bNum1);
// console.log(typeof bNum);
// console.log(typeof bNum1);
// let num=BigInt(12.6);
// console.log(num);
// let num=10;
// let bNum=20n;
// console.log(num+bNum);

// Symbol
// let sval=Symbol(10);
// console.log(sval);
// console.log(typeof sval);
// let ss=Symbol(20);
// let se=Symbol(20);
// console.log(ss===se);

// 1st mock {

// console.log("Starts");
// var a="20";
// var b=30;
// var c=null;
// function add(x,y) {
//     return x+y-c;
// }
// add(25,10);
// console.log(d);
// console.log(a+b-b);
// console.log(add(10,20));
// console.log(b);

// console.log("10"-10+"25"+2/10+"200"-10);
// console.log(typeof ("10"-10+"25"+2/10+"200"-10));
// console.log(null==undefined);
// console.log("10"==false);
// console.log(10===10);
// function add(m,n) {
//     console.log(m-n);
//     sub(m,n);
// }
// function sub(x,y) {
//     console.log("sub"+(x-y));
// }
// add(5,6);
// console.log("end");

// }

// var a=12;

// function test() {
//     // console.log(a);
//     var a=10;
//     console.log(a);
// }
// // test();
// console.log(a);
// console.log(typeof test());
// console.log(typeof test);

// if (80) {
//     console.log(a);
//     let a=9;
//     console.log(a);
// }
// console.log(a);

// array
// arr=[13,"hello",null,true,10n,Symbol,undefined,()=>console.log("i am fun"),["i am a array data"]]
// arr

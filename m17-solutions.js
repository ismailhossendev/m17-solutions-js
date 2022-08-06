// Module 17:
/* 
    Note TODO: 
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-1: 
    =========================//=========================//=========================

    ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?
    ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
    ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
    ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
    ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.
    ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.
    ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.
 */
// ---------------Answer
/* 
    var mark = 49;
    if (mark < 50) {
        console.log('F')
    }
    else if (mark < 60) {
        console.log('D')
    }
    else if (mark < 80) {
        console.log('B')
    }
    else if (mark < 90) {
        console.log('D')
    }
    else {
        console.log('A+')
    } 
*/
/* 
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-2: 
    =========================//=========================//========================= 

    তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।  
*/
// ---------------Answer

/* 
    var signal = "red";
    if (signal === 'red') {
        console.log("Danger")
    }
    else if (signal === 'yellow') {
        console.log("Stop")
    }
    else if (signal === 'green') {
        console.log("Go")
    } 
*/

/* 
    Drive TODO: https://drive.google.com/file/d/1bfxye7A1p-BBJCQCXaiUetl_qyS2Vc1E/view
    =========================//=========================//=========================
    Practice Problem 1:
    =========================//=========================//=========================

    You are given an array:
    var fruits = ['Apple', 'Banana', 'Orange'];
    a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
    b) Remove ‘Orange’ and add ‘Watermelon’. 
*/
// ---------------Answer

/* 
    var fruits = ['Apple', 'Banana', 'Orange'];
    // console.log(fruits.indexOf('Banana'));
    fruits[1] = 'Mango';
    fruits.pop();
    fruits.push("watermelon");
    console.log(fruits); 
*/
/* 
    =========================//=========================//=========================
    Practice Problem 2:
    =========================//=========================//=========================

    You and your friends Tom, Jane, Peter and John got their final exam results. Your total
    score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
    and John’s total score is 40. The grading chart is
    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less => F grade

    Write a program to find your and your friends’ grades using if-else.
 */
// ---------------Answer
/* 
    var mark = 35;
    if (80 <= mark) {
            console.log("A");
        }
    else if (60 <= mark) {
        console.log("B");
        }
    else if (50 <= mark) {
        console.log("C");
        }
    else if (40 <= mark) {
        console.log("D");
    }
    else {
        console.log("F");
    }
  
*/
/* 
    =========================//=========================//=========================
    Practice Problem 3:
    =========================//=========================//=========================

    1. You are given three numbers 13, 79, and 45. Write a program that will print the
    largest number using if-else.
    2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
    triangle is Isosceles or not using if-else.
    Isosceles => two sides are equal 
*/
// ---------------Answer

/*  -------------
         1
    -------------   
    var num1 = 13;
    var num2 = 79;
    var num3 = 45;

    if (num2 < num1 && num3 < num1) {
        console.log(num1 , "is largest number")
    }
    else if (num3 < num2 && num1 < num2) {
        console.log(num2 , "is largest number")
    }
    else {
        console.log(num3, "is largest Number")
    } 
*/
/* -------------
      2
-------------
 */

/*
    var tri1 = 1;
    var tri2 = 1;
    var tri3 = 2;

    if ((tri1 === tri2 && tri2 != tri3) ||  (tri3 === tri1 && tri3 != tri2)) {
        console.log( "Isosceles" )
    }
    else{
        console.log('not Isosceles ')
    } 
*/

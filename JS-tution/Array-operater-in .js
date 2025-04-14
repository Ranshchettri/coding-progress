//indexOf(concat =marge multiple element) concat operator method-1 *******************************************

let a=["Ransh" , 22 ]
let c=["roshan","aman","sanjay"]
let d=["Ransh", 22, "roshan", "aman", "sanjay"]
  let b=[...a,...c,...d]
console.log(b);

// // // indexOf(sparate operator by using comma , and murge them) concat operator method-2 *******************************************
let a=["Ransh" , 22 ]
let c=["roshan","aman","sanjay"]
let d=["Ransh", 22, "roshan", "aman", "sanjay"]
  let b=a.concat(c,d)
console.log(b);


// // push operator *******************************************

let a=["Ransh" , 22 ]
a.push(11,12);                    //push to last
console.log(a);


// // // pop operator *******************************************

let a=["Ransh" , 22 ]
a.push();                   //pop from last
console.log(a);



// // shift operator *******************************************
let a=["Ransh" , 22 ]
a.shift();                   //pop (shift)from first
console.log(a);



// // unshift operator *******************************************
let a=["Ransh" , 22 ]
a.unshift(11,12);                   //push (unshift)from first
console.log(a);



// Array ko example element haru
let fruits = ["apple", "banana", "cherry", "date"];

// 1. splice() - Array ko elements lai hataune ya add garne (original array ma change garxa)**********************************
fruits.splice(1, 2, "orange", "grape");  
console.log(fruits);                            // Index 1 bata 2 element haru ("banana" ra "cherry") hatauna cha
                                                // Ani tyo jagama "orange" ra "grape" add garincha
                                                // Output: ["apple", "orange", "grape", "date"]

// 2. slice() - Array ko part lai extract garne (original array ma change hudaina)*********************************
let newFruits = fruits.slice(1, 3);
console.log(newFruits);                    // Index 1 bata 3 samma ko elements extract garxa, tara index 3 ko element hudaina
                                          // Output: ["orange", "grape"]

// 3. includes() - Array ma kei element cha ki chaina bhanera check garne (true ya false return garxa)******************************
let hasBanana = fruits.includes("banana");    // check garxa khojeko number xaki xiana ani ans true or fulse vanxa
console.log(hasBanana);                      // Output: false (kyoki "banana" hatai sakeko cha)

// 4. reverse() - Array ko order ulto garne (original array ma change garxa)*********************************************
fruits.reverse();                             // element lai arrange garer rakhxa jun like roll number
console.log(fruits);                          // Output: ["date", "grape", "orange", "apple"]

// simple recursion test *******************

function recursion() {
  console.log("hello coder, how are you");
  // recursion();
}

// recursion();



// This function will print "hello world, how are you" 5 times
// and then print "hello coder, how are you" once when num reaches 0.
// The recursion will stop when num is 0, preventing an infinite loop.



function recur(num) {
  if (num == 3) {
    console.log("hello coder, how are you");
    return;
  }

  else {
    recur(num - 3);

  }
}
 recur(5); //5 is the initial value passed to the function.(num parameter)

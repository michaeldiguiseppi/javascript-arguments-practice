
// Declaring a function called myFn that takes up to three arguments.
// The idea of the function is to return a description of the arguments
// based on how many there are.  This can either be less than three, 
// more than three, or any combination.
function myFn (first, second, third) {
    // It begins with an if/else statement to determine if the function
    // has been passed in any arguments.  If it has at least one argument,
    // it proceeds into the body of the if statement.
    if (arguments.length !== 0) {
            // The rest of the function begins with the statement, 
            // "Beginning to read arguments..." because we want it 
            // to print this statement before printing the number
            // of arguments.  We only reach this if there are is least
            // one argument passed to the function.
            console.log("Beginning to read arguments...")
            // Next we invoke a for-in loop to cycle through the arguments
            // passed in to the function.  It declares a variable named index
            // for each argument in the arguments list, and loops through them.
            for (var index in arguments) {
                // Once inside the body of the for-in loop, we have another 
                // piece of decision logic to decide if the current index
                // is greater than 2, meaning more than 3 arguments because
                // the index starts at 0.  Because this is inside the loop,
                // the first three arguments will skip into the else if
                // statement, but anything over three will stop at three
                // and then go into the body of the if statement.
                if (parseInt(index) > 2) {
                    // Inside the if statement body, we print to the console
                    // the string "AARG! Too many arguments!".  This only 
                    // happens once we have already looped through the first
                    // three arguments in the argument list. 
                    console.log("AARG! Too many arguments!");
                    // In addition, after printing the above statement, we 
                    // print to the console the list of arguments so that 
                    // the user can see the entire list of arguments and
                    // why the program is telling them they have too many.
                    console.log(arguments);
                }
                // This statement is hit each time the index loops through
                // and there are not already three arguments printed. Also, 
                // if the argument at the specified index is undefined, it
                // will not print anything, because it will not meet any of
                // the criteria presented. 
                else if (arguments[index] !== undefined) {
                    // This statement will print out, for each argument up to 3,
                    // the string "Reading argument #" and then what number in the
                    // list the argument is.  Because index is 0-based, we have to
                    // add 1 to it to truly tell what number of argument it is.  
                    // In order to do this without affecting the argument that we 
                    // are printing out, we have to convert index to an integer
                    // and then add one to it.  After this, it prints a colon, 
                    // and then the name of the argument at the specified index. 
                    console.log("Reading argument #" + (parseInt(index) + 1) + ": " + arguments[index]);
                }
            }
        }

    // If the function is not passed any arguments, it will go into the
    // body of the else statement.
    else {
        // When the function has no arguments, it prints to the console
        // the string "No arguments!".  This alerts the user that they
        // didn't pass the function any arguments. 
        console.log("No arguments!");
    }
};

//Lastly, we call the function with a specific number of arguments, in order to test
// the output that we want. 
myFn();
myFn("first");
myFn("first", "second");
myFn(undefined, "second");
myFn("first", "second", "third");
myFn("first", undefined, "third");
myFn("first", "second", "third", "fourth");
myFn(undefined, "second", undefined, "fourth");
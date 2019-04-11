//Function for 1st input box
$(function () {
    // Set up some data and variables
    const data = [4, 6, 22, 78],
        input = $('.input-1'),
        submit = $('.submit-1'),
        resultSum = $('.result-1');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

//Function for 2nd input box
$(function (){
  //Set up variables
  const data = [4, 6, 22, 78],
        input = $('.input-2'),
        submit = $('.submit-2'),
        result = $('.result-2');
  //Click event on submit button
  submit.on('click', function() {
    //Grab the input value and parse it ion to a number
    const val2 = input.val();
    const num = parseInt(val2);
    //Use map to add the input on to each value in the Array
    let newArray = data.map(function(value) {
      return value + num;
    });
    //Display the new Array on the page
    result.text(newArray);
    //Reset the input value to an empty string
    input.val('');
  });
});

//Function for 3rd input box
$(function (){
  //Set up variables
  const data = [4, 6, 22, 78],
        input = $('.input-3'),
        submit = $('.submit-3'),
        result = $('.result-3');
  //Click event on submit button
  submit.on('click', function() {
    //Grab the input value and parse it ion to a number
    const val2 = input.val();
    const num = parseInt(val2);
    //Use includes to check if input is part of the array
    let answer = data.includes(num);
    //Display the new Array on the page
    result.text(answer);
    //Reset the input value to an empty string
    input.val('');
  });
});

//Function for 4th input box
$(function (){
  //Set up variables
  const data = [1, 13, 76, 101],
        input = $('.input-4'),
        submit = $('.submit-4'),
        result = $('.result-4');
  //Click event on submit button
  submit.on('click', function() {
    //Grab the input value and parse it into a number
    const val2 = input.val();
    const num = parseInt(val2);
    //Use filter function to filter all values above number entered
    let answer = data.filter(function(value) {
      return value > num;
    });
    //Display the new Array on the page
    result.text(answer);
    //Reset the input value to an empty string
    input.val('');
  });
});

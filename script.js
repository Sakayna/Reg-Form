/* Suggestion: Onchange for every input may be used instead of submit onclick
  for values that are not password-related.
  
  Performance may be sacrificed if this is implemented. */

// check for empty values then perform validation from top to bottom
function validate() {
  let form = document.querySelector("#form");

  let fname, lname, pnum, bday, uname, psw, psw_repeat, etc;

  // ES6 Array Destructuring, Might not be supported on early versions of web browsers.
  [fname, lname, pnum, bday, uname, psw, psw_repeat, ...etc] =
    toFormArray(form);

  // Check if variables are empty
  if (
    fname.length == 0 ||
    lname.length == 0 ||
    pnum.length ==  0 ||
    bday.length ==  0 ||
    uname.length == 0 ||
    psw.length ==   0 ||
    psw_repeat.length == 0
  ) {
    alert("empty values found!");
  }

  // Validates name using regular expressions
  if (fname.search(/[^a-zA-Z]+/) != -1 || lname.search(/[^a-zA-Z]+/) != -1) {
    console.log("First name or last name error");
  } else {
    console.log("correct");
  }
}

// Turns a form into an array of values from indexes
function toFormArray(form) {
  let elem = form.getElementsByTagName("input");

  let rawData = [];
  for (let i = 0; i < elem.length; i++) {
    rawData.push(elem[i].value);
  }

  return rawData;
}

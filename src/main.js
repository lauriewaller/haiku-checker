import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$("#submit").click(function(event){
  event.preventDefault();
  const line1 = $("#line1").val();
  const line2 = $("#line2").val();
  const line3 = $("#line3").val();
  console.log(line1, line2, line3);
});

const checkLinesOneAndThree = (string, counter = 0) => {
  //let counter = 0;
  const convertedString = string.toLowerCase();
  if (convertedString === "") {
    if (counter === 5) {
      return true;
    } else {
      return false;
    }
    //return counter;
  } else {
    if (convertedString[0] === "a" || convertedString[0] === "e" || convertedString[0] === "i" || convertedString[0] === "o" || convertedString[0] === "u") {
      counter++;
    }
    console.log(counter);
    console.log("final string = " + convertedString);
    return checkLinesOneAndThree(convertedString.substring(1), counter);
  }
};

const Array = [];
const vowelArray = Array.map(function(element) {
  return element * 2;
});
vowelArray;



// let counter = 0;

// const checkLinesOneAndThree = (string) => {
//   const convertedString = string.toLowerCase();
//   if (convertedString === "") {
//     if (counter === 5) {
//       return true;
//     } else {
//       return false;
//     }
//     return counter;
//   } else {
//     if (convertedString[0] === "a" || convertedString[0] === "e" || convertedString[0] === "i" || convertedString[0] === "o" || convertedString[0] === "u") {
//       counter++;
//     }
//     console.log(counter);
//     console.log("final string = " + convertedString);
//     return checkLinesOneAndThree(convertedString.substring(1));
//   }
// };

const checkLineTwo = (string, counter = 0) => {
  //let counter = 0;
  const convertedString = string.toLowerCase();
  if (convertedString === "") {
    if (counter === 7) {
      return true;
    } else {
      return false;
    }
  } else {
    if (convertedString[0] === "a" || convertedString[0] === "e" || convertedString[0] === "i" || convertedString[0] === "o" || convertedString[0] === "u") {
      counter++;
    }
    console.log(counter);
    console.log("final string = " + convertedString);
    return checkLineTwo(convertedString.substring(1), counter);
  }
};








// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
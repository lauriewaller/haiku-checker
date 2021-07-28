import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

const checkLinesOneAndThree = (string, counter = 0) => {
  const convertedString = string.toLowerCase();
  if (convertedString === "") {
    if (counter === 5) {
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
    return checkLinesOneAndThree(convertedString.substring(1), counter);
  }
};

const checkLineTwo = (string, counter = 0) => {
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

$("#submit").click(function(event){
  event.preventDefault();
  const line1 = $("#line1").val();
  const line2 = $("#line2").val();
  const line3 = $("#line3").val();

  console.log(line1);
  if ((checkLinesOneAndThree(line1) === true) && (checkLineTwo(line2) === true) && (checkLinesOneAndThree(line3) === true)) {
    return $(".showResult").text("This is a haiku!");
    } else {
      return $(".showResult").text("This is NOT a haiku!");
    }
});








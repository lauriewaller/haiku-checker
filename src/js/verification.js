export const checkLinesOneAndThree = (string, counter = 0) => {
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
    //   console.log(counter);
    //   console.log("final string = " + convertedString);
      return checkLinesOneAndThree(convertedString.substring(1), counter);
    }
  };
  
  export const checkLineTwo = (string, counter = 0) => {
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
    //   console.log(counter);
    //   console.log("final string = " + convertedString);
      return checkLineTwo(convertedString.substring(1), counter);
    }
  };
type FixedNumberType = {
  correctNum: string;
  correction: string;
};

//? main function that tells us whether or not a phone number can be modified through deletion of useless stuff until the number contains 11 digits (that should be the correct format of the number)
export default function fixNumber(num: string): FixedNumberType | null {
  const onlyDigits = num.match(/\d+/g);
  let validCorrectedNumber = onlyDigits?.filter((el) => el.length === 11)[0];
  // here we check if the number without random chars or symbols is formatted correctly (so has 11 digits in total):
  if (!validCorrectedNumber && onlyDigits?.join("").length === 11) {
    validCorrectedNumber = onlyDigits.join("");
  }

  // if we get a valid number, we check the differences with the original number to highlight the changes
  if (validCorrectedNumber) {
    const differentCharacters = findDifference(validCorrectedNumber, num);
    const correctedNumber = {
      correctNum: validCorrectedNumber,
      correction: differentCharacters,
    };
    return correctedNumber;
  }

  // if we don't get a valid number, we return null
  return null;
}

function findDifference(correctWord: string, startingWord: string): string {
  // two pointers method for O(n) time and space complexity
  var i = 0;
  var j = 0;
  var result = "";

  while (j < startingWord.length) {
    //if correct word char is not equal to original word char, it means it is a difference. If they are equal, move both pointers, else just move j until we find the same character again
    console.log(correctWord[i]);
    console.log(startingWord[j]);
    if (correctWord[i] !== startingWord[j] || i === correctWord.length) {
      result += startingWord[j];
    } else {
      i++;
    }
    j++;
  }
  return result;
}

import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import phoneValidation from "../utils/phoneValidation";
import { DataType, CorrectedDataType } from "../types";
import PhoneNumRow from "./PhoneNumRow";
import fixNumber from "../utils/fixNumber";
import CorrectedNumberRow from "./CorrectedNumberRow";

type Props = {
  correctNums: DataType[];
  setCorrectNums: React.Dispatch<React.SetStateAction<DataType[]>>;
  incorrectNums: DataType[];
  setIncorrectNums: React.Dispatch<React.SetStateAction<DataType[]>>;
  correctedNums: CorrectedDataType[];
  setCorrectedNums: React.Dispatch<React.SetStateAction<CorrectedDataType[]>>;
};

const NumbersSection: React.FC<Props> = ({
  correctNums,
  setCorrectNums,
  incorrectNums,
  setIncorrectNums,
  correctedNums,
  setCorrectedNums,
}) => {
  const [nums, setNums] = useState<DataType[]>([]);

  useEffect(() => {
    function fetchCsv() {
      fetch("./phone-numbers.csv")
        .then((response) => response.text())
        .then((responseText) => {
          Papa.parse<DataType>(responseText, {
            header: true,
            complete(results) {
              setNums(results.data);
            },
          });
        });
    }
    fetchCsv();
  }, []);

  useEffect(() => {
    //? set correctNums and incorrectNums states
    if (nums.length) {
      const correctArr: DataType[] = [];
      const incorrectArr: DataType[] = [];
      nums.forEach((el) => {
        if (phoneValidation(el.sms_phone) === "correct") {
          correctArr.push(el);
        } else incorrectArr.push(el);
      });
      setIncorrectNums(incorrectArr);
      setCorrectNums(correctArr);
    }
  }, [nums, setCorrectNums, setIncorrectNums]);

  useEffect(() => {
    //? find correctable numbers and correct them
    const correctedNumsArr: CorrectedDataType[] = [];
    if (incorrectNums.length) {
      incorrectNums.forEach((el) => {
        // if current element contains something other than digits, try to correct them
        if (el.sms_phone.match(/^[0-9]+$/) === null) {
          let phoneNumber = fixNumber(el.sms_phone);
          if (phoneNumber)
            correctedNumsArr.push({
              id: el.id,
              correctNum: phoneNumber.correctNum,
              correction: phoneNumber.correction,
              oldNum: el.sms_phone,
            });
        }
      });
    }
    setCorrectedNums(correctedNumsArr);
  }, [incorrectNums, setCorrectedNums]);

  return (
    <section className="table">
      <div className="correct-column">
        <h2>Correct Numbers</h2>
        {correctNums.map((el) => (
          <PhoneNumRow
            key={el.id}
            id={el.id}
            sms_phone={el.sms_phone}
            isCorrect={true}
          />
        ))}
      </div>
      <div className="incorrect-column">
        <h2>Incorrect Numbers</h2>
        {incorrectNums.map((el) => (
          <PhoneNumRow
            key={el.id}
            id={el.id}
            sms_phone={el.sms_phone}
            isCorrect={false}
          />
        ))}
      </div>
      <div className="corrected-column">
        <h2>Corrected Numbers</h2>
        {correctedNums.map((el) => (
          <CorrectedNumberRow
            key={el.id}
            id={el.id}
            correctNum={el.correctNum}
            correction={el.correction}
            oldNum={el.oldNum}
          />
        ))}
      </div>
    </section>
  );
};

export default NumbersSection;

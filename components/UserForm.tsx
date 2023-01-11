import React, { useEffect, useState } from "react";
import { CorrectedDataType, DataType } from "../types";
import fixNumber from "../utils/fixNumber";
import phoneValidation from "../utils/phoneValidation";

type Props = {
  correctNums: DataType[];
  setCorrectNums: React.Dispatch<React.SetStateAction<DataType[]>>;
  incorrectNums: DataType[];
  setIncorrectNums: React.Dispatch<React.SetStateAction<DataType[]>>;
  correctedNums: CorrectedDataType[];
  setCorrectedNums: React.Dispatch<React.SetStateAction<CorrectedDataType[]>>;
};

const UserForm: React.FC<Props> = ({
  correctNums,
  setCorrectNums,
  incorrectNums,
  setIncorrectNums,
  correctedNums,
  setCorrectedNums,
}) => {
  const [inputNum, setInputNum] = useState<string>("");
  const [userPopup, setUserPopup] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setShowPopup(true);
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [correctNums, incorrectNums, correctedNums]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputNum.length) {
      setUserPopup("Forse dovresti inserire prima un numero :D");
      return;
    }
    if (phoneValidation(inputNum) === "correct") {
      //add to correct nums list
      setCorrectNums((prev) => [
        { id: new Date().getTime().toString(), sms_phone: inputNum },
        ...prev,
      ]);
      setUserPopup("Il numero è stato aggiunto con successo!");
    } else {
      const fixedNum = fixNumber(inputNum);
      if (fixedNum) {
        // if something truthy is returned (correction) add to corrected list
        setCorrectedNums((prev) => [
          {
            id: new Date().getTime().toString(),
            correctNum: fixedNum.correctNum,
            correction: fixedNum.correction,
            oldNum: inputNum,
          },
          ...prev,
        ]);
        setUserPopup(
          "Il numero è stato aggiunto con successo. C'è stato un problema con la sintassi, ma ora è tutto ok."
        );
      } else {
        // if null is returned (no correction) add to incorrect list
        setIncorrectNums((prev) => [
          { id: new Date().getTime().toString(), sms_phone: inputNum },
          ...prev,
        ]);
        setUserPopup(
          "Il numero non può essere aggiunto alla lista. Forse hai sbagliato qualcosa?"
        );
      }
    }
  }
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputNum(e.target.value);
  }

  return (
    <>
      <p className="user-popup">{showPopup && userPopup}</p>
      <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="tel"
          onChange={(e) => handleOnChange(e)}
          value={inputNum}
        />
        <button type="submit">Inserisci</button>
      </form>
    </>
  );
};

export default UserForm;

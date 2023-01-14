import React from "react";
import { DataType } from "../types";

type Props = DataType & {
  isCorrect: boolean;
};

const PhoneNumRow: React.FC<Props> = ({ id, sms_phone, isCorrect }) => {
  return (
    <div
      data-cy={`${isCorrect ? "correct-num" : "incorrect-num"}`}
      className={`num-row ${isCorrect ? "correct" : "incorrect"}`}
    >
      {sms_phone}
    </div>
  );
};

export default PhoneNumRow;

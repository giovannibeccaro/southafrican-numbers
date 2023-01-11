import React from "react";

type Props = {
  id: string;
  correctNum: string;
  correction: string;
  oldNum: string;
};

const CorrectedNumberRow: React.FC<Props> = ({
  id,
  correctNum,
  correction,
  oldNum,
}) => {
  let i = 0;
  return (
    <div className="num-row corrected">
      {/* we iterate through every character of the original number and check if it is equal to the "correction" string, which contains the part of the original number which is makes the number not correct  */}
      {oldNum.split("").map((el, idx) => {
        if (el === correction.charAt(i)) {
          i++;
          return (
            <span className="corrected-char" key={i}>
              {el}
            </span>
          );
        } else
          return (
            <span className="correct-char" key={idx + oldNum.length}>
              {el}
            </span>
          );
      })}
      =&gt; <span className="correct-number">{correctNum}</span>
    </div>
  );
};

export default CorrectedNumberRow;

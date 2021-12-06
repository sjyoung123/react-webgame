import React, { useState } from "react";

const WordRelay = () => {
  const [rWord, setRword] = useState("사과");
  const [rValue, setRvalue] = useState("");
  const [rResult, setRresult] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setRvalue(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (rWord[rWord.length - 1] === rValue[0]) {
      setRresult("통과");
      setRword(rValue);
      setRvalue("");
    } else {
      setRresult("다시 입력하세요");
      setRvalue("");
    }
  };

  return (
    <>
      <h2>{rWord}</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={rValue} onChange={onChange} />
        <input type="submit" value="입력" />
      </form>
      <h2>{rResult}</h2>
    </>
  );
};

export default WordRelay;

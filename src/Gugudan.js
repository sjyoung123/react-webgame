import React, { useEffect, useState } from "react";

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setType(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    guguResult();
  };

  const guguResult = () => {
    if (first * second === Number(type)) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setType("");
      setResult(`${first}*${second}=${type} 정답!!`);
    } else {
      setResult("오답");
      setType("");
    }
  };

  return (
    <>
      <h2>{`${first} 곱하기 ${second}`}</h2>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="정답을 입력하시오"
          onChange={onChange}
          value={type}
          required
        />
        <input type="submit" value="입력" />
      </form>
      <h3>{result}</h3>
    </>
  );
};
export default Gugudan;

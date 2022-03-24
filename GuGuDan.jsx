const React = require("react");
const { useState, useRef } = React;

const GuGuDan = () => {
  const [first, setFirst] = useState(Math.floor(Math.random() * 9));
  const [second, setSecond] = useState(Math.floor(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [correct, setCorrect] = useState(0);
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult((prevResult) => `${value} 정답!`);
      setFirst(Math.floor(Math.random() * 9));
      setSecond(Math.floor(Math.random() * 9));
      setValue("");
      setCorrect((current) => current + 1);
      inputRef.current.focus();
    } else if (parseInt(value) !== first * second) {
      setResult((prevResult) => `땡! 정답은 ${first * second}`);
      setFirst(Math.floor(Math.random() * 9));
      setSecond(Math.floor(Math.random() * 9));
      setValue("");
      setCorrect(correct);
      inputRef.current.focus();
    }
  };
  const onChange = (e) => setValue(e.target.value);

  return (
    <>
      <div>
        {first}곱하기{second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="number" onChange={onChange} value={value} />
        <button>입력</button>
      </form>
      <div>{result}</div>
      <div>정답횟수 : {correct}</div>
    </>
  );
};

module.exports = GuGuDan;

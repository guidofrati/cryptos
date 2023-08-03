import { useEffect, useState } from "react";

function Calculator(data) {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "usd") setInput("usd");
    if (e.target.name === "ars") setInput("ars");
  };

  const handleNumberChange = (e) => {
    const limit = 20;
    setNum(e.target.value.slice(0, limit));
  };

  const handleConvert = () => {
    if (input === "usd") {
      let res = parseFloat(currentPrice) * parseFloat(num);
      setResult(`${num} = $${res.toFixed(2)} USD`);
    } else {
      let res = parseFloat(currentPrice) * parseFloat(num);
      let blue = res * data.dolar;
      setResult(`${num} = $${blue.toFixed(2)} ARS`);
    }
    // setNum("");
  };
  //AGREGAR ERROR PARA CONVERTIR SOLO CUANDO ESTE COMPLETO CADA INPUT

  return (
    <div className="flex flex-col items-center bg-negro border border-verde rounded">
      <label className="text-blanco">Select crypto to USD or ARG</label>
      <br />
      <div className="flex flex-auto justify-around mx-3 space-x-3 space">
        <select
          className="text-negro"
          onChange={(e) => {
            setCurrentPrice(e.target.value);
          }}
        >
          <option value="none" selected disabled hidden>
            Select a Crypto
          </option>
          {data.props.map((d) => (
            <option value={d.priceUsd} key={d.id}>
              {d.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          id="num"
          name="num"
          min="0"
          value={num}
          onChange={handleNumberChange}
        />
        <input
          type="radio"
          name="usd"
          checked={input === "usd" ? true : false}
          onChange={handleChange}
        />
        <label className="text-blanco">USD</label>
        <input
          type="radio"
          name="ars"
          checked={input === "ars" ? true : false}
          onChange={handleChange}
        />
        <label className="text-blanco">ARS</label>
      </div>
      <div className="flex flex-col justify-center items-center pt-2 w-full px-2">
        <button
          className="text-blanco bg-verde rounded w-full disabled:opacity-40"
          // prettier-ignore
          disabled={(input === "ars" || input === "usd") && (num.length > 0) && (currentPrice.length > 0) ? false : true}
          onClick={() => handleConvert()}
        >
          Convert
        </button>
        {<p className=" text-blanco py-1">{result}</p>}
      </div>
    </div>
  );
}
export default Calculator;

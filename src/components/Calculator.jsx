import axios from "axios";
import { useState } from "react";

function Calculator(data, dolar) {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [input, setInput] = useState({
    usd: "",
    ars: "",
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleNumberChange = (e) => {
    const limit = 20;
    setNum(e.target.value.slice(0, limit));
  };

  const handleConvert = () => {};

  return (
    <div className="flex flex-col items-center bg-negro border border-verde rounded">
      <label className="text-blanco">Select crypto to USD or ARG</label>
      <br />
      <div className="flex flex-auto justify-around mx-3 space-x-3 space">
        <select className="text-negro">
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
          name="moneda"
          value={data.props.priceUsd}
          onChange={handleChange}
        />
        <label className="text-blanco">USD</label>
        <input
          type="radio"
          name="moneda"
          value={dolar.venta}
          onChange={handleChange}
        />
        <label className="text-blanco">ARS</label>
      </div>
      <div className="flex flex-col justify-center items-center pt-2 w-full px-2">
        <button
          className="text-blanco bg-verde rounded w-full"
          onClick={() => handleConvert()}
        >
          Convert
        </button>
        <p className=" text-blanco">{result}resultado</p>
      </div>
    </div>
  );
}
export default Calculator;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";

function Tabla() {
  const [data, setData] = useState([]);
  const [dolar, setDolar] = useState("");

  const secondPost = async () => {
    let response = await axios.get(
      "https://dolar-api-argentina.vercel.app/v1/dolares/blue"
    );
    setDolar(response.data.venta);
  };

  const fetchPost = async () => {
    let response = await axios.get("https://api.coincap.io/v2/assets?limit=25");
    setData(response.data.data);
  };

  useEffect(() => {
    fetchPost();
    secondPost();
  }, []);

  return (
    <div className="flex justify-evenly items-center pt-10 ">
      <table className="table-auto border border-collapse bg-negro rounded-md text-blanco">
        <caption className="caption-bottom text-clarito">
          Made by Guido :D
        </caption>
        <thead>
          <tr>
            <th className="border border-verde">Name</th>
            <th className="border border-verde">24hs Change</th>
            <th className="border border-verde">USD</th>
            <th className="border border-verde">ARS</th>
          </tr>
        </thead>
        {data.map((d) => (
          <tbody>
            <tr className="border border-verde">
              <td className="border border-verde">{d.name}</td>
              {d.changePercent24Hr < 0 ? (
                <td className="border border-verde text-negativo">
                  {parseFloat(d.changePercent24Hr).toFixed(2)}%
                </td>
              ) : (
                <td className="border border-verde text-positivo">
                  {parseFloat(d.changePercent24Hr).toFixed(2)}%
                </td>
              )}
              <td className="border border-verde">
                ${parseFloat(d.priceUsd).toFixed(2)}
              </td>
              <td className="border border-verde">
                ${(parseFloat(d.priceUsd) * parseFloat(dolar)).toFixed(2)}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Calculator props={data} dolar={dolar} />
    </div>
  );
}

export default Tabla;

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
    <div className="flex justify-evenly items-start pt-20 ">
      <table className="table-auto border border-collapse bg-negro rounded-md text-blanco w-1/3">
        <caption className="caption-bottom text-clarito">
          MADE BY GUIDO FRATICELLI
        </caption>
        <thead>
          <tr className="border border-verde p-2">
            <th className="border border-verde p-2">Name</th>
            <th className="border border-verde p-2">24hs Change</th>
            <th className="border border-verde p-2">USD</th>
            <th className="border border-verde p-2">ARS</th>
          </tr>
        </thead>
        {data.map((d) => (
          <tbody>
            <tr>
              <td className="border border-verde p-1">{d.name}</td>
              {/* {d.changePercent24Hr < 0 ? (
                <td className="border border-verde text-negativo p-1 text-center">
                  {parseFloat(d.changePercent24Hr).toFixed(2)}%
                </td>
              ) : (
                <td className=" border border-verde text-positivo p-1 text-center">
                  {parseFloat(d.changePercent24Hr).toFixed(2)}%
                </td>
              )} */}
              <td
                className={`border border-verde ${
                  d.changePercent24Hr < 0 ? "text-negativo" : "text-positivo"
                } p-1 text-center`}
              >
                {parseFloat(d.changePercent24Hr).toFixed(2)}%
              </td>
              <td className=" border border-verde p-1">
                ${parseFloat(d.priceUsd).toFixed(2)}
              </td>
              <td className=" border border-verde p-1">
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

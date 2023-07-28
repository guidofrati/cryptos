import axios from "axios";
import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";

function Tabla() {
  const [data, setData] = useState([]);

  const fetchPost = async () => {
    let response = await axios.get("https://api.coincap.io/v2/assets?limit=25");
    setData(response.data.data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="flex justify-evenly items-center pt-10 ">
      <table className="table-auto border border-collapse bg-negro rounded-md text-blanco">
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
              <td className="border border-verde">
                {parseFloat(d.changePercent24Hr).toFixed(2)}%
              </td>
              <td className="border border-verde">
                ${parseFloat(d.priceUsd).toFixed(2)}
              </td>
              <td className="border border-verde">{d.id}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <Calculator />
    </div>
  );
}

export default Tabla;

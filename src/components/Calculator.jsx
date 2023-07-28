import axios from "axios";

function Calculator() {
  return (
    <div className="flex flex-row items-center border border-verde rounded">
      <label className="text-blanco">Select crypto to USD or ARG</label>
      <br />
      <select className="text-negro">
        <option value="none" selected disabled hidden>
          Select a crypto
        </option>
        <option></option>
      </select>
    </div>
  );
}
export default Calculator;

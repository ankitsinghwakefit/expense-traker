import s from "./style.module.css";
import { useState } from "react";

export function ExpenseInput({ addExpence }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function callAddExpanse(e) {
    e.preventDefault();
    if (!name) return;
    if (!price) return;
    addExpence({ name, price: parseInt(price) });
    setName("");
    setPrice("");
  }
  return (
    <form>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button
            onClick={callAddExpanse}
            type="submit"
            className={`btn btn-primary ${s.btn}`}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

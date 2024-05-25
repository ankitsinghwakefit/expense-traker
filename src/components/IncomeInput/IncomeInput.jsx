import s from "./style.module.css";
import { addTotalIncome } from "../../store/expense/index";
import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
export function IncomeInput(props) {
  // const [income, setIncome] = useState(0)
  const dispatch = useDispatch();
  const totalIncome = useSelector((state) => state.EXPENSE.totalIncome);
  function handleIncome(e) {
    dispatch(addTotalIncome(parseInt(e.target.value)));
    // setIncome(e.target.value)
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          type="number"
          value={totalIncome}
          onChange={handleIncome}
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}

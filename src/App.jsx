import s from "./style.module.css";
import { ExpenseInput } from "components/ExpenseInput/ExpenseInput";
import { IncomeInput } from "components/IncomeInput/IncomeInput";
import { ExpenseTotal } from "components/ExpenseTotal/ExpenseTotal";
import { useDispatch, useSelector } from "react-redux";
import { addExpenseAction } from "./store/expense/index";
import { List } from "components/List/List";
export function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.EXPENSE.expenseList);
  console.log(selector);
  function addExpence(data) {
    dispatch(addExpenseAction(data));
  }
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>Logo</div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput addExpence={addExpence} />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={selector} />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}

import s from "./style.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export function ExpenseTotal(props) {
  // const [totalExp, setTotalExp] = useState(0);
  // const [rem, setRem] = useState(0);
  const { expenseList, totalIncome } = useSelector((state) => state.EXPENSE);
  // useEffect(() => {
  //   let total = 0;
  //   expenseList.forEach((element) => {
  //     total += element.price;
  //   });
  //   setTotalExp(total);
  //   setRem(totalIncome - totalExp);
  // }, [expenseList, totalIncome, totalExp]);
  const [totalExp, rem] = useMemo(() => {
    let total = 0;
    expenseList.forEach((element) => {
      total += element.price;
    });
    return [total, totalIncome - total];
  }, [expenseList, totalIncome]);
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExp} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{rem} $</div>
      </div>
    </div>
  );
}

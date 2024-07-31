import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"
import "react-circular-progressbar/dist/styles.css"

const BudgetTracker = () => {

  const { state, totalExprenses, remainingBudget} = useBudget()

  const porcentage = +((totalExprenses / state.budget) * 100).toFixed(2)

  console.log(porcentage)

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
       <div className=" flex justify-center">
         <CircularProgressbar
            value={porcentage}
            styles={buildStyles({
              pathColor: porcentage === 100 ? '#DC2626' : '#3b82f6',
              trailColor: '#f5f5f5',
              textSize: 8,
              textColor: porcentage === 100 ? '#DC2626' : '#3b82f6'
            })}
            text={`${porcentage}% Gastado`}
         />
       </div>

       <div className=" flex flex-col justify-center items-center gap-8">
        
        <AmountDisplay
          label="Presupuesto"
          amount={state.budget}/>

         <AmountDisplay
          label="Gastado"
          amount={totalExprenses}/>

         <AmountDisplay
          label="Disponible"
          amount={remainingBudget}/>  
       </div>
    </div>
  )
}

export default BudgetTracker

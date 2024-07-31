import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

const ExpenseList = () => {

  const { state } = useBudget()
  const filterExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory)
    : state.expenses
  const isEmpty = useMemo(() => filterExpenses.length === 0, [state.expenses])

  return (
    <div className="mt-5">
      {isEmpty ? <p className="text-gray-600 text-2xl text-center font-bold">No hay Gastos</p> : (
        <>
            <p className=" text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
            {filterExpenses.map( expense => (
                <ExpenseDetail
                key={expense.id}
                expense={expense}
                />
            ))}
            <p>Deslice el gasto a hacia la izquierda para eliminar o hacia la derecha para actualizar.</p>
        </>
      )}
    </div>
  )
}

export default ExpenseList

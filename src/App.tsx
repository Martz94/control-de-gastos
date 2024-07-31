import { useMemo, useEffect } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"
import ExpenseModal from "./components/ExpenseModal"
import ExpenseList from "./components/ExpenseList"
import FilterByCategory from "./components/FilterByCategory"

function App() {

  const { state, dispatch} = useBudget()
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state])

  return (
    <>
    <header className=" fixed top-0 bg-slate-900 shadow-md w-full px-5 py-8">
      <div className=" flex justify-evenly">
      <h1 className=" uppercase text-center font-black text-4xl text-white">
        Planificador de gastos
      </h1>
      <button 
            type="button"
            className=" bg-blue-600 hover:bg-white w-auto p-2 hover:text-black text-white uppercase font-bold rounded-lg"
            onClick={() => dispatch ({type: 'reset-app'})}> 
            Resetear App
        </button>
        </div>
    </header>

     <div className=" m-16">''</div>

    <div className=" max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
      {isValidBudget ? <BudgetTracker/> : <BudgetForm/>}
    </div>
    {isValidBudget && (
      <main className=" max-w-3xl mx-auto py-10">
        <FilterByCategory/>
        <ExpenseList/>
        <ExpenseModal/>
        </main>
      )}   
    </>
  )
}

export default App

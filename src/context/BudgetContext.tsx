import { createContext, useReducer, Dispatch, ReactNode, useMemo} from "react"
import { BudgetState, BudgetActions,budgetReducer, initialState } from "../reducers/budget-reducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExprenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExprenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0) ,
      [state.expenses])
    const remainingBudget = state.budget - totalExprenses
    

    return(
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExprenses,
                remainingBudget
            }}>
            {children}
        </BudgetContext.Provider>
    )
}
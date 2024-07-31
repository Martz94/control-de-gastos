import { ReactNode } from "react"

type ErrorMessageProps = {
    children: ReactNode
}

const ErrorMessage = ({children}: ErrorMessageProps) => {
  return (
    <p className=" bg-red-600 p-2 text-white font-bold tex-ms text-center">
      {children}
    </p>
  )
}

export default ErrorMessage

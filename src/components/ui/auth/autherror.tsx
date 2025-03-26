import { AllHTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

const AuthError: React.FC<AllHTMLAttributes<HTMLParagraphElement>> = ({ className, children, ...rest }) => {
  return (
    <p className={twMerge('mt-2 text-sm text-error-text font-medium', className)} {...rest}>
      {children}
    </p>
  )
}
export default AuthError;
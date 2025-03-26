import { AllHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Title: React.FC<AllHTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
  return (
    <h1 className={twMerge("text-center  text-dark text-[40px] xl:text-[50px] my-2 ", className)} {...rest}>{children}</h1>
  )
}
export default Title
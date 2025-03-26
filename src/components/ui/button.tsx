import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={" text-center my-2 tracking-[0.1rem] xl:text-lg text-sm bg-button-unselected-bg focus:bg-button-selected-bg  hover:bg-button-selected-bg text-white rounded-lg w-full p-2 " + className}>
      {children}
    </button>
  )
}

export default Button
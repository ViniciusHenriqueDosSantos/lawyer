import React, { ParamHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Caption: React.FC<ParamHTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <p
      className={twMerge(
        'text-center text-lg xl:text-xl  text-neutral-500 my-2',
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  )
}
export default Caption
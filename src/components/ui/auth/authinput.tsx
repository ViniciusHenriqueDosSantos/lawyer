import React, { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import AuthError from './autherror'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  number?: boolean
  register?: UseFormRegisterReturn
  error?: string | null

}

const AuthInput: React.FC<InputProps> = ({
  number,
  id,
  type,
  label,
  register,
  error,
  className,
  ...rest
}) => {
  return (
    <div className="mb-4">
      {label && (
        <div className="flex gap-2 items-center">
          <label
            className={twMerge(
              '    text-sm  xl:text-lg ',

            )}
            htmlFor={id}
          >
            {label}
          </label>

        </div>
      )}
      {type !== 'checkbox' ? (
        <input
          type={type === undefined ? (number ? 'number' : 'text') : type}
          className={twMerge(
            ' border px-2 py-3  mt-1 outline-none  w-full   rounded-lg',
            className,
          )}
          {...register}
          id={id !== undefined ? id : 'input'}
          {...rest}
        />
      ) : (
        <label className="switch mt-3">
          <input
            type="checkbox"
            className={className}
            {...register}
            {...rest}
          />
          <span className="slider  round"></span>
        </label>
      )}
      {error &&
        <AuthError>{error}</AuthError>
      }
    </div>
  )
}
export default AuthInput
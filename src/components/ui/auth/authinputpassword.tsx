
import { Eye, LucideEyeOff } from 'lucide-react'
import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export default function AuthInputPassword({
  register,
  label,
  placeholder,
}: {
  label?: string
  placeholder?: string
  register: UseFormRegisterReturn
}) {
  const [reveal, setReveal] = useState(false)
  return (
    <div className="mb-4">
      <label
        className={
          'text-sm  xl:text-lg'}
        htmlFor={'password'}
      >
        {label || 'Senha'}
      </label>
      <div className="flex bg items-center justify-around border bg-white pl-0.5  mt-1 outline-none  w-full   rounded-lg">
        <input
          type={reveal ? 'text' : 'password'}
          className="border-none outline-none px-2 py-3  w-full"
          {...register}
          id="password"
          name="password"
          placeholder={placeholder || 'Insira sua senha'}
        />
        <div className="bg-[#E8F0FE]  h-full p-2 py-3">
          <div className="hover:scale cursor-pointer rounded-full bg-button-selected-bg p-0.5 text-white hover:bg-button-selected-hover-bg">
            {reveal ? (
              <Eye
                onClick={() => {
                  setReveal(!reveal)
                }}
              />
            ) : (
              <LucideEyeOff
                onClick={() => {
                  setReveal(!reveal)
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

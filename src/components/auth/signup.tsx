'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthInput from "../ui/auth/authinput";
import Button from "../ui/button";
import logIn from "@/actions/signin";
import AuthError from "../ui/auth/autherror";
import Link from "next/link";
import AuthInputPassword from "../ui/auth/authinputpassword";
import { cpfMask } from "@/utils/cpfmask";

const signUpSchema =
  z.object({
    name: z.string().min(1, { message: 'Campo obrigatório' }),
    email: z.string().min(1, { message: 'Campo obrigatório' }).email({ message: 'E-mail inválido' }),
    cpf: z.string().min(1, { message: 'Campo obrigatório' }),
    password: z.string().min(1, { message: 'Campo obrigatório' }),
  })
type SignUpSchemaType = z.infer<typeof signUpSchema>
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
  });
  const [error, setError] = useState("")
  const [logging, setLogging] = useState(false)
  const handleLogin = async (data: SignUpSchemaType) => {
    setLogging(true)
    try {

      logIn(data.email, data.password)

    } catch {
      setError("Houve um erro ao logar! Verifique suas informações.")
    }
    setLogging(false);
  }

  return (
    <form method="post" onSubmit={handleSubmit(handleLogin)}>
      <AuthInput error={errors.name !== undefined ? errors.name.message !== undefined ? errors.name.message : null : null} placeholder="Insira seu nome completo" label="Nome completo" type="text" register={register('name')} />
      <AuthInput error={errors.email !== undefined ? errors.email.message !== undefined ? errors.email.message : null : null} placeholder="Insira seu E-mail" label="Seu E-mail" type="email" register={register('email')} />
      <AuthInput placeholder="000.000.000-00"
        min="11"
        max="11"
        onChange={(e) => (e.target.value = cpfMask(e.target.value))} error={errors.cpf !== undefined ? errors.cpf.message !== undefined ? errors.cpf.message : null : null} label="CPF" type="text" register={register('cpf')} />

      <AuthInputPassword placeholder="Insira sua senha" label="Senha" register={register('password')} />
      <div className="mt-2 mb-8">
        {error !== "" && <AuthError className="mb-4">{error}</AuthError>}
        <Link className="underline xl:text-lg text-sm  font-light" href="/password-reset-request">Esqueceu sua senha?</Link>

      </div>
      <Button>{logging ? 'Cadastando...' : 'Cadastre-se'}</Button>

    </form>

  )
}
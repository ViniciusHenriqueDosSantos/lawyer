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

const signInSchema =
  z.object({
    email: z.string().min(1, { message: 'Campo obrigatório' }).email({ message: 'E-mail inválido' }),
    password: z.string().min(1, { message: 'Campo obrigatório' }),
  })
type SignInSchemaType = z.infer<typeof signInSchema>
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    mode: 'onTouched',
  });
  const [error, setError] = useState("")
  const [logging, setLogging] = useState(false)
  const handleLogin = async (data: SignInSchemaType) => {
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
      <AuthInput error={errors.email !== undefined ? errors.email.message !== undefined ? errors.email.message : null : null} placeholder="Insira seu E-mail" label="Seu E-mail" type="email" register={register('email')} />
      <AuthInputPassword placeholder="Insira sua senha" label="Senha" register={register('password')} />
      <div className="mt-2 mb-8">
        {error !== "" && <AuthError className="mb-4">{error}</AuthError>}
        <Link className="underline xl:text-lg text-sm  font-light" href="/password-reset-request">Esqueceu sua senha?</Link>

      </div>
      <Button>{logging ? 'Entrando...' : 'Entrar'}</Button>

    </form>

  )
}
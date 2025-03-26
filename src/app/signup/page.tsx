import SignUp from "@/components/auth/signup";
import Caption from "@/components/ui/caption";
import Title from "@/components/ui/title";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="min-h-screen h-full w-full flex items-center  flex-col xl:flex-row justify-between ">
      <div className="xl:w-5/12 w-full xl:min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="xl:w-8/12 w-full px-4 py-10 xl:p-0">
          <Title >Inscreva-se</Title>
          <Caption className="my-3 mb-5">Crie uma conta para aproveitar o melhor da nossa plataforma.</Caption>
          <SignUp />
        </div>
      </div>
      <div className="xl:w-7/12 w-full-full  xl:min-h-screen relative ">
        <Image src="/images/loginimage.webp" width={2000} height={2000} quality={100} className="w-full xl:min-h-screen object-cover  filter-[brightness(50%)] brightness-[60%]" alt="" />
        <Image src="/images/whitelogo.png" width={400} height={300} quality={100} className="absolute left-1/2 top-1/2  w-[200px] xl:w-[400px] transform -translate-x-1/2 -translate-y-1/2 " alt="Integridade Capital" />
      </div>
    </div>
  )
}
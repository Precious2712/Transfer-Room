import { SignupField } from "@/components/signup/SignupField";

import { AnimatedBackground } from "@/components/FormField/animated-background";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative min-h-screen pt-0 pb-12 px-4">
        <div className="max-w-5xl mx-auto mb-8">
          {/* <h1 className="text-center text-gray-600 lg:text-2xl font-bold">Complete the form below to signup</h1> */}
        </div>
        <SignupField />
        <Link href='/login-page'>
          <p className="text-center underline underline-blue-500 mt-7">Already have an account, login!!</p>
        </Link>
      </main>
    </>
  )
}
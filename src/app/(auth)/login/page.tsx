import { Metadata } from "next";
import Link from "next/link";

import loginImage from "@/assets/login-image.jpg";
import Image from "next/image";
import LoginForm from "./form";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="flex w-full flex-col items-center justify-between overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-3xl font-bold">Log in to bugbook</h1>
          <LoginForm />
          <span className="block text-center">
            Don&apos;t have an account?&nbsp;
            <Link href="/sign-up" className="text-primary hover:underline">
              <span className="font-semibold">Sign up</span>
            </Link>
          </span>
        </div>
        <Image
          src={loginImage}
          alt="Log In Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}

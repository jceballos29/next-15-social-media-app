import { Metadata } from "next";
import signUpImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./form";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="flex w-full flex-col items-center justify-between overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Sign up to bugbook</h1>
            <p className="text-muted-foreground">
              A place where even <span className="italic">you</span> can find a
              friend.
            </p>
          </div>
          <SignUpForm />
          <span className="block text-center">
            Already have an account?&nbsp;
            <Link href="/login" className="text-primary hover:underline">
              <span className="font-semibold">Log in</span>
            </Link>
          </span>
        </div>
        <Image
          src={signUpImage}
          alt="Sign Up Image"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}

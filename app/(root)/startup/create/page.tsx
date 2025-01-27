import StartupForm from "@/components/StartupForm";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


const Page = async() => {
  // people can accsess this page only if they are loged in
  const session = await auth();

  if(!session) redirect("/")

  return (
    <>
      <section className="pink_container min-h-[230px]!">
        <h1 className="heading">Submit Your Startup</h1>
      </section>
      <StartupForm/>
    </>
  );
};

export default Page;

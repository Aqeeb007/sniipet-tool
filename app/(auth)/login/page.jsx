"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/Logo";
import Link from "next/link";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
});

const Page = () => {
  const router = useRouter();
  // ...
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div>
        <Link href={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="w-[360px] h-auto bg-gray-300 rounded-2xl p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-gray-100 rounded-xl border-none"
                      placeholder="Please enter a email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-gray-100 w-full rounded-xl border-none"
                      placeholder="please enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3">
              <Button type="submit">Login</Button>
              <Button
                type="button"
                onClick={() => {
                  router.push("/register");
                }}
                variant={"link"}
                className="text-blue-700 ml-auto"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-gray-400 pt-5">
          <div className="flex items-center">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="mx-4">OR</div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </div>

        <span className="flex justify-center text-center">
          Login with Google
        </span>
        <div className="flex justify-center gap-3 py-4">
          <Button variant={"icon"} className="rounded-full">
            <Image width={40} height={40} alt="G" src={"/G.svg"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;

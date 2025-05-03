"use client";

import * as z from "zod";
import Header from "@/components/header";
import { Code, MessageSquare } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { GenerateContentResponse } from "@google/genai";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Empty from "@/components/empty";
import Loading from "@/components/loading";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/userAvatar";
import BotAvatar from "@/components/botAvatar";
import ReactMarkdown from "react-markdown";

const CodeGeneration = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<GenerateContentResponse[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    console.log("in onSubmit method");
    try {
      const userMessage = value.prompt;
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      console.log("conv page: ", response.data);
      setMessages((current) => [response.data, userMessage, ...current]);

      form.reset();
    } catch (e: any) {
      console.log(e);
    } finally {
      router.refresh();
    }
  };
  return (
    <div>
      <Header
        description="Simple Code By Description."
        icon={Code}
        title="Code Generation"
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm  grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="col-span-12 border-none shadow-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Simple toggle button by react hooks....."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && <Loading />}
          {messages.length === 0 && !isLoading && (
            <Empty label={"No Conversation Started"} />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((content, i) => {
              console.log(i, i % 2 == 0);
              return (
                <div
                  key={`${content}`.length}
                  style={{ whiteSpace: "pre-wrap" }}
                  className={cn(
                    "p-8 w-full flex items-start rounded-xl gap-x-2 ",
                    i % 2 == 0 ? "bg-muted font-semibold" : " border shadow-sm"
                  )}
                >
                  {i % 2 != 0 ? <UserAvatar /> : <BotAvatar />}
                  {/* {`${content}`} */}
                  <div className="text-sm overflow-hidden leading-7">
                    <ReactMarkdown
                      components={{
                        pre: ({ node, ...props }) => {
                          return (
                            <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                              <pre {...props} />
                            </div>
                          );
                        },
                        code: ({ node, ...props }) => (
                          <code
                            className="rounded-lg p-1 bg-black/10"
                            {...props}
                          />
                        ),
                      }}
                    >{`${content || ""}`}</ReactMarkdown>
                  </div>
                </div>
              );
            })}
            <div className="mb-16"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeGeneration;

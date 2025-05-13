import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Image Prompt Is Required",
  }),
  resolution: z.string().min(1),
  amount: z.string().min(1),
});

export const amountValues = [
  {
    value: "1",
    label: "1 Photo",
  },
  {
    value: "2",
    label: "2 Photos",
  },
  {
    value: "3",
    label: "3 Photos",
  },
  {
    value: "4",
    label: "4 Photos",
  },
  {
    value: "5",
    label: "5 Photos",
  },
];

export const resolutionValues = [
  { value: "250x250", label: "250x250" },
  { value: "512x512", label: "512x512" },
  { value: "1012x1012", label: "1012x1012" },
];

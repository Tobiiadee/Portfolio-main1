/** @format */
"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProjectSchema } from "@/lib/types/types";
import { Input } from "@/modules/common/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/common/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/modules/common/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/modules/common/ui/calendar";
import { Textarea } from "@/modules/common/ui/textarea";
import { Button } from "@/modules/common/ui/button";
import AddImageComp from "./add-image-comp";
import ServicesComp from "./services-comp";
import useLocalStorage from "@/hooks/use-localStorage";

type ProjectType = z.infer<typeof ProjectSchema>;

let initialValue = {
  title: "",
  subTitle: "",
  url: "",
  description: "",
  thumbnailUrl: [""],
  industry: "",
  client: "",
  services: [""],
  date: new Date(),
};

const servicesArray = [
  "web Development",
  "UI/UX",
  "CMS Development",
  "Cloud Computing",
  "Web Analytics",
  "SEO Sevices",
  "Maintenance and Support",
];

export default function AddProjectComp() {
  //Initializing useLocalStorage for add project component
  const [storedValue, setValue] = useLocalStorage("projectData", initialValue);

  //Form data
  const [data, setData] = useState(initialValue);

  //Initializing state for services component
  const [pickService, setPickService] = useState<string[]>([]);

  // 1. Define your form.
  const form = useForm<ProjectType>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: initialValue,
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ProjectSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    const formData = { ...values, services: pickService };
    setData(formData);
    setValue(formData);
  }

  useEffect(() => {
    form.reset(storedValue);
  }, [form, storedValue]);

  //Services component handlers and values
  // Stored value for services component
  // const serviceStoredData = storedValue.services;

  // Pick service handler
  const pickServiceHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedService = e.currentTarget.textContent!;

    if (selectedService) {
      const selectedServices = pickService.concat(selectedService);
      if (pickService.includes(selectedService!)) {
        return;
      }
      setPickService(selectedServices);
    }
  };

  //Remove service handler
  const removeService = (e: React.MouseEvent<HTMLDivElement>) => {
    const serviceId = e.currentTarget.textContent!;
    const newServices = pickService.filter((service) => service !== serviceId);
    setPickService(newServices);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-4 flex flex-col w-full md:w-4/6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-semibold'>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Project title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='subTitle'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-semibold'>Sub-Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Project sub-title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name='url'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-semibold'>URL</FormLabel>
                  <FormControl>
                    <Input placeholder='Project URL' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex flex-col md:flex-row gap-6'>
            <FormField
              control={form.control}
              name='industry'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-semibold'>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder='Industry' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='client'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-semibold'>Client</FormLabel>
                  <FormControl>
                    <Input placeholder='Client' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex flex-col md:flex-row gap-6'>
            <FormField
              control={form.control}
              name='date'
              render={({ field }) => (
                <FormItem className='flex flex-col w-full'>
                  <FormLabel className='font-semibold'>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}>
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <ServicesComp
              pickService={pickService}
              pickServiceHandler={pickServiceHandler}
              removeService={removeService}
              services={servicesArray}
            />
          </div>
          <div className=''>
            <FormField
              control={form.control}
              name='firstDescription'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel className='font-semibold'>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='What do you think?'
                      {...field}
                      className='min-h-[10rem] max-h-[10rem]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <AddImageComp />
          </div>

          <Button type='submit' className='self-end'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

/** @format */
"use client";

import React, { ChangeEvent, useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/modules/common/ui/radio-group";
import useSendFirebaseProject from "@/hooks/use-sendFirebaseData";
import { toast } from "sonner";
import { generatePath } from "@/lib/helpers/helpers";
import { useRouter } from "next/navigation";


type ProjectType = z.infer<typeof ProjectSchema>;

// Define the initial values with correct types
let initialValue: {
  title: string;
  subTitle: string;
  url: string;
  description: string;
  industry: string;
  client: string;
  stage: "completed" | "ongoing";
  services: string[];
  date: Date;
} = {
  title: "",
  subTitle: "",
  url: "",
  description: "",
  industry: "",
  client: "",
  stage: "completed", // This matches the enum type
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

const { generatedPath, uID } = generatePath("projects");

export default function AddProjectComp() {
  const { push } = useRouter();

  //Send data to firebase
  const { sendData, onSuccess, error, loading } =
    useSendFirebaseProject(generatedPath);

  //Initializing state for services component
  const [pickService, setPickService] = useState<string[]>([]);

  //Project thumbnail state
  const [projectThumbnail, setProjectThumbnail] = useState<
    string | ArrayBuffer | null
  >(null);

  // const projectId = uuidv4();

  // 1. Define your form.
  const form = useForm<ProjectType>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: initialValue,
  });

  // const isValid = form.formState.isValid;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ProjectSchema>) {
    const formData = {
      ...values,
      id: uID,
      services: pickService,
      thumbnailUrl: projectThumbnail,
    };
    sendData(formData);
    setPickService([]);
    form.reset();
  }

  if (onSuccess) {
    toast.success("Project added successfully");
    setTimeout(() => {
      push("/projects");
    }, 2000);
  }

  if (error) {
    toast.error("There was an error adding the project");
  }

  const { isValid } = form.formState;

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

  //Handle Image upload
  const imageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const readerFile = reader.readAsDataURL.toString();
        // Set the base64 string as the state
        setProjectThumbnail(reader.result?.toString()!);
      };
      reader.readAsDataURL(file); // Convert the file to base64 string
    }
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

          <div className='flex flex-col md:flex-row gap-2 md:gap-4 md:items-center my-4'>
            <FormField
              control={form.control}
              name='stage'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  <FormLabel>What stage is your project?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex items-center space-x-8'>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='completed' />
                        </FormControl>
                        <FormLabel className='font-normal'>Completed</FormLabel>
                      </FormItem>
                      <FormItem className='flex items-center space-x-3 space-y-0'>
                        <FormControl>
                          <RadioGroupItem value='ongoing' />
                        </FormControl>
                        <FormLabel className='font-normal'>Ongoing</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
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
              name='description'
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
            <AddImageComp
              imageUploadHandler={imageUploadHandler}
              projectThumbnail={projectThumbnail}
            />
          </div>

          <Button
            type='submit'
            isLoading={loading}
            disabled={!isValid}
            className='self-end'>
            Add Project
          </Button>
        </form>
      </Form>
    </div>
  );
}

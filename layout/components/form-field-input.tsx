/** @format */

// /** @format */

// import React from "react";
// import {
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/modules/common/ui/form";
// import { Input } from "@/modules/common/ui/input";
// import { Textarea } from "@/modules/common/ui/textarea";
// import { UseFormReturn } from "react-hook-form";
// import { ProjectType } from "./add-project-comp";

// type nameType = keyof ProjectType;

// type FormElementType = {
//   form: UseFormReturn<ProjectType>;
//   label: string;
//   formName: nameType;
//   placeholder: string;
//   textarea?: boolean;
// };

// export default function FormFieldInput({
//   form,
//   formName,
//   label,
//   placeholder,
//   textarea,
// }: FormElementType) {
//   return (
//     <FormField
//       control={form.control}
//       name={formName}
//       render={({ field }) => (
//         <FormItem className='w-full'>
//           <FormLabel className='font-semibold'>{label}</FormLabel>
//           <FormControl>
//             {textarea ? (
//               <Textarea
//                 placeholder='What do you think?'
//                 {...field}
//                 className='min-h-[10rem] max-h-[10rem]'
//               />
//             ) : (
//               <Input placeholder={placeholder} {...field} />
//             )}
//           </FormControl>
//           <FormMessage />
//         </FormItem>
//       )}
//     />
//   );
// }

// {

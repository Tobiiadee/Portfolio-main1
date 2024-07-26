/** @format */

import { Label } from "@/modules/common/ui/label";
import { RadioGroup, RadioGroupItem } from "@/modules/common/ui/radio-group";

import React from "react";

export default function AddProjectRadio() {
  return (
    <RadioGroup
      defaultValue='completed'
      className='flex justify-between items-center w-2/6'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='completed' id='completed' />
        <Label htmlFor='completed'>Completed</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='ongoing' id='ongoing' />
        <Label htmlFor='ongoing'>Ongoing</Label>
      </div>
    </RadioGroup>
  );
}

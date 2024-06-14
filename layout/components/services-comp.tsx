/** @format */

import React, { SyntheticEvent, useState } from "react";
import { Text } from "@/modules/common/components/text";
import { Cross2Icon } from "@radix-ui/react-icons";

//pickService, pickServiceHandler, removeService

type servicesCompType = {
  services: string[];
  pickService: string[];
  pickServiceHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  removeService: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ServicesComp({
  services,
  pickService,
  pickServiceHandler,
  removeService,
}: servicesCompType) {
  return (
    <>
      <div className='border min-h-[3rem] h-max p-2 w-full rounded-xl flex gap-4 items-center overflow-hidden'>
        {pickService.length === 0 ? (
          <Text variant={"p"}>Choose a service</Text>
        ) : (
          <div className='flex flex-wrap gap-2 items-center'>
            {pickService.map((service) => (
              <Services
                removeService={removeService}
                key={service}
                service={service}
              />
            ))}
          </div>
        )}
      </div>
      <PickService services={services} selectService={pickServiceHandler} />
    </>
  );
}

const PickService = ({
  selectService,
  services,
}: {
  services: string[];
  selectService: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className='flex items-center flex-wrap gap-2 mt-6 cursor-pointer'>
      {services.map((service) => (
        <ServiceComp
          selectService={selectService}
          key={service}
          service={service}
        />
      ))}
    </div>
  );
};

const Services = ({
  service,
  removeService,
}: {
  service: string;
  removeService?: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div className='h-max w-max p-2 bg-foreground rounded-md flex gap-2 px-2 py-2 items-center'>
      <div onClick={removeService} className='p-0 cursor-pointer'>
        {""}
        <Text
          variant={"p"}
          className='hidden text-xs capitalize text-background'>
          {service}
        </Text>
        <Cross2Icon className='text-background' />
      </div>
      <Text variant={"p"} className='text-xs capitalize text-background'>
        {service}
      </Text>
    </div>
  );
};

const ServiceComp = ({
  service,
  selectService,
}: {
  service: string;
  selectService: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <div
      onClick={selectService}
      className='h-max w-max p-2 bg-foreground rounded-md px-2 py-2'>
      <Text variant={"p"} className='text-xs capitalize text-background'>
        {service}
      </Text>
    </div>
  );
};

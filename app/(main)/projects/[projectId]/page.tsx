/** @format */

"use client";

import useGetProject from "@/hooks/use-getProject";
import ProjectIdComp from "@/layout/components/projectId-comp";
import React from "react";
import { Text } from "@/modules/common/components/text";
import { toast } from "sonner";
import PageLoading from "@/modules/common/epmty-states/page-loading";

type Params = {
  params: {
    projectId: string;
  };
};

export default function ProjectId({ params: { projectId } }: Params) {
  const { data, loading, error, noData } = useGetProject(projectId);

  return (
    <div className=''>
      {loading && (
        <div className='h-[80dvh] flex items-center justify-center'>
          <PageLoading />
        </div>
      )}

      {noData && (
        <div className='h-[80dvh] flex items-center justify-center'>
          <Text variant={"h3"}>This project does not exist!</Text>
        </div>
      )}

      {error &&
        toast.error(
          "There was an error fetching this project. Please try again!"
        )}

      {data && (
        <ProjectIdComp
          title={data.title}
          client={data.client}
          description={data.description}
          subTitle={data.subTitle}
          thumbnailUrl={data.thumbnailUrl}
          url={data.url}
          industry={data.industry}
          services={data.services || []}
          date={data.date}
        />
      )}
    </div>
  );
}

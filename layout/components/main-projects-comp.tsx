/** @format */

import React from "react";
import OngoingProjectComp from "./ongoing-project-comp";
import CompletedProjectComp from "./completed-project-comp";

export default function MainProjectsComp() {
  return (
    <div className="flex flex-col gap-14 md:gap-28">
      <OngoingProjectComp />
      <CompletedProjectComp />
    </div>
  );
}

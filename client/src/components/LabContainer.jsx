import React from "react";
import LabCard from "./LabCard";

const LabContainer = () => {
  return (
    <div className="grid place-items-center grid-cols-1 tablet:grid-cols-1 laptop:grid-cols-2 gap-8 mb-20">
      <LabCard />
      <LabCard />
    </div>
  );
};

export default LabContainer;

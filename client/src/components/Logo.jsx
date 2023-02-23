import React from "react";

const Logo = () => {
  const logo = "<_Hk_folio_>";
  return (
    <div className="flex justify-center -mt-28 gap-x-8 ml-6 laptop:ml-32 laptop:mt-1 laptop:justify-end pl-2 pr-6 py-6">
      <h1>{logo}</h1>
    </div>
  );
};

export default Logo;

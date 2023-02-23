import React from "react";

const LabCard = () => {
  return (
    <div className="sm:max-w-xl max-w-sm sm:flex relative rounded shadow bg-white dark:bg-gray-800 sm:h-80 bg-203A4C">
      <img
        src="https://i.ibb.co/1m5Q4tf/image.png"
        alt="rally"
        className="sm:w-64 sm:rounded-l rounded-l-none rounded-t sm:rounded-t-none object-cover object-center sm:h-full"
      />
      <div className="p-6">
        <div className="flex justify-between">
          <p className="text-xs font-semibold leading-loose text-gray-500">
            JULY 22, 2020
          </p>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/3k6DYks/image.png"
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>

        <p className="text-xl text-body-1 font-bold text-gray-800 mt-5 font-IBM">
          Do we know what Lorem ipsum dolor really means?
        </p>
        <p className="text-sm text-body-2 font-IBM leading-5 text-gray-500 mt-3">
          Fusce condimentum maximus eros, non fringilla risus tincidunt sit
          amet. In id purus et libero pretium rhoncus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex justify-end mt-2 cursor-pointer">
          <p className="text-sm font-semibold leading-4 text-indigo-700">
            Learn More
          </p>
          <svg
            className="ml-3"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 35 30"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.61236 17.143H28.231L20.3867 26.4859C19.6223 27.3945 19.7476 28.7466 20.6631 29.503C21.5807 30.2616 22.941 30.1373 23.7053 29.2288L34.5012 16.3715C34.5854 16.2708 34.6264 16.153 34.6891 16.0415C34.7409 15.9515 34.8035 15.8744 34.8424 15.7758C34.9395 15.5294 34.9978 15.2701 34.9978 15.0087C34.9978 15.0065 35 15.0022 35 15.0001C35 14.998 34.9978 14.9937 34.9978 14.9915C34.9978 14.7301 34.9395 14.4708 34.8424 14.2244C34.8035 14.1258 34.7409 14.0487 34.6891 13.9587C34.6264 13.8472 34.5854 13.7294 34.5012 13.6287L23.7053 0.771434C23.2757 0.263573 22.6625 0 22.0449 0C21.557 0 21.0668 0.162858 20.6631 0.497146C19.7476 1.25358 19.6223 2.60573 20.3867 3.51431L28.231 12.8572H2.61236C1.4205 12.8572 0.453186 13.8172 0.453186 15.0001C0.453186 16.183 1.4205 17.143 2.61236 17.143Z"
              fill="#00aecb"
            />
          </svg>
        </div>
      </div>
    </div>

    // <div className="md:w-96 rounded shadow-lg p-5 bg-203A4C">
    //   <p className="text-2xl font-bold leading-none text-white pt-7">
    //     Startup Culture
    //   </p>
    //   <p className="pt-4 text-sm leading-5 text-white">
    //     How technology catapulted innovation in two decades
    //   </p>
    //   <p className="pt-7 text-xs leading-3 text-indigo-200">
    //     San Diego, California
    //   </p>
    //   <p className="text-xs leading-3 text-white pt-2">
    //     11:30 PM, 12th February 2021
    //   </p>
    //   <div className="flex items-center w-full justify-end relative">
    //     <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full opacity-50" />
    //     <div className="w-12 h-12 mr-2 flex items-center cursor-pointer justify-center bg-EAEAEB rounded-full absolute transition-colors hover:bg-121c30">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="icon icon-tabler icon-tabler-arrow-narrow-right"
    //         width={28}
    //         height={28}
    //         viewBox="0 0 24 24"
    //         strokeWidth="1.5"
    //         stroke="#00aecb"
    //         fill="none"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //       >
    //         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //         <line x1={5} y1={12} x2={19} y2={12} />
    //         <line x1={15} y1={16} x2={19} y2={12} />
    //         <line x1={15} y1={8} x2={19} y2={12} />
    //       </svg>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LabCard;

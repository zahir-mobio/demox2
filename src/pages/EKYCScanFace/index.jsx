import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Img } from "components";
import Header from "components/Header";

const EKYCScanFacePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[953px] mb-[71px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[32px] items-center justify-start mb-[72px] mt-[10px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
                  <Text
                    className="font-poppins text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mb-[2px] mt-[7px] not-italic text-bluegray_400 text-right w-[auto]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[40px] items-center justify-start p-[48px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-bluegray_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Scan Face
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Follow introduction below
                    </Text>
                  </div>
                  <div className="flex flex-col relative sm:w-[100%] w-[56%]">
                    <div className="h-[504px] mx-[auto] w-[100%]">
                      <Img
                        src="images/img_rectangle_504x585.png"
                        className="h-[504px] m-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="rectangle"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[62px] sm:px-[20px] md:px-[40px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group41.svg')",
                        }}
                      >
                        <Img
                          src="images/img_group_white_a700.svg"
                          className="h-[377px] w-[auto]"
                          alt="group_One"
                        />
                      </div>
                    </div>
                    <div className="bg-deep_orange_300 h-[80px] mt-[-17px] mx-[auto] outline outline-[4px] outline-white_A700 rounded-[50%] w-[80px] z-[1]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCScanFacePage;

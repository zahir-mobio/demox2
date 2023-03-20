import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Img, Button } from "components";
import Header from "components/Header";

const EKYCBeginPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[950px] mb-[74px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[32px] items-center justify-start mb-[75px] mt-[10px] w-[100%]">
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
                <div className="bg-white_A700 flex items-start justify-start p-[124px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[24px] items-center justify-start mb-[118px] md:ml-[0] ml-[281px] md:w-[100%] w-[30%]">
                    <Img
                      src="images/img_paywithcreditcard.svg"
                      className="h-[224px] w-[224px]"
                      alt="paywithcreditca"
                    />
                    <div className="flex flex-col gap-[14px] items-center justify-start pt-[3px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        eKYC Verification
                      </Text>
                      <Text
                        className="leading-[22.00px] not-italic text-bluegray_900 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Your information has been verified to ensure your
                        payment safely
                      </Text>
                    </div>
                    <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[162px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                      Verify now
                    </Button>
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

export default EKYCBeginPage;

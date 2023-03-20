import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Img, Button } from "components";
import Header from "components/Header";

const EKYCSignaturePage = () => {
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
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[48px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[18px] items-center justify-end md:w-[100%] w-[auto]">
                    <Text
                      className="mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Singature
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="bg-gray_50 border-[2px] border-dashed border-indigo_50 flex items-end justify-end mt-[40px] p-[32px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[65%]">
                    <div className="flex flex-col gap-[36px] justify-start mt-[79px] md:w-[100%] w-[95%]">
                      <Img
                        src="images/img_signatureofka.png"
                        className="h-[236px] md:h-[auto] mr-[47px] object-cover w-[92%]"
                        alt="signatureofka"
                      />
                      <div className="flex flex-row gap-[24px] items-center justify-end ml-[auto] md:w-[100%] w-[23%]">
                        <Button className="bg-white_A700 flex h-[54px] items-center justify-center p-[15px] rounded-[50%] shadow-bs w-[54px]">
                          <Img
                            src="images/img_edit.svg"
                            className="h-[24px]"
                            alt="edit"
                          />
                        </Button>
                        <div className="bg-white_A700 h-[54px] rounded-[50%] shadow-bs w-[54px]"></div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[270px] mt-[50px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                    Finish process
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCSignaturePage;

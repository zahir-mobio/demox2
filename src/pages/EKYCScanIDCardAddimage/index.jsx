import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, SelectBox, Img, Button } from "components";
import Header from "components/Header";

const EKYCScanIDCardAddimagePage = () => {
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
                <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col items-center justify-start my-[16px] w-[100%]">
                    <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Scan ID Card
                      </Text>
                      <Text
                        className="leading-[22.00px] not-italic text-bluegray_400 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Please ensure that the image that you uploaded is clear
                        and not blurred
                      </Text>
                    </div>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal mt-[24px] not-italic pl-[20px] sm:pr-[20px] pr-[24px] py-[17px] rounded-[4px] text-[16px] text-bluegray_800 text-left sm:w-[100%] w-[31%]"
                      placeholderClassName="text-bluegray_800"
                      name="group_One"
                      placeholder="ID Card"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[6px] mr-[0] w-[11px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between mt-[40px] w-[100%]">
                      <div className="border-[2px] border-dashed border-indigo_50 flex md:flex-1 items-center justify-start p-[34px] sm:px-[20px] rounded-[4px] md:w-[100%] w-[50%]">
                        <div className="h-[291px] relative w-[100%]">
                          <Img
                            src="images/img_image5.png"
                            className="h-[291px] m-[auto] object-cover rounded-[16px] w-[100%]"
                            alt="imageFive"
                          />
                          <div className="absolute bg-white_A700 bottom-[10%] h-[54px] right-[6%] rounded-[50%] shadow-bs w-[54px]"></div>
                        </div>
                      </div>
                      <div className="h-[359px] relative md:w-[100%] w-[50%]">
                        <Img
                          src="images/img_image6.png"
                          className="h-[291px] m-[auto] object-cover rounded-[16px] w-[86%]"
                          alt="imageSix"
                        />
                        <div className="absolute border-[2px] border-dashed border-indigo_50 flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                          <div className="bg-white_A700 h-[54px] mt-[177px] rounded-[50%] shadow-bs w-[54px]"></div>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[270px] mt-[58px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                      Next Step
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

export default EKYCScanIDCardAddimagePage;

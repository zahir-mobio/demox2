import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Input, CheckBox, Button } from "components";
import Header from "components/Header";

const EKYCConfirmInformationPage = () => {
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
                  <div className="flex flex-col gap-[20px] justify-start md:w-[100%] w-[auto]">
                    <Text
                      className="md:ml-[0] ml-[39px] not-italic text-bluegray_900 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Confirm Information
                    </Text>
                    <Text
                      className="mx-[auto] not-italic text-bluegray_400 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start mt-[32px] md:w-[100%] w-[67%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      ></Text>
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                        className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                        name="group18068"
                        placeholder="Mustermann Galer"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      ></Text>
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                        className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                        name="group18068_One"
                        placeholder="L01X00T47"
                      ></Input>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        ></Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="gender_One"
                          placeholder="Female"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start pt-[3px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        ></Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="group18068_Two"
                          placeholder="Deitsch"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        ></Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="group18068_Three"
                          placeholder="12.08.1983"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        ></Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="group18068_Four"
                          placeholder="Berlin"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <CheckBox
                    className="font-normal mt-[48px] not-italic text-[14px] text-bluegray_400 text-left"
                    inputClassName="mr-[5px]"
                    name="remember"
                    id="remember"
                    label='By clicking button “Confirm", I take all responsibility of the information above'
                  ></CheckBox>
                  <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[270px] mt-[39px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                    Confirm
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

export default EKYCConfirmInformationPage;

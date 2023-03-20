import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, List, Img, Button } from "components";
import Header from "components/Header";

const EKYCIntroductionStepThreePage = () => {
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
                <div className="bg-white_A700 flex flex-col gap-[58px] items-center justify-start p-[81px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <Text
                    className="not-italic text-bluegray_900 text-center w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Introduction
                  </Text>
                  <div className="flex items-center justify-start mb-[58px] md:w-[100%] w-[46%]">
                    <List
                      className="flex-col gap-[20px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="border-[1px] border-indigo_50 border-solid flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[28px] w-[28px]"
                            alt="laptop"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-end w-[auto]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 1:
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Scan ID Card
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="border-[1px] border-indigo_50 border-solid flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                          <Img
                            src="images/img_user_bluegray_900.svg"
                            className="h-[28px] w-[28px]"
                            alt="user"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-end w-[auto]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 2:
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Scan Face
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                        <div className="bg-white_A700 flex flex-row gap-[20px] items-center justify-start ml-[7px] rounded-[4px] w-[auto]">
                          <Img
                            src="images/img_file_deep_orange_300.svg"
                            className="h-[30px] w-[auto]"
                            alt="file"
                          />
                          <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 3:
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Confirm Information
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-white_A700 flex h-[24px] items-center justify-center mr-[7px] my-[13px] p-[4px] rounded-[4px] w-[24px]">
                          <Img
                            src="images/img_arrowright_bluegray_100.svg"
                            className="h-[16px]"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                      <div className="border-[1px] border-indigo_50 border-solid flex flex-1 flex-row items-center justify-between my-[0] p-[25px] sm:px-[20px] rounded-[4px] shadow-bs2 w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-center ml-[7px] w-[auto]">
                          <Img
                            src="images/img_reply.svg"
                            className="h-[28px] w-[28px]"
                            alt="reply"
                          />
                          <div className="flex flex-col gap-[10px] items-start justify-start pr-[2px] pt-[2px] w-[auto]">
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Bước 4:
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Signature
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock.svg"
                          className="h-[24px] mr-[7px] w-[24px]"
                          alt="lock"
                        />
                      </div>
                    </List>
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

export default EKYCIntroductionStepThreePage;

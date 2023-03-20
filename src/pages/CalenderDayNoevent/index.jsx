import React from "react";

import Sidebar1 from "components/Sidebar1";
import { Line, Text, Button, Img, List } from "components";
import Header from "components/Header";

const CalenderDayNoeventPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar1 className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[950px] mb-[74px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[33px] items-start justify-start mb-[75px] mt-[9px] w-[100%]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Calendar
                </Text>
                <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                    <div className="flex flex-col items-start justify-start mb-[8px] w-[100%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <Text
                          className="leading-[22.00px] not-italic text-bluegray_400 text-left w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Click in the calendar to create event
                        </Text>
                        <Button
                          className="bg-deep_orange_300 cursor-pointer flex items-center justify-center min-w-[209px] px-[33px] py-[14px] rounded-[24px] w-[auto]"
                          rightIcon={
                            <Img
                              src="images/img_plus_white_a700.svg"
                              className="ml-[6px]"
                              alt="plus"
                            />
                          }
                        >
                          <div className="font-normal not-italic sm:px-[20px] text-[14px] text-center text-white_A700">
                            Create new event
                          </div>
                        </Button>
                      </div>
                      <List
                        className="flex-col gap-[20px] grid mt-[32px] w-[62%]"
                        orientation="vertical"
                      >
                        <div className="flex items-center justify-start md:w-[100%] w-[77%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                            <div className="bg-green_700 h-[8px] my-[7px] rounded-[50%] w-[8px]"></div>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              New Event
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start pr-[3px] pt-[3px] w-[100%]">
                          <div className="bg-indigo_400 h-[8px] mb-[8px] mt-[5px] rounded-[50%] w-[8px]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            My Event Only
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start pr-[3px] pt-[3px] md:w-[100%] w-[64%]">
                          <div className="bg-amber_300 h-[8px] mb-[8px] mt-[4px] rounded-[50%] w-[8px]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Meeting
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[42%]">
                          <div className="bg-red_600 h-[8px] my-[7px] rounded-[50%] w-[8px]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Error
                          </Text>
                        </div>
                      </List>
                      <Line className="bg-indigo_50 h-[1px] mt-[32px] w-[100%]" />
                      <Text
                        className="mt-[33px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Team members
                      </Text>
                      <List
                        className="flex-col gap-[20px] grid items-center mt-[34px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                          <Img
                            src="images/img__22x18.png"
                            className="h-[22px] md:h-[auto] object-cover w-[9%]"
                            alt="Seven"
                          />
                          <Text
                            className="font-normal ml-[8px] not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Avo
                          </Text>
                          <Button className="bg-gray_100 cursor-pointer font-normal min-w-[102px] ml-[37px] not-italic py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Lead design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between w-[100%]">
                          <Img
                            src="images/img__1.png"
                            className="h-[22px] md:h-[auto] object-cover w-[auto]"
                            alt="Eight"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nhun
                          </Text>
                          <Button className="bg-gray_100 cursor-pointer font-normal min-w-[102px] not-italic py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                          <Img
                            src="images/img__2.png"
                            className="h-[22px] md:h-[auto] object-cover w-[9%]"
                            alt="Nine"
                          />
                          <Text
                            className="font-normal ml-[8px] not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Riri
                          </Text>
                          <Button className="bg-gray_100 cursor-pointer font-normal min-w-[102px] ml-[42px] not-italic py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                          <Img
                            src="images/img__3.png"
                            className="h-[22px] md:h-[auto] object-cover w-[9%]"
                            alt="Ten"
                          />
                          <Text
                            className="font-normal ml-[8px] not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Juki
                          </Text>
                          <Button className="bg-gray_100 cursor-pointer font-normal min-w-[102px] ml-[35px] not-italic py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                          <Img
                            src="images/img__4.png"
                            className="h-[22px] md:h-[auto] object-cover w-[9%]"
                            alt="Eleven"
                          />
                          <Text
                            className="font-normal ml-[8px] not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nobi
                          </Text>
                          <Button className="bg-gray_100 cursor-pointer font-normal min-w-[102px] ml-[30px] not-italic py-[6px] rounded-[4px] text-[12px] text-center text-indigo_400 w-[auto]">
                            Product design
                          </Button>
                        </div>
                      </List>
                      <Button
                        className="bg-transparent cursor-pointer flex items-center justify-center min-w-[146px] mt-[32px] pr-[15px] w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_plus_deep_orange_300.svg"
                            className="mr-[8px]"
                            alt="plus"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[16px] text-deep_orange_300 text-left">
                          Add member
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[75%]">
                    <div className="flex flex-col gap-[30px] items-center justify-start mb-[6px] md:w-[100%] w-[99%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-row items-end justify-between sm:w-[100%] w-[42%]">
                          <Text
                            className="mb-[2px] mt-[7px] not-italic text-bluegray_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          ></Text>
                          <Img
                            src="images/img_checkmark_gray_50.svg"
                            className="h-[40px] w-[auto]"
                            alt="checkmark"
                          />
                        </div>
                        <div className="flex sm:flex-1 flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[31%]">
                          <Button className="bg-bluegray_900 cursor-pointer font-normal h-[40px] not-italic px-[16px] py-[9px] rounded-[20px] text-[14px] text-center text-white_A700 w-[75px]">
                            Day
                          </Button>
                          <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[40px] not-italic px-[16px] py-[9px] rounded-[20px] text-[14px] text-bluegray_800 text-center w-[75px]">
                            Week
                          </Button>
                          <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[40px] not-italic px-[16px] py-[9px] rounded-[20px] text-[14px] text-bluegray_800 text-center w-[75px]">
                            Month
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="border-[1px] border-indigo_50 border-solid flex flex-col items-center justify-start py-[15px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Friday
                          </Text>
                          <Line className="bg-indigo_50 h-[1px] mt-[13px] w-[100%]" />
                          <Img
                            src="images/img_searchingdata1.svg"
                            className="h-[200px] mt-[76px] w-[200px]"
                            alt="searchingdataOne"
                          />
                          <Text
                            className="font-normal mb-[262px] mt-[18px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          ></Text>
                        </div>
                      </div>
                    </div>
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

export default CalenderDayNoeventPage;

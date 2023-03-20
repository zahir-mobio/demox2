import React from "react";

import { Img, Text, Line, Button, List } from "components";
import Header from "components/Header";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[240px]">
            <div className="flex flex-col gap-[36px] items-center justify-start mb-[673px] ml-[28px] mr-[54px] mt-[36px] w-[66%]">
              <Img
                src="images/img_menu.svg"
                className="h-[28px] w-[auto]"
                alt="menu"
              />
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_grid_deep_orange_300.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[65%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] w-[20px]"
                      alt="sort"
                    />
                    <Text
                      className="mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-normal h-[24px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[62%]">
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[45%]">
                  <Img
                    src="images/img_trash_bluegray_400.svg"
                    className="h-[20px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div className="flex items-end justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[auto]">
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-start mt-[30px] md:w-[100%] w-[60%]">
                  <div className="bg-white_A700 h-[26px] w-[26px]"></div>
                  <Text
                    className="my-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <Line className="bg-indigo_50 h-[1542px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-start sm:pl-[20px] pl-[23px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] w-[74%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-center w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[25%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[48px] rounded-[4px] w-[48px]"
                        alt="clock"
                      />
                      <Button
                        className="bg-deep_orange_300 cursor-pointer flex items-center justify-center min-w-[148px] px-[17px] py-[14px] rounded-[4px] w-[auto]"
                        rightIcon={
                          <Img
                            src="images/img_plus_white_a700.svg"
                            className="ml-[35px]"
                            alt="plus"
                          />
                        }
                      >
                        <div className="font-normal not-italic text-[14px] text-center text-white_A700">
                          Add task
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[44%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="gap-[20px] grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                            <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                                <div className="bg-gray_101 h-[48px] rounded-[4px] w-[48px]"></div>
                                <div className="flex flex-col gap-[8px] items-center justify-end pr-[2px] py-[2px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    50+
                                  </Text>
                                  <Text
                                    className="not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Available Tasks
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                                <div className="bg-yellow_50 h-[48px] rounded-[4px] w-[48px]"></div>
                                <div className="flex flex-col gap-[8px] items-center justify-end pr-[2px] py-[2px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    20
                                  </Text>
                                  <Text
                                    className="not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Obsolete Tasks
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                                <Button className="bg-gray_103 flex h-[48px] items-center justify-center p-[14px] rounded-[4px] w-[48px]">
                                  <Img
                                    src="images/img_folder_red_600.svg"
                                    className=""
                                    alt="folder"
                                  />
                                </Button>
                                <div className="flex flex-col gap-[10px] justify-end w-[100%]">
                                  <Text
                                    className="font-normal md:ml-[0] ml-[36px] mr-[47px] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    23
                                  </Text>
                                  <Text
                                    className="mr-[31px] not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    In Progress
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                              <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] w-[98%]">
                                <Img
                                  src="images/img_signal_gray_52.svg"
                                  className="h-[48px] rounded-[4px] w-[48px]"
                                  alt="signal"
                                />
                                <div className="flex flex-col gap-[9px] justify-end pr-[2px] py-[2px] w-[100%]">
                                  <Text
                                    className="font-normal md:ml-[0] ml-[36px] mr-[46px] not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    35
                                  </Text>
                                  <Text
                                    className="mr-[28px] not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Done Tasks
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[55%]">
                        <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] w-[97%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Statistics
                            </Text>
                            <div className="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex items-end justify-end p-[10px] rounded-[4px] shadow-bs w-[auto]">
                              <div className="flex items-center justify-start mr-[6px] mt-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_800 text-center w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  13 Aug - 20 Aug
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-start mt-[28px] w-[100%]">
                            <div className="flex flex-col gap-[20px] items-end justify-start w-[100%]">
                              <div className="flex flex-row gap-[31px] items-center justify-between mr-[3px] w-[100%]">
                                <div className="flex flex-col gap-[25px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    800
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    600
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    400
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="font-normal md:ml-[0] ml-[15px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    0
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_frame_gray_50.svg"
                                  className="h-[176px] w-[auto]"
                                  alt="frame"
                                />
                              </div>
                              <div className="flex items-center justify-start md:w-[100%] w-[90%]">
                                <div className="flex flex-row gap-[34px] items-start justify-between px-[2px] w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Mon
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Tue
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Wed
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Thu
                                  </Text>
                                  <Text
                                    className="font-normal h-[15px] not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Fri
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Sat
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                                    variant="body1"
                                  >
                                    Sun
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[24px] items-center justify-center mt-[32px] md:w-[100%] w-[38%]">
                            <div className="flex items-center justify-start w-[38%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                <div className="bg-amber_300 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Income
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[47%]">
                              <div className="bg-indigo_400 h-[6px] my-[4px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                Expenses
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Projects
                            </Text>
                            <Img
                              src="images/img_user_bluegray_400.svg"
                              className="h-[32px] w-[32px]"
                              alt="user_One"
                            />
                          </div>
                          <div className="h-[190px] md:h-[218px] mt-[28px] relative w-[190px]">
                            <div className="h-[190px] m-[auto] w-[190px]">
                              <CircularProgressbar
                                className="!w-[190px] border-solid h-[190px] m-[auto] overflow-visible"
                                value={17}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(-23deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                              <CircularProgressbar
                                className="!w-[190px] absolute border-solid h-[190px] inset-[0] justify-center m-[auto] overflow-visible"
                                value={24}
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(51deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[31%] w-[auto]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                230+
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[5px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Projects
                              </Text>
                            </div>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[32px] grid grid-cols-3 justify-center mt-[24px] w-[72%]"
                            orientation="horizontal"
                          >
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                                <div className="bg-green_700 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                                <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    100
                                  </Text>
                                  <Text
                                    className="font-normal mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    High
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                                <div className="bg-indigo_400 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                                <div className="flex flex-col items-start justify-start pt-[2px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    30
                                  </Text>
                                  <Text
                                    className="font-normal mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Low
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                                <div className="bg-amber_300 h-[6px] my-[17px] rounded-[50%] w-[6px]"></div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    100
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Medium
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[55%]">
                        <div className="flex flex-col gap-[32px] items-center justify-start mb-[6px] md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Active tasks
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-between w-[60%]">
                              <Button className="bg-bluegray_900 cursor-pointer font-normal min-w-[75px] not-italic py-[11px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
                                Day
                              </Button>
                              <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal min-w-[75px] not-italic py-[11px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                                Week
                              </Button>
                              <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal min-w-[75px] not-italic py-[11px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                                Month
                              </Button>
                            </div>
                          </div>
                          <List
                            className="flex-col gap-[20px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_computer.svg"
                                className="h-[24px] w-[24px]"
                                alt="computer"
                              />
                              <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  ACKERMAN_LHN
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start pt-[3px] md:w-[100%] w-[90%]">
                                  <Line className="bg-red_600 h-[16px] mb-[4px] w-[4px]" />
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_checkmark_deep_orange_300_24x24.svg"
                                className="h-[24px] w-[24px]"
                                alt="checkmark"
                              />
                              <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  JOHNSON
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start pt-[3px] md:w-[100%] w-[75%]">
                                  <Line className="bg-deep_orange_300 h-[16px] mb-[4px] w-[4px]" />
                                  <Text
                                    className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Create user flow for Data Projects
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_computer.svg"
                                className="h-[24px] w-[24px]"
                                alt="computer"
                              />
                              <div className="flex sm:flex-1 flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  UTILLIA
                                </Text>
                                <div className="flex flex-row gap-[8px] items-center justify-start pr-[13px] w-[100%]">
                                  <Line className="bg-indigo_400 h-[16px] my-[16px] w-[4px]" />
                                  <Text
                                    className="sm:flex-1 font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[97%]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Gather to discuss about new project deriving
                                    from Avocado
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start p-[30px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start my-[2px] w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Posting Tasks
                          </Text>
                          <Img
                            src="images/img_user_bluegray_400.svg"
                            className="h-[32px] w-[32px]"
                            alt="user_Two"
                          />
                        </div>
                        <a
                          className="font-normal mt-[7px] not-italic text-[14px] text-bluegray_900 text-left underline w-[auto]"
                          href="javascript:"
                        >
                          Crucial tasks/ Urgent tasks/ Normal tasks
                        </a>
                        <div className="sm:h-[333px] h-[401px] md:h-[486px] mt-[30px] relative w-[100%]">
                          <div className="absolute bg-gray_50 flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] top-[0] w-[100%]">
                            <div className="flex h-[48px] justify-end relative md:w-[100%] w-[13%]">
                              <Text
                                className="mb-[12px] ml-[auto] mr-[25px] mt-[auto] not-italic text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Time
                              </Text>
                              <div className="absolute bg-deep_orange_300 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[15px] w-[100%]">
                                <Text
                                  className="not-italic text-left text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Time
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-evenly md:w-[100%] w-[88%]">
                              <div className="flex items-center justify-start p-[15px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Mon 10
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[15px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Tue 11
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[15px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Wed 12
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[15px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Thu 13
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[15px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Fri 14
                                </Text>
                              </div>
                              <div className="flex items-center justify-start p-[15px] md:w-[100%] w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Sat 15
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[7%] flex flex-col items-start justify-start left-[2%] w-[auto]">
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              09 am
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[33px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              10 am
                            </Text>
                            <Text
                              className="font-normal mt-[33px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              11 am
                            </Text>
                            <Text
                              className="font-normal mt-[34px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              12 pm
                            </Text>
                            <Text
                              className="font-normal mt-[33px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              01 pm
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[3px] mt-[33px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              02 pm
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[2px] mt-[33px] not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body1"
                            >
                              03 pm
                            </Text>
                          </div>
                          <List
                            className="absolute bg-cover bg-no-repeat flex-col gap-[10px] grid h-[401px] inset-y-[0] my-[auto] p-[11px] right-[0] w-[89%]"
                            style={{
                              backgroundImage: "url('images/img_group109.svg')",
                            }}
                            orientation="vertical"
                          >
                            <div className="bg-white_A700 flex items-start justify-start ml-[40px] mr-[479px] my-[0] rounded-[4px] shadow-bs md:w-[100%] w-[25%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[72%]">
                                <Line className="bg-green_700 h-[171px] w-[4px]" />
                                <div className="flex flex-col items-start justify-start w-[84%]">
                                  <Button className="bg-deep_orange_300 cursor-pointer font-poppins font-semibold min-w-[93px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 w-[auto]">
                                    #Data projects
                                  </Button>
                                  <Text
                                    className="font-inter mt-[11px] not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Revamp UI, UX
                                  </Text>
                                  <div className="h-[24px] md:h-[86px] mt-[62px] relative w-[37%]">
                                    <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[24px]">
                                      <Img
                                        src="images/img_robototoyfacefinal2.png"
                                        className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                        alt="robototoyfacefi"
                                      />
                                    </div>
                                    <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[24px]">
                                      <Img
                                        src="images/img_fidenza978toyface_24x24.png"
                                        className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                        alt="fidenza978toyfa"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex items-start justify-start ml-[297px] mr-[290px] my-[0] rounded-[4px] shadow-bs md:w-[100%] w-[15%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[75%]">
                                <Line className="bg-indigo_400 h-[137px] w-[4px]" />
                                <div className="flex flex-col items-start justify-start w-[73%]">
                                  <Button className="bg-indigo_400 cursor-pointer font-poppins font-semibold min-w-[49px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 w-[auto]">
                                    #2011
                                  </Button>
                                  <Text
                                    className="font-inter mt-[11px] not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Meeting
                                  </Text>
                                  <div className="h-[24px] md:h-[52px] mt-[28px] relative w-[67%]">
                                    <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[24px]">
                                      <Img
                                        src="images/img_robototoyfacefinal2.png"
                                        className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                        alt="robototoyfacefi"
                                      />
                                    </div>
                                    <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[24px]">
                                      <Img
                                        src="images/img_fidenza978toyface_24x24.png"
                                        className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                        alt="fidenza978toyfa"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[16px] rounded-[4px] shadow-bs md:w-[100%] w-[26%]">
                  <div className="flex flex-col items-center justify-start mb-[27px] md:w-[100%] w-[89%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Calendar
                      </Text>
                      <Img
                        src="images/img_user_bluegray_400.svg"
                        className="h-[32px] w-[32px]"
                        alt="user_Three"
                      />
                    </div>
                    <div className="flex flex-col font-inter gap-[22px] items-center justify-start mt-[15px] w-[100%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Button className="bg-gray_50 flex h-[40px] items-center justify-center p-[13px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_buttonprimary_black_900.svg"
                            className="h-[14px]"
                            alt="buttonprimary"
                          />
                        </Button>
                        <Text
                          className="mt-[12px] not-italic text-bluegray_800 text-center w-[auto]"
                          as="h6"
                          variant="h6"
                        ></Text>
                        <Button className="bg-gray_50 flex h-[40px] items-center justify-center p-[13px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_play_black_900.svg"
                            className=""
                            alt="play"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Mo
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Tu
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            We
                          </Text>
                          <Text
                            className="h-[17px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Th
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Fr
                          </Text>
                          <Text
                            className="h-[17px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Sa
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Su
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <List
                            className="flex-col gap-[16px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between mr-[2px] my-[0] w-[100%]">
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                28
                              </Text>
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                29
                              </Text>
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                30
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                1
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                2
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                3
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                4
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between mr-[2px] my-[0] pl-[4px] w-[100%]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                5
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                6
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                7
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                8
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                9
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                10
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                11
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between my-[0] pl-[2px] w-[100%]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                12
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                13
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                14
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                15
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                16
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                17
                              </Text>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                18
                              </Text>
                            </div>
                          </List>
                          <div className="flex flex-row items-center justify-between mt-[6px] pl-[3px] w-[100%]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              19
                            </Text>
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              20
                            </Text>
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              21
                            </Text>
                            <Text
                              className="h-[17px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              22
                            </Text>
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23
                            </Text>
                            <div className="md:h-[37px] h-[38px] relative w-[38px]">
                              <div className="bg-deep_orange_300 h-[32px] m-[auto] rounded-[50%] w-[32px]"></div>
                              <div className="absolute bg-gray_101 flex flex-col h-[100%] inset-[0] items-center justify-center m-[auto] p-[3px] rounded-[50%] w-[38px]">
                                <Text
                                  className="mt-[7px] not-italic text-deep_orange_300 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  24
                                </Text>
                                <div className="bg-deep_orange_300 h-[4px] mt-[3px] rounded-[50%] w-[4px]"></div>
                              </div>
                            </div>
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              25
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[6px] md:w-[100%] w-[74%]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              26
                            </Text>
                            <Text
                              className="h-[17px] ml-[25px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              27
                            </Text>
                            <Text
                              className="ml-[23px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              28
                            </Text>
                            <Text
                              className="ml-[20px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              29
                            </Text>
                            <Text
                              className="ml-[14px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              30
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row font-poppins items-start justify-between mt-[52px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_900 text-center w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Recent activities
                      </Text>
                      <Img
                        src="images/img_user_bluegray_400.svg"
                        className="h-[32px] w-[32px]"
                        alt="user_Four"
                      />
                    </div>
                    <List
                      className="flex-col font-inter gap-[16px] grid items-center mt-[32px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-col gap-[25px] items-start justify-start pt-[3px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col gap-[10px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[76%]">
                              <Line className="bg-red_600 h-[47px] w-[4px]" />
                              <Text
                                className="font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[76%]">
                              <Line className="bg-indigo_400 h-[47px] w-[4px]" />
                              <Text
                                className="font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                              <Line className="bg-green_700 h-[47px] w-[4px]" />
                              <Text
                                className="sm:flex-1 font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[95%]"
                                as="h5"
                                variant="h5"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[76%]">
                              <Line className="bg-indigo_400 h-[47px] w-[4px]" />
                              <Text
                                className="font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                      <div className="flex flex-1 flex-col gap-[25px] items-start justify-start pt-[3px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="flex-col gap-[10px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[79%]">
                              <Line className="bg-red_600 h-[24px] w-[4px]" />
                              <Text
                                className="font-normal mt-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Daily meeting with tem
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[76%]">
                              <Line className="bg-indigo_400 h-[47px] w-[4px]" />
                              <Text
                                className="font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Revision design system
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[76%]">
                              <Line className="bg-green_700 h-[47px] w-[4px]" />
                              <Text
                                className="font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog authentication
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[67%]">
                              <Line className="bg-indigo_400 h-[22px] w-[4px]" />
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Pitching with client
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[76%]">
                              <Line className="bg-red_600 h-[47px] w-[4px]" />
                              <Text
                                className="font-normal leading-[24.00px] not-italic text-bluegray_900 text-left sm:w-[100%] w-[94%]"
                                as="h5"
                                variant="h5"
                              >
                                Year end party and plan for 2022
                              </Text>
                            </div>
                          </div>
                        </List>
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

export default DashboardTwoPage;

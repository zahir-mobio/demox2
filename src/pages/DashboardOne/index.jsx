import React from "react";

import { Img, Text, Line, SelectBox, Button, List } from "components";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <Img
              src="images/img_menu.svg"
              className="h-[28px] md:ml-[0] ml-[66px] mr-[87px] mt-[36px] w-[auto]"
              alt="menu"
            />
            <div className="flex flex-col items-start justify-start mb-[673px] md:ml-[0] ml-[29px] mr-[54px] mt-[36px] w-[66%]">
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
              <div
                className="common-pointer flex flex-row gap-[34px] items-center justify-between md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[99%]"
                onClick={() => navigate("/conversation")}
              >
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
              <div
                className="common-pointer flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[38%]"
                onClick={() => navigate("/filemanagementdefault")}
              >
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
              <div
                className="common-pointer flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[62%]"
                onClick={() => navigate("/calendermonth")}
              >
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
          </aside>
          <Line className="bg-indigo_50 h-[1175px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-start p-[11px] w-[100%]">
              <div className="flex flex-col gap-[19px] items-center justify-start my-[13px] md:w-[100%] w-[99%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-center w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[17%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[48px] rounded-[4px] w-[auto]"
                        alt="clock"
                      />
                      <SelectBox
                        className="bg-white_A700 font-normal not-italic px-[16px] py-[14px] rounded-[4px] text-[14px] text-bluegray_800 text-center sm:w-[100%] w-[70%]"
                        placeholderClassName="text-bluegray_800"
                        name="dropdown"
                        placeholder="Last week"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_bluegray_900.svg"
                            className="h-[20px] mr-[0] w-[20px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                  <div className="font-inter gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[24px] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between py-[2px] md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group_green_700.svg"
                          className="h-[26px] w-[auto]"
                          alt="group_One"
                        />
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[7px] items-start justify-between w-[100%]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="flex items-center justify-start mt-[4px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="bg-green_700_63 flex flex-row items-start justify-evenly rounded-[4px] w-[100%]">
                                    <Img
                                      src="images/img_arrowup_green_700.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="arrowup"
                                    />
                                    <Text
                                      className="not-italic text-green_700 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      0.2%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start md:w-[100%] w-[59%]">
                              <div className="bg-indigo_401 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total income
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group_red_600.svg"
                          className="h-[26px] w-[auto]"
                          alt="group_Two"
                        />
                        <div className="flex flex-row items-start justify-evenly w-[auto]">
                          <div className="flex items-center justify-start w-[67%]">
                            <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="flex flex-row items-start justify-evenly w-[100%]">
                                <div className="bg-indigo_401 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Total Expenses
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-start mt-[4px] w-[32%]">
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="bg-red_600_63 flex flex-row items-start justify-evenly rounded-[4px] w-[100%]">
                                <Img
                                  src="images/img_arrowdown.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="arrowdown"
                                />
                                <Text
                                  className="not-italic text-left text-red_600 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  0.2%
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-row items-center justify-between py-[2px] md:w-[100%] w-[87%]">
                        <Img
                          src="images/img_group_green_700.svg"
                          className="h-[26px] w-[auto]"
                          alt="group_Three"
                        />
                        <div className="flex items-center justify-start w-[auto]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[7px] items-start justify-between w-[100%]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                $10.000
                              </Text>
                              <div className="flex items-center justify-start mt-[4px] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="bg-green_700_63 flex flex-row items-start justify-evenly rounded-[4px] w-[100%]">
                                    <Img
                                      src="images/img_arrowup_green_700.svg"
                                      className="h-[16px] w-[16px]"
                                      alt="arrowup_One"
                                    />
                                    <Text
                                      className="not-italic text-green_700 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      0.2%
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start md:w-[100%] w-[64%]">
                              <div className="bg-indigo_401 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total Revenue
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[19px] items-center justify-between mt-[20px] w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[67%]">
                      <div className="bg-white_A700 flex items-center justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                        <div className="flex flex-col gap-[31px] items-center justify-start mb-[14px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
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
                          <div className="flex md:flex-col flex-row md:gap-[44px] items-start justify-between w-[100%]">
                            <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[11%]">
                              <div className="flex items-center justify-start md:w-[100%] w-[82%]">
                                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                  <div className="bg-indigo_400 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                  <Text
                                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Income
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                                <div className="bg-amber_300 h-[6px] my-[4px] rounded-[50%] w-[6px]"></div>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Expenses
                                </Text>
                              </div>
                            </div>
                            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[84%]">
                              <div className="flex flex-col gap-[15px] items-end justify-start w-[100%]">
                                <div className="flex sm:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                                  <div className="flex sm:flex-1 flex-col items-end justify-start sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      1,400
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      1,200
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      1,000
                                    </Text>
                                    <Text
                                      className="font-normal mt-[15px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      800
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      600
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      400
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      200
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-right w-[auto]"
                                      variant="body1"
                                    >
                                      0
                                    </Text>
                                  </div>
                                  <div
                                    className="bg-cover bg-no-repeat font-poppins md:h-[206px] h-[227px] pt-[17px] px-[17px] relative sm:w-[100%] w-[91%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group59.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_frame_indigo_400_206x450.svg"
                                      className="absolute bottom-[0] h-[206px] inset-x-[0] mx-[auto] w-[auto]"
                                      alt="frame"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat md:h-[46px] h-[84px] left-[7%] p-[13px] shadow-bs2 top-[19%] w-[30%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group_bluegray_100_84x154.svg')",
                                      }}
                                    >
                                      <div className="absolute flex flex-row gap-[8px] items-center justify-center left-[15%] top-[15%] w-[32%]">
                                        <div className="bg-indigo_400 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                        <Text
                                          className="font-semibold text-bluegray_900 text-left w-[auto]"
                                          variant="body1"
                                        >
                                          200.0
                                        </Text>
                                      </div>
                                      <div className="absolute flex items-center justify-start left-[15%] top-[18%] w-[75%]">
                                        <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                                          <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] md:w-[100%] w-[43%]">
                                            <div className="bg-amber_300 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                            <Text
                                              className="font-semibold text-bluegray_900 text-left w-[auto]"
                                              variant="body1"
                                            >
                                              2,000
                                            </Text>
                                          </div>
                                          <Text
                                            className="mr-[20px] text-bluegray_400 text-left w-[auto]"
                                            variant="body2"
                                          >
                                            21 September, 2021
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-start md:w-[100%] w-[91%]">
                                  <div className="flex flex-row items-start justify-between sm:px-[20px] px-[36px] w-[100%]">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[211px] h-[410px] relative md:w-[100%] w-[33%]">
                      <div className="absolute md:h-[100px] h-[116px] inset-x-[0] mx-[auto] top-[23%] w-[100%]">
                        <Img
                          src="images/img_ellipse.svg"
                          className="absolute h-[46px] right-[0] top-[0] w-[auto]"
                          alt="ellipse_One"
                        />
                        <Img
                          src="images/img_vector_white_a700.svg"
                          className="absolute bottom-[0] h-[100px] inset-x-[0] mx-[auto] w-[auto]"
                          alt="vector"
                        />
                      </div>
                      <Img
                        src="images/img_group4.svg"
                        className="absolute h-[211px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                        alt="groupFour"
                      />
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[198px] inset-x-[0] items-start justify-end mx-[auto] p-[24px] sm:px-[20px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group3.svg')",
                        }}
                      >
                        <div className="flex flex-col gap-[20px] items-start justify-start md:ml-[0] ml-[7px] mt-[3px] md:w-[100%] w-[76%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Subcrible us
                            </Text>
                            <Text
                              className="font-normal leading-[24.00px] not-italic text-bluegray_400 text-left w-[100%]"
                              as="h5"
                              variant="h5"
                            >
                              To make friend with others in our community
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                            <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[149px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                              Subcrible now
                            </Button>
                            <Button className="bg-gray_50 cursor-pointer font-normal min-w-[78px] not-italic py-[15px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                              skip
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row font-inter gap-[31px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 items-center justify-start pr-[20px] py-[20px] md:w-[100%] w-[66%]">
                    <div className="flex flex-col gap-[16px] justify-start my-[12px] w-[100%]">
                      <div className="flex flex-col gap-[28px] items-start justify-start md:ml-[0] ml-[44px] md:w-[100%] w-[95%]">
                        <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            My card
                          </Text>
                          <Img
                            src="images/img_user_bluegray_400.svg"
                            className="h-[32px] w-[32px]"
                            alt="user_One"
                          />
                        </div>
                        <SelectBox
                          className="border-[1px] border-indigo_50 border-solid font-normal not-italic px-[16px] py-[9px] rounded-[4px] text-[14px] text-bluegray_800 text-center sm:w-[100%] w-[44%]"
                          placeholderClassName="text-bluegray_800"
                          name="language"
                          placeholder="1234 **** 4567 8901 "
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_file_gray_300.svg"
                                className="h-[30px] mr-[8px] w-[30px]"
                                alt="file"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="h-[20px] mr-[0] w-[20px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <div className="flex mr-[12px] relative md:w-[100%] w-[99%]">
                        <div className="md:h-[176px] sm:h-[186px] h-[248px] my-[auto] sm:w-[100%] w-[60%]">
                          <Button
                            className="bg-white_A700 bottom-[0] cursor-pointer flex items-center justify-center left-[10%] min-w-[301px] px-[35px] py-[14px] rounded-[4px] w-[auto]"
                            rightIcon={
                              <Img
                                src="images/img_plus_deep_orange_300.svg"
                                className="ml-[13px] left-[3%] absolute"
                                alt="plus"
                              />
                            }
                          >
                            <div className="font-normal not-italic sm:px-[20px] text-[14px] text-center text-deep_orange_300">
                              Add new card
                            </div>
                          </Button>
                          <div className="absolute md:h-[176px] sm:h-[186px] h-[240px] inset-[0] justify-center m-[auto] w-[100%]">
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col md:gap-[40px] gap-[99px] h-[189px] justify-start left-[8%] p-[18px] rounded-[4px] top-[5%] w-[72%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group93.svg')",
                              }}
                            >
                              <Img
                                src="images/img_group.svg"
                                className="h-[11px] md:ml-[0] ml-[232px] w-[auto]"
                                alt="group_Four"
                              />
                              <Text
                                className="font-normal mb-[20px] md:ml-[0] ml-[13px] mr-[101px] not-italic text-left text-white_A700 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                1234 **** 4567 8901{" "}
                              </Text>
                            </div>
                            <Img
                              src="images/img_group_83x97.png"
                              className="absolute bottom-[0] h-[132px] left-[0] object-cover w-[auto]"
                              alt="group_Five"
                            />
                            <Img
                              src="images/img_group_176x194.png"
                              className="absolute h-[176px] object-cover right-[0] top-[0] w-[auto]"
                              alt="group_Six"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-[-39.36px] w-[47%] z-[1]">
                          <div className="flex flex-row gap-[91px] items-start justify-start pt-[2px] px-[2px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Card Type
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Visa
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[79px] items-center justify-start mt-[16px] w-[100%]">
                            <Text
                              className="font-normal ml-[2px] not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Card holder
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Utillia
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[16px] w-[100%]">
                            <Text
                              className="font-normal ml-[3px] not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Card number
                            </Text>
                            <Text
                              className="font-normal mr-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              1234 **** 4567 8901{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[114px] items-start justify-start mt-[16px] w-[100%]">
                            <Text
                              className="font-normal mt-[2px] not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Expired
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              21/09
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-[15px] w-[100%]">
                            <Text
                              className="font-normal mt-[2px] not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              CVV
                            </Text>
                            <Text
                              className="font-normal mb-[2px] mr-[136px] not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              ***
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-center justify-start mt-[16px] w-[100%]">
                            <Text
                              className="font-normal ml-[2px] not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Total balance
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $0.0
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-end justify-end pt-[16px] px-[16px] rounded-[4px] shadow-bs md:w-[100%] w-[32%]">
                    <div className="flex flex-col gap-[34px] items-start justify-start mt-[19px] md:w-[100%] w-[96%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Transactions
                      </Text>
                      <div className="flex flex-row gap-[32px] items-start justify-between w-[100%]">
                        <List
                          className="flex-col gap-[8px] grid w-[89%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex items-end justify-start px-[6px] w-[auto]">
                              <div className="flex flex-col gap-[8px] items-start justify-end py-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Ackerman
                                </Text>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex items-end justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-start justify-end py-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Blanker{" "}
                                </Text>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              +$100.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex items-end justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-start justify-end py-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Lee Ri
                                </Text>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-row items-center justify-between my-[0] w-[100%]">
                            <div className="flex items-end justify-start w-[auto]">
                              <div className="flex flex-col gap-[8px] items-start justify-end py-[2px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Jackson
                                </Text>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$10.0
                            </Text>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex items-start justify-start my-[0] w-[100%]">
                            <div className="flex items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[62px] md:w-[100%] w-[61%]">
                              <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Yomaha
                                </Text>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                        <div className="bg-gray_50 flex items-center justify-start mb-[32px] pb-[177px] rounded-[2px] w-[2%]">
                          <Line className="bg-deep_orange_300 h-[134px] w-[4px]" />
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

export default DashboardOnePage;

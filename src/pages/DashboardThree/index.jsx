import React from "react";

import {
  Img,
  Line,
  Text,
  Input,
  SelectBox,
  List,
  ReactTable,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { createColumnHelper } from "@tanstack/react-table";

const DashboardThreePage = () => {
  const tableData1 = React.useRef([
    {
      no: "1",
      customer: "Ackerman",
      date: "12.02.2022",
      amount: "$20.0",
      orderno: "#21033",
      paymenttype: "images/img_user_bluegray_400.svg",
    },
    {
      no: "2",
      customer: "Utillia",
      date: "12.02.2022",
      amount: "$32.0",
      orderno: "#21034",
      paymenttype: "images/img_user_bluegray_400.svg",
    },
  ]);
  const columnHelper1 = createColumnHelper();
  const column1 = [
    columnHelper1.accessor("no", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[3px] pl-[20px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[95px] not-italic pl-[20px] sm:pr-[20px] pr-[35px] text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          No.
        </Text>
      ),
    }),
    columnHelper1.accessor("customer", {
      cell: (info) => (
        <div className="flex flex-row gap-[12px] items-start justify-center pr-[2px] py-[2px]">
          <Img
            src="images/img_robototoyfacefinal2.png"
            className="h-[24px] md:h-[auto] mt-[34px] rounded-[50%] w-[24px]"
            alt="robototoyfacefi"
          />
          <Text
            className="font-normal mr-[64px] mt-[36px] not-italic text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[178px] not-italic text-bluegray_400 text-center"
          as="p"
          variant="h5"
        >
          Customer
        </Text>
      ),
    }),
    columnHelper1.accessor("date", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[3px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[148px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Date
        </Text>
      ),
    }),
    columnHelper1.accessor("amount", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[3px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[132px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Amount
        </Text>
      ),
    }),
    columnHelper1.accessor("orderno", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[3px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[133px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Order No.
        </Text>
      ),
    }),
    columnHelper1.accessor("paymenttype", {
      cell: (info) => (
        <div className="flex flex-row items-start justify-between pr-[2px] py-[2px]">
          <Text
            className="font-normal mt-[36px] not-italic text-bluegray_800 text-left w-[auto]"
            as="p"
            variant="h5"
          >
            Visa Card
          </Text>
          <Img
            src={info?.getValue()}
            className="h-[24px] mr-[18px] mt-[34px] w-[24px]"
            alt="user_Three"
          />
        </div>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[225px] not-italic py-[2px] text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Payment type
        </Text>
      ),
    }),
  ];

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <Img
            src="images/img_menu_white_a700.svg"
            className="h-[1463px] w-[auto]"
            alt="menu"
          />
          <Line className="bg-indigo_50 h-[1463px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-[20px] md:w-[100%] w-[95%]">
            <header className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] my-[10px] w-[97%]">
                <div className="header-row mt-[12px] mb-[10px]">
                  <Text
                    className="not-italic text-bluegray_800 text-center"
                    as="h6"
                    variant="h6"
                  >
                    Welcomback, Team!
                  </Text>
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  wrapClassName="bg-white_A700 border-[1px] border-bluegray_200 border-solid flex sm:hidden md:ml-[0] ml-[306px] pl-[16px] pr-[35px] py-[10px] rounded-[4px] md:w-[100%] w-[33%]"
                  className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:hidden sm:pr-[20px] text-[12px] text-bluegray_400 text-left w-[100%]"
                  name="searchbox"
                  placeholder="Search..."
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer mr-[8px] sm:hidden my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      color="#828fa2"
                      className="cursor-pointer sm:hidden my-[auto]"
                      onClick={() => setInputvalue("")}
                      style={{
                        visibility:
                          inputvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                    />
                  }
                ></Input>
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[259px] w-[24px]"
                  style={{ backgroundImage: "url('images/img_group39.svg')" }}
                >
                  <div className="bg-red_600 h-[8px] mb-[14px] outline outline-[2px] outline-white_A700 rounded-[50%] w-[8px]"></div>
                </div>
                <Text
                  className="font-normal sm:hidden md:ml-[0] ml-[24px] not-italic text-gray_500 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                ></Text>
                <div className="flex h-[40px] sm:hidden items-center justify-start md:ml-[0] ml-[13px] w-[40px]">
                  <Img
                    src="images/img_sherlocktoyfacelow.png"
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="sherlocktoyface"
                  />
                </div>
              </div>
            </header>
            <div className="bg-gray_50 flex font-poppins items-center justify-start pl-[12px] py-[12px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[74%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="text-bluegray_900 text-center w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <div className="flex flex-row font-inter gap-[12px] items-center justify-between w-[20%]">
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
                  <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[24px] w-[100%]">
                    <List
                      className="md:flex-1 flex-col gap-[20px] grid md:w-[100%] w-[21%]"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 flex items-center justify-end my-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                        <div className="flex flex-col gap-[28px] items-center justify-start mt-[10px] md:w-[100%] w-[55%]">
                          <Img
                            src="images/img_signal.svg"
                            className="h-[43px] w-[auto]"
                            alt="signal"
                          />
                          <div className="flex flex-col gap-[9px] items-center justify-start py-[2px] w-[100%]">
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total Tasks
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              120
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-center justify-end my-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                        <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] md:w-[100%] w-[54%]">
                          <Img
                            src="images/img_signal_green_700.svg"
                            className="h-[43px] w-[auto]"
                            alt="signal"
                          />
                          <div className="flex flex-col gap-[9px] items-center justify-start py-[2px] w-[100%]">
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              New Tasks
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              60
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                      <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-normal mt-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Statistics
                            </Text>
                            <Img
                              src="images/img_user_bluegray_400.svg"
                              className="h-[32px] w-[32px]"
                              alt="user"
                            />
                          </div>
                          <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_frame.svg"
                              className="h-[139px] w-[auto]"
                              alt="frame"
                            />
                            <div className="flex items-center justify-start w-[100%]">
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
                        <div className="bg-gray_100 flex items-center justify-start p-[16px] rounded-[4px] w-[100%]">
                          <div className="flex flex-row gap-[20px] items-center justify-between md:w-[100%] w-[96%]">
                            <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Data project report
                              </Text>
                              <Text
                                className="not-italic text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                • In process
                              </Text>
                            </div>
                            <div className="bg-indigo_52 flex h-[64px] items-center justify-start p-[4px] rounded-[50%] w-[64px]">
                              <div className="bg-indigo_400 h-[56px] rounded-[50%] shadow-bs1 w-[56px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[32%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Sales
                          </Text>
                          <Img
                            src="images/img_user_bluegray_400.svg"
                            className="h-[32px] w-[32px]"
                            alt="user_One"
                          />
                        </div>
                        <div className="h-[190px] md:h-[222px] mt-[32px] relative w-[190px]">
                          <CircularProgressbar
                            className="!w-[190px] border-solid h-[190px] m-[auto] overflow-visible"
                            value={28}
                            strokeWidth={1}
                            styles={{
                              trail: { strokeWidth: 1, stroke: "" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(225deg)",
                              },
                            }}
                          ></CircularProgressbar>
                          <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] items-center justify-center m-[auto] pr-[2px] pt-[2px] w-[auto]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total
                            </Text>
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              $2,000
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex-col gap-[20px] grid items-center mt-[37px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 items-center justify-start w-[100%]">
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[auto]">
                                <div className="bg-red_600 h-[8px] my-[4px] rounded-[50%] w-[8px]"></div>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Current Week
                                </Text>
                              </div>
                              <Text
                                className="mt-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $1,200
                              </Text>
                              <div className="flex items-center justify-start w-[auto]">
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
                          </div>
                          <div className="flex flex-1 items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[19px] items-center justify-between w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[auto]">
                                <div className="bg-green_700 h-[8px] my-[4px] rounded-[50%] w-[8px]"></div>
                                <Text
                                  className="not-italic text-bluegray_400 text-left w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Last Week
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $800
                              </Text>
                              <div className="flex items-center justify-start w-[auto]">
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
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                    <div className="flex h-[465px] justify-end relative md:w-[100%] w-[55%]">
                      <div className="flex flex-col gap-[7px] h-[100%] items-start justify-start mb-[101px] ml-[auto] mr-[158px] mt-[auto] pr-[2px] py-[2px] w-[auto]">
                        <Text
                          className="md:ml-[0] ml-[3px] not-italic text-center text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          $0.0
                        </Text>
                      </div>
                      <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                        <div className="flex flex-col items-center justify-start mb-[9px] mt-[2px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
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
                          <div className="flex items-center justify-start mt-[26px] w-[100%]">
                            <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                              <div className="flex sm:flex-col flex-row sm:gap-[42px] items-center justify-between w-[100%]">
                                <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-normal h-[15px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    Su
                                  </Text>
                                  <Text
                                    className="font-normal h-[15px] mt-[25px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    Sa
                                  </Text>
                                  <Text
                                    className="font-normal mt-[24px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    Fr
                                  </Text>
                                  <Text
                                    className="font-normal h-[15px] mt-[25px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    Th
                                  </Text>
                                  <Text
                                    className="font-normal mt-[25px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    We
                                  </Text>
                                  <Text
                                    className="font-normal mt-[24px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    Tu
                                  </Text>
                                  <Text
                                    className="font-normal mt-[25px] not-italic text-bluegray_400 text-right w-[auto]"
                                    variant="body1"
                                  >
                                    Mo
                                  </Text>
                                </div>
                                <div className="font-poppins h-[256px] relative sm:w-[100%] w-[88%]">
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex h-[100%] inset-y-[0] items-start justify-end left-[0] my-[auto] p-[3px] w-[90%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group38.svg')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_frame_indigo_400.svg"
                                      className="h-[246px] md:ml-[0] ml-[32px] mt-[4px] w-[auto]"
                                      alt="frame_One"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex h-[48px] items-center justify-start p-[14px] right-[0] shadow-bs2 top-[11%] w-[35%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group_bluegray_100.svg')",
                                    }}
                                  >
                                    <div className="flex flex-row gap-[21px] items-center justify-between md:w-[100%] w-[95%]">
                                      <div className="flex flex-row gap-[8px] items-center justify-start w-[41%]">
                                        <div className="bg-indigo_400 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                        <Text
                                          className="font-semibold text-bluegray_900 text-left w-[auto]"
                                          variant="body1"
                                        >
                                          150.0
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-[8px] items-center justify-start w-[40%]">
                                        <div className="bg-amber_300 h-[6px] my-[5px] rounded-[50%] w-[6px]"></div>
                                        <Text
                                          className="font-semibold text-bluegray_900 text-left w-[auto]"
                                          variant="body1"
                                        >
                                          120.0
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-between md:w-[100%] w-[85%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  -300
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  -200
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  -100
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  0
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  200
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                  variant="body1"
                                >
                                  300
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[24px] items-center justify-center mt-[32px] md:w-[100%] w-[32%]">
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
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[44%]">
                      <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Total projects
                          </Text>
                          <Img
                            src="images/img_user_bluegray_400.svg"
                            className="h-[32px] w-[32px]"
                            alt="user_Two"
                          />
                        </div>
                        <List
                          className="flex-col gap-[20px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-col gap-[10px] items-start justify-end w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Mobile app (4/12)
                            </Text>
                            <div className="flex flex-row gap-[25px] items-center justify-between w-[100%]">
                              <div className="h-[8px] my-[5px] overflow-hidden relative w-[auto]">
                                <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                                <div
                                  className="h-full absolute bg-indigo_400  rounded-[4px]"
                                  style={{ width: "27%" }}
                                ></div>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                34%
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[9px] items-start justify-end w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Landing page (2/4)
                            </Text>
                            <div className="flex flex-row gap-[26px] items-center justify-between w-[100%]">
                              <div className="h-[8px] my-[5px] overflow-hidden relative w-[auto]">
                                <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                                <div
                                  className="h-full absolute bg-green_700  rounded-[4px]"
                                  style={{ width: "62%" }}
                                ></div>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                50%
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[9px] items-start justify-end w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Branding (2/2)
                            </Text>
                            <div className="flex flex-row gap-[7px] items-center justify-between w-[100%]">
                              <div className="h-[8px] my-[5px] overflow-hidden relative w-[auto]">
                                <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                                <div
                                  className="h-full absolute bg-amber_300  rounded-[4px]"
                                  style={{ width: "96%" }}
                                ></div>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                100%
                              </Text>
                            </div>
                          </div>
                          <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                          <div className="flex flex-1 flex-col gap-[9px] items-start justify-end w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Branding (2/8)
                            </Text>
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                              <div className="h-[8px] my-[5px] overflow-hidden relative w-[auto]">
                                <div className="w-full h-full absolute bg-gray_50 rounded-[4px]"></div>
                                <div
                                  className="h-full absolute bg-red_600  rounded-[4px]"
                                  style={{ width: "17%" }}
                                ></div>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-right w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                25%
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex font-inter items-center justify-start mt-[20px] p-[26px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col items-center justify-start mb-[6px] md:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                        <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Transactions history
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
                        <div className="overflow-auto w-[100%]">
                          <ReactTable
                            columns={column1}
                            data={tableData1.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                      </div>
                      <div className="bg-gray_50 flex items-center justify-start p-[20px] w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            3
                          </Text>
                          <div className="flex md:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] ml-[64px] md:w-[100%] w-[13%]">
                            <div className="flex h-[24px] items-center justify-start w-[24px]">
                              <Img
                                src="images/img_vangoghbyamrit1.png"
                                className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                alt="vangoghbyamritOne"
                              />
                            </div>
                            <div className="flex items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Benjamin
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-normal md:ml-[0] ml-[65px] not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            24.01.2022
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[64px] not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $16.0
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[90px] not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #21030
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[75px] not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            MasterCard
                          </Text>
                          <Img
                            src="images/img_user_bluegray_400.svg"
                            className="h-[24px] md:ml-[0] ml-[92px] w-[24px]"
                            alt="user_Five"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 font-inter items-center justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[26%]">
                  <div className="flex flex-col gap-[32px] items-center justify-start mt-[11px] w-[100%]">
                    <div className="flex flex-col gap-[41px] items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[22px] items-center justify-start md:w-[100%] w-[87%]">
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
                              className="not-italic text-bluegray_400 text-left w-[auto]"
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
                      <div className="flex flex-col font-poppins items-center justify-start w-[100%]">
                        <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                        <div className="flex flex-row items-start justify-between mt-[31px] w-[100%]">
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
                            alt="user_Six"
                          />
                        </div>
                        <div className="flex flex-col font-inter gap-[25px] items-start justify-start mt-[32px] pt-[3px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Feb 24, 2022
                          </Text>
                          <List
                            className="flex-col gap-[8px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 items-center justify-start w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-between pr-[10px] w-[100%]">
                                <div className="flex h-[46px] items-center justify-start w-[46px]">
                                  <Img
                                    src="images/img_robototoyfacefinal2_46x46.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="robototoyfacefi"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-end w-[auto]">
                                  <Text
                                    className="not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Ackerman
                                  </Text>
                                  <Text
                                    className="font-normal leading-[24.00px] mt-[6px] not-italic text-bluegray_900 text-left w-[100%]"
                                    as="h5"
                                    variant="h5"
                                  ></Text>
                                  <Text
                                    className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            <div className="flex flex-1 items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                                <div className="flex h-[46px] items-center justify-start w-[46px]">
                                  <Img
                                    src="images/img_punktoyface1.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="punktoyfaceOne"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-end w-[auto]">
                                  <Text
                                    className="not-italic text-bluegray_800 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Blanker
                                  </Text>
                                  <Text
                                    className="font-normal leading-[24.00px] mt-[6px] not-italic text-bluegray_900 text-left w-[100%]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Create user flow for Data Projects
                                  </Text>
                                  <Text
                                    className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            <div className="flex flex-1 items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[93%]">
                                <div className="flex h-[46px] items-center justify-start w-[46px]">
                                  <Img
                                    src="images/img_vangoghbyamrit1_46x46.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="vangoghbyamritOne"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-end w-[auto]">
                                  <Text
                                    className="not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Lee Ri
                                  </Text>
                                  <Text
                                    className="font-normal mt-[10px] not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Revision design system
                                  </Text>
                                  <Text
                                    className="mt-[8px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            <div className="flex flex-1 items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                                <div className="flex h-[46px] items-center justify-start w-[46px]">
                                  <Img
                                    src="images/img_rarepepenakamototoyface.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="rarepepenakamot"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-end w-[auto]">
                                  <Text
                                    className="not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Jackson
                                  </Text>
                                  <Text
                                    className="font-normal mt-[10px] not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Changelog Scan ID Card
                                  </Text>
                                  <Text
                                    className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            <div className="flex flex-1 items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[79%]">
                                <div className="flex h-[46px] items-center justify-start w-[46px]">
                                  <Img
                                    src="images/img_tintin22.png"
                                    className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                    alt="tintinTwentyTwo"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-end w-[auto]">
                                  <Text
                                    className="not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Yomaha
                                  </Text>
                                  <Text
                                    className="font-normal mt-[10px] not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Pitching with client
                                  </Text>
                                  <Text
                                    className="mt-[8px] not-italic text-bluegray_400 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start pt-[3px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Feb 23, 2022
                      </Text>
                      <List
                        className="flex-col gap-[8px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 items-center justify-start w-[100%]">
                          <div className="flex flex-row gap-[16px] items-center justify-between pr-[10px] w-[100%]">
                            <div className="flex h-[46px] items-center justify-start w-[46px]">
                              <Img
                                src="images/img_robototoyfacefinal2_46x46.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="robototoyfacefi"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-end w-[auto]">
                              <Text
                                className="not-italic text-bluegray_900 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="font-normal leading-[24.00px] mt-[6px] not-italic text-bluegray_900 text-left w-[100%]"
                                as="h5"
                                variant="h5"
                              ></Text>
                              <Text
                                className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
                            <div className="flex h-[46px] items-center justify-start w-[46px]">
                              <Img
                                src="images/img_punktoyface1.png"
                                className="h-[46px] md:h-[auto] rounded-[50%] w-[46px]"
                                alt="punktoyfaceOne"
                              />
                            </div>
                            <div className="flex flex-col items-start justify-end w-[auto]">
                              <Text
                                className="not-italic text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Blanker
                              </Text>
                              <Text
                                className="font-normal leading-[24.00px] mt-[6px] not-italic text-bluegray_900 text-left w-[100%]"
                                as="h5"
                                variant="h5"
                              >
                                Create user flow for Data Projects
                              </Text>
                              <Text
                                className="mt-[7px] not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                2min ago
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
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

export default DashboardThreePage;

import React from "react";

import { Img, Text, Line, Button, List, ReactTable } from "components";
import Header from "components/Header";
import { createColumnHelper } from "@tanstack/react-table";

const ProfilePage = () => {
  const tableData4 = React.useRef([
    {
      no: "1",
      projects: "Branding guideline",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,000",
    },
    {
      no: "2",
      projects: "Mobile design",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,200",
    },
    {
      no: "3",
      projects: "Landing pages",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,800",
    },
    {
      no: "2",
      projects: "Mobile design",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,200",
    },
    {
      no: "3",
      projects: "Landing pages",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,800",
    },
    {
      no: "2",
      projects: "Mobile design",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,200",
    },
    {
      no: "3",
      projects: "Landing pages",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,800",
    },
    {
      no: "2",
      projects: "Mobile design",
      start: "2 Sep, 2020",
      lineTwo: "10 Sep, 2020",
      budget: "$1,200",
    },
  ]);
  const columnHelper4 = createColumnHelper();
  const column4 = [
    columnHelper4.accessor("no", {
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
          className="font-normal min-w-[115px] not-italic pl-[20px] text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          No.
        </Text>
      ),
    }),
    columnHelper4.accessor("projects", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[2px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[193px] not-italic py-[2px] text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Projects
        </Text>
      ),
    }),
    columnHelper4.accessor("start", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[2px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[136px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Start
        </Text>
      ),
    }),
    columnHelper4.accessor("lineTwo", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[2px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[143px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Deadline
        </Text>
      ),
    }),
    columnHelper4.accessor("budget", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[2px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[110px] not-italic py-[2px] text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Budget
        </Text>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]">
            <Img
              src="images/img_menu.svg"
              className="h-[28px] md:ml-[0] ml-[66px] mr-[87px] mt-[36px] w-[auto]"
              alt="menu"
            />
            <div className="flex flex-col items-start justify-start mb-[536px] md:ml-[0] ml-[29px] mr-[54px] mt-[36px] w-[66%]">
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
          </aside>
          <Line className="bg-indigo_50 h-[1038px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-end p-[10px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[21px] items-end justify-between mt-[22px] md:w-[100%] w-[98%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[33%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mt-[32px] pb-[34px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_imglibimg15.png"
                        className="h-[136px] mx-[auto] object-cover w-[100%]"
                        alt="imglibimgFifteen"
                      />
                      <div className="flex h-[120px] items-center justify-start mt-[-60px] mx-[auto] w-[120px] z-[1]">
                        <Img
                          src="images/img_sherlocktoyfacelow_120x120.png"
                          className="h-[120px] md:h-[auto] object-cover rounded-[24px] w-[120px]"
                          alt="sherlocktoyface_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[24px] items-center justify-start mt-[24px] md:w-[100%] w-[72%]">
                      <div className="flex flex-col gap-[12px] items-center justify-end w-[100%]">
                        <Text
                          className="not-italic text-bluegray_900 text-center w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sam Brown
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-center w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown@gmail.com
                        </Text>
                      </div>
                      <div className="flex items-end justify-start p-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="not-italic text-bluegray_800 text-center w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown.com
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="bg-red_600 cursor-pointer flex items-center justify-center min-w-[147px] mt-[40px] pl-[33px] pr-[30px] py-[14px] rounded-[24px] w-[auto]"
                      rightIcon={
                        <Img
                          src="images/img_cut.svg"
                          className="ml-[17px]"
                          alt="cut"
                        />
                      }
                    >
                      <div className="font-normal not-italic sm:px-[20px] text-[14px] text-center text-white_A700">
                        Logout
                      </div>
                    </Button>
                    <Img
                      src="images/img_socialicons.svg"
                      className="h-[20px] mt-[24px] w-[auto]"
                      alt="socialicons"
                    />
                    <Line className="bg-indigo_50 h-[1px] mt-[32px] w-[83%]" />
                    <Text
                      className="mt-[33px] not-italic text-bluegray_400 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Member since 2021
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex font-inter items-center justify-end mt-[21px] p-[24px] sm:px-[20px] rounded-[4px] shadow-bs5 w-[100%]">
                    <div className="flex flex-col gap-[28px] items-center justify-start mt-[8px] md:w-[100%] w-[96%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Personal info.
                        </Text>
                        <Img
                          src="images/img_user_bluegray_400.svg"
                          className="h-[32px] w-[32px]"
                          alt="user_One"
                        />
                      </div>
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Full name
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Utillia
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mobile
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[67px] items-start justify-start pl-[2px] pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            E-mail
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ackermanlhn@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-bluegray_800 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hanoi, Vietnam
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-inter gap-[21px] items-center justify-start md:mt-[0] mt-[62px] md:w-[100%] w-[67%]">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs5 w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[62%]">
                          <div className="bg-gray_50 h-[48px] my-[5px] rounded-[4px] w-[48px]"></div>
                          <div className="flex flex-col gap-[12px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Completed tasks
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              125
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_user_bluegray_400.svg"
                          className="h-[32px] w-[32px]"
                          alt="user"
                        />
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs5 w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[20px] items-center justify-between w-[62%]">
                          <div className="bg-gray_50 h-[48px] my-[5px] rounded-[4px] w-[48px]"></div>
                          <div className="flex flex-col gap-[14px] items-start justify-end w-[auto]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total revenue
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              $10,000
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_user_bluegray_400.svg"
                          className="h-[32px] w-[32px]"
                          alt="user"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="bg-white_A700 flex items-center justify-end p-[29px] sm:px-[20px] rounded-[4px] shadow-bs5 w-[100%]">
                    <div className="flex flex-col gap-[31px] items-center justify-start mt-[3px] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          My projects
                        </Text>
                        <Img
                          src="images/img_search_bluegray_400.svg"
                          className="h-[32px] md:ml-[0] ml-[509px] w-[32px]"
                          alt="search"
                        />
                        <Img
                          src="images/img_user_bluegray_400.svg"
                          className="h-[32px] md:ml-[0] ml-[24px] w-[32px]"
                          alt="user_Two"
                        />
                      </div>
                      <div className="flex items-center justify-start pb-[40px] w-[100%]">
                        <div className="overflow-auto w-[100%]">
                          <ReactTable
                            columns={column4}
                            data={tableData4.current}
                            rowClass={""}
                            headerClass=""
                          />
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

export default ProfilePage;

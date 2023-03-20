import React from "react";

import Sidebar1 from "components/Sidebar1";
import { Line, Text, Img, Button, ReactTable, List } from "components";
import Header from "components/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { createColumnHelper } from "@tanstack/react-table";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  const tableData = React.useRef([
    { name: "index.html", datemotified: "10.10.2021, 09:45", size: "09 KB" },
    { name: "image.png", datemotified: "10.10.2021, 09:45", size: "110 KB" },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("name", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[3px] sm:pl-[20px] pl-[35px] pt-[35px] text-bluegray_900 text-center"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[211px] not-italic pl-[20px] text-bluegray_400 text-center"
          as="p"
          variant="h5"
        >
          Name
        </Text>
      ),
    }),
    columnHelper.accessor("datemotified", {
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
          className="font-normal min-w-[185px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Date motified
        </Text>
      ),
    }),
    columnHelper.accessor("size", {
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
          className="font-normal min-w-[105px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Size
        </Text>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar1 className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[950px] mb-[74px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between mb-[75px] mt-[12px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[24%]">
                  <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      File Management
                    </Text>
                    <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <Accordion
                          preExpanded={[0]}
                          className="flex flex-col font-inter gap-[21px] w-[100%]"
                        >
                          {[...Array(3)].map((item, index) => (
                            <AccordionItem uuid={index} key={Math.random()}>
                              <div className="flex flex-col gap-[18px] justify-start w-[100%]">
                                <AccordionItemHeading className="w-full">
                                  <AccordionItemButton>
                                    <AccordionItemState>
                                      {({ expanded }) => (
                                        <div className="flex flex-row items-center justify-between w-[100%]">
                                          <div className="flex flex-row gap-[13px] items-center justify-start pr-[2px] w-[auto]">
                                            <Img
                                              src="images/img_television.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="television"
                                            />
                                            <Text
                                              className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                                              as="h5"
                                              variant="h5"
                                            >
                                              Main File
                                            </Text>
                                          </div>
                                          {expanded && (
                                            <Img
                                              src="images/img_arrowup.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="arrowup"
                                            />
                                          )}
                                          {!expanded && (
                                            <Img
                                              src="images/img_arrowup.svg"
                                              className="h-[24px] w-[24px]"
                                              alt="arrowup_One"
                                            />
                                          )}
                                        </div>
                                      )}
                                    </AccordionItemState>
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="w-[100%] ">
                                  <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[36px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="font-normal mt-[14px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="font-normal mt-[17px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="font-normal mt-[16px] not-italic text-bluegray_400 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Empty states
                                    </Text>
                                  </div>
                                </AccordionItemPanel>
                              </div>
                            </AccordionItem>
                          ))}
                        </Accordion>
                        <Button
                          className="bg-red_50 cursor-pointer flex h-[48px] items-center justify-center px-[31px] py-[9px] rounded-[24px] w-[209px]"
                          rightIcon={
                            <Img
                              src="images/img_plus_deep_orange_300.svg"
                              className="ml-[13px] my-[1px]"
                              alt="plus"
                            />
                          }
                        >
                          <div className="font-bold font-poppins sm:px-[20px] text-[14px] text-center text-deep_orange_300">
                            Add new folder
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col font-inter justify-start p-[16px] rounded-[4px] shadow-bs w-[100%]">
                    <Img
                      src="images/img_plus_bluegray_400.svg"
                      className="h-[24px] md:ml-[0] ml-[217px] w-[24px]"
                      alt="plus"
                    />
                    <Img
                      src="images/img_document1.png"
                      className="h-[81px] md:h-[auto] md:ml-[0] ml-[80px] mt-[2px] object-cover w-[81px]"
                      alt="documentOne"
                    />
                    <div className="flex flex-col gap-[8px] justify-start mt-[35px] mx-[auto] pt-[3px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal md:ml-[0] ml-[39px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Upgrade Features
                      </Text>
                      <Text
                        className="leading-[22.00px] not-italic text-bluegray_800 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Upgrade account to access multiple features
                      </Text>
                    </div>
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center mb-[16px] min-w-[128px] md:ml-[0] ml-[57px] mt-[44px] pl-[4px] w-[auto]"
                      rightIcon={
                        <Img
                          src="images/img_forward.svg"
                          className="ml-[11px]"
                          alt="forward"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[14px] text-center text-deep_orange_300">
                        Upgrade now
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 font-inter items-center justify-start md:mt-[0] mt-[60px] p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                  <div className="flex flex-col gap-[32px] items-center justify-start mb-[16px] md:w-[100%] w-[98%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[26px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Main File
                          </Text>
                          <Img
                            src="images/img_search_gray_50.svg"
                            className="h-[40px] sm:ml-[0] ml-[329px] rounded-[50%] w-[40px]"
                            alt="search"
                          />
                          <Img
                            src="images/img_volume.svg"
                            className="h-[40px] sm:ml-[0] ml-[16px] rounded-[50%] w-[40px]"
                            alt="volume"
                          />
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="gap-[20px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                              <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
                                    <Img
                                      src="images/img_folder_indigo_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="folder"
                                    />
                                    <Img
                                      src="images/img_user_bluegray_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="user"
                                    />
                                  </div>
                                  <div className="flex flex-row items-end justify-between w-[100%]">
                                    <div className="flex flex-col gap-[6px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        Product Design
                                      </Text>
                                      <Text
                                        className="not-italic text-bluegray_400 text-left w-[auto]"
                                        as="h6"
                                        variant="h6"
                                      >
                                        12 Files
                                      </Text>
                                    </div>
                                    <Text
                                      className="mb-[2px] mt-[30px] not-italic text-bluegray_400 text-right w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      3GB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
                                    <Img
                                      src="images/img_folder_indigo_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="folder"
                                    />
                                    <Img
                                      src="images/img_user_bluegray_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="user"
                                    />
                                  </div>
                                  <div className="flex flex-row items-end justify-between w-[100%]">
                                    <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        Outsource
                                      </Text>
                                      <Text
                                        className="not-italic text-bluegray_400 text-left w-[auto]"
                                        as="h6"
                                        variant="h6"
                                      >
                                        12 Files
                                      </Text>
                                    </div>
                                    <Text
                                      className="mb-[2px] mt-[30px] not-italic text-bluegray_400 text-right w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      3GB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
                                    <Img
                                      src="images/img_folder_indigo_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="folder"
                                    />
                                    <Img
                                      src="images/img_user_bluegray_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="user"
                                    />
                                  </div>
                                  <div className="flex flex-row items-end justify-between w-[100%]">
                                    <div className="flex flex-col gap-[6px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        Graphics
                                      </Text>
                                      <Text
                                        className="not-italic text-bluegray_400 text-left w-[auto]"
                                        as="h6"
                                        variant="h6"
                                      >
                                        12 Files
                                      </Text>
                                    </div>
                                    <Text
                                      className="mb-[2px] mt-[30px] not-italic text-bluegray_400 text-right w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      3GB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex flex-1 items-center justify-start p-[20px] rounded-[4px] w-[100%]">
                                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                  <div className="flex flex-row items-center justify-between w-[100%]">
                                    <Img
                                      src="images/img_folder_indigo_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="folder"
                                    />
                                    <Img
                                      src="images/img_user_bluegray_400.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="user"
                                    />
                                  </div>
                                  <div className="flex flex-row items-end justify-between w-[100%]">
                                    <div className="flex flex-col gap-[6px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                        as="h5"
                                        variant="h5"
                                      >
                                        Empty States
                                      </Text>
                                      <Text
                                        className="not-italic text-bluegray_400 text-left w-[auto]"
                                        as="h6"
                                        variant="h6"
                                      >
                                        12 Files
                                      </Text>
                                    </div>
                                    <Text
                                      className="mb-[2px] mt-[30px] not-italic text-bluegray_400 text-right w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      3GB
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start pt-[3px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="flex flex-col gap-[35px] items-center justify-start w-[100%]">
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Recent files
                              </Text>
                              <div className="flex flex-row gap-[8px] items-center justify-evenly w-[auto]">
                                <Text
                                  className="not-italic text-bluegray_800 text-right w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  View all
                                </Text>
                                <Img
                                  src="images/img_arrowright.svg"
                                  className="h-[20px] w-[20px]"
                                  alt="arrowright"
                                />
                              </div>
                            </div>
                            <div className="overflow-auto w-[100%]">
                              <ReactTable
                                columns={column}
                                data={tableData.current}
                                rowClass={""}
                                headerClass=""
                              />
                            </div>
                          </div>
                          <div className="bg-gray_50 flex items-center justify-start p-[20px] w-[100%]">
                            <div className="flex flex-row items-start justify-between sm:pr-[20px] md:pr-[40px] pr-[42px] w-[100%]">
                              <div className="flex items-end justify-end w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Document.txt
                                </Text>
                              </div>
                              <Text
                                className="font-normal mt-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 KB
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-start justify-end md:mt-[0] mt-[60px] p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                  <Text
                    className="font-normal mt-[6px] not-italic text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Storage
                  </Text>
                  <div className="md:h-[222px] h-[485px] mt-[32px] relative w-[100%]">
                    <div className="absolute h-[190px] inset-x-[0] mx-[auto] top-[0] w-[190px]">
                      <CircularProgressbar
                        className="!w-[190px] border-solid h-[190px] m-[auto] overflow-visible"
                        value={16}
                        strokeWidth={1}
                        styles={{
                          trail: { strokeWidth: 1, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(-90deg)",
                          },
                        }}
                      ></CircularProgressbar>
                      <div className="absolute flex flex-col gap-[6px] inset-x-[0] items-center justify-start mx-[auto] top-[32%] w-[auto]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          25Gb
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Used of 50GB
                        </Text>
                      </div>
                    </div>
                    <List
                      className="absolute bottom-[0] flex-col gap-[10px] grid inset-x-[0] items-center mx-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 items-end justify-start my-[0] sm:pl-[20px] pl-[40px] w-[100%]">
                        <div className="flex flex-row gap-[87px] items-start justify-end ml-[auto] w-[100%]">
                          <div className="flex flex-col gap-[6px] items-start justify-end pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Image
                            </Text>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[2px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                      <div className="flex flex-1 flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                        <Img
                          src="images/img_play.svg"
                          className="h-[24px] w-[24px]"
                          alt="play"
                        />
                        <div className="flex flex-row items-start justify-between w-[81%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Videos
                            </Text>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[2px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                      <div className="flex flex-1 items-end justify-start my-[0] sm:pl-[20px] pl-[40px] w-[100%]">
                        <div className="flex flex-row gap-[72px] items-start justify-end ml-[auto] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Muscics
                            </Text>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[2px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                      <div className="flex flex-1 items-end justify-start my-[0] sm:pl-[20px] pl-[40px] w-[100%]">
                        <div className="flex flex-row gap-[84px] items-start justify-end ml-[auto] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start pr-[2px] py-[2px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Others
                            </Text>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </div>
                          <Text
                            className="mt-[2px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="border-[2px] border-indigo_50 border-solid flex items-center justify-start mt-[32px] p-[35px] sm:px-[20px] rounded-[4px] w-[100%]">
                    <div className="flex flex-col gap-[15px] items-center justify-start md:w-[100%] w-[52%]">
                      <Img
                        src="images/img_download.svg"
                        className="h-[24px] w-[24px]"
                        alt="download"
                      />
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Import file
                      </Text>
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

export default FileManagementDefaultPage;

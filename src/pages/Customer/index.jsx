import React from "react";

import {
  Line,
  Text,
  Img,
  ReactTable,
  List,
  CheckBox,
  Button,
} from "components";
import { createColumnHelper } from "@tanstack/react-table";
import Header1 from "components/Header1";
import Sidebar3 from "components/Sidebar3";

const CustomerPage = () => {
  const tableData3 = React.useRef([
    {
      customerOne: "Jack",
      address: "2371 Reppert Coal Road",
      phone: "601-540-6298",
      orderno: "#12931",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Fort Myers",
      address: "927 Sunburst Drive",
      phone: "239-346-5244",
      orderno: "#12932",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Benjamin",
      address: "1671 Carriage Court",
      phone: "760-390-1331",
      orderno: "#12933",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Flanagan",
      address: "121 Courtright Street",
      phone: "701-565-0439",
      orderno: "#12934",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Nicoletti",
      address: "1060 Stark Hollow Road",
      phone: " 970-757-0036",
      orderno: "#12935",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Robert",
      address: "424 Charter Street",
      phone: "913-207-2627",
      orderno: "#12936",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Rankin",
      address: "60 Corpening Drive",
      phone: "248-930-4978",
      orderno: "#12937",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Clementine",
      address: "4337 Fleming Way",
      phone: "757-735-4769",
      orderno: "#12938",
      status: "images/img_user_bluegray_400.svg",
    },
    {
      customerOne: "Mitchell",
      address: "2758 My Drive",
      phone: "631-827-7596",
      orderno: "#12939",
      status: "images/img_user_bluegray_400.svg",
    },
  ]);
  const columnHelper3 = createColumnHelper();
  const column3 = [
    columnHelper3.accessor("customerOne", {
      cell: (info) => (
        <div className="flex flex-row gap-[57px] items-start justify-start p-[3px]">
          <CheckBox
            className="mb-[3px] ml-[18px] mt-[36px]"
            inputClassName="bg-bluegray_400 mr-[5px]"
            name="file"
            id="file"
          ></CheckBox>
          <div className="flex flex-row gap-[12px] items-center justify-center mt-[32px] pr-[3px] w-[29%]">
            <Img
              src="images/img_robototoyfacefinal2.png"
              className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
              alt="robototoyfacefi"
            />
            <Text
              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
              as="p"
              variant="h5"
            >
              {info?.getValue()}
            </Text>
          </div>
        </div>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[273px] not-italic sm:px-[20px] px-[35px] text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Customer
        </Text>
      ),
    }),
    columnHelper3.accessor("address", {
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
          className="font-normal min-w-[260px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Address
        </Text>
      ),
    }),
    columnHelper3.accessor("phone", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[5px] pt-[35px] text-indigo_400 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[203px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Phone
        </Text>
      ),
    }),
    columnHelper3.accessor("orderno", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[5px] pt-[35px] text-bluegray_800 text-left"
          as="p"
          variant="h5"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[154px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Order No.
        </Text>
      ),
    }),
    columnHelper3.accessor("status", {
      cell: (info) => (
        <div className="flex flex-row items-start justify-between pr-[20px] pt-[20px]">
          <Button className="bg-green_700 cursor-pointer font-normal min-w-[93px] mt-[13px] not-italic py-[6px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
            Paid
          </Button>
          <Img
            src={info?.getValue()}
            className="h-[24px] mt-[16px] w-[24px]"
            alt="user"
          />
        </div>
      ),
      header: (info) => (
        <Text
          className="font-normal min-w-[196px] not-italic text-bluegray_400 text-left"
          as="p"
          variant="h5"
        >
          Status
        </Text>
      ),
    }),
  ];

  return (
    <>
      <div className="flex font-poppins items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[1024px] md:px-[20px] relative w-[100%]">
          <div className="bg-white_A700 flex h-[100%] items-start justify-start m-[auto] pb-[241px] sm:px-[20px] px-[241px] md:px-[40px] w-[100%]">
            <Line className="bg-indigo_50 h-[750px] mb-[33px] w-[1px]" />
          </div>
          <div className="absolute bg-gray_50 bottom-[0] flex flex-col gap-[32px] items-start justify-center p-[23px] sm:px-[20px] right-[0] w-[84%]">
            <Text
              className="mt-[10px] text-bluegray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Customer
            </Text>
            <div className="bg-white_A700 flex font-inter items-center justify-start mb-[35px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[3px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal md:mt-[0] mt-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Customer List
                  </Text>
                  <Img
                    src="images/img_search_bluegray_900.svg"
                    className="h-[24px] md:ml-[0] ml-[896px] w-[24px]"
                    alt="search"
                  />
                  <Img
                    src="images/img_close.svg"
                    className="h-[24px] md:ml-[0] ml-[24px] w-[24px]"
                    alt="close"
                  />
                </div>
                <div className="overflow-auto mt-[37px] w-[100%]">
                  <ReactTable
                    columns={column3}
                    data={tableData3.current}
                    rowClass={""}
                    headerClass=""
                  />
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[32px] w-[100%]">
                  <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center p-[10px] w-[32px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className=""
                      alt="arrowleft"
                    />
                  </Button>
                  <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-normal h-[32px] md:ml-[0] ml-[8px] not-italic py-[7px] text-[14px] text-bluegray_900 text-center w-[32px]">
                    1
                  </Button>
                  <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] md:ml-[0] ml-[8px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                    2
                  </Button>
                  <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] md:ml-[0] ml-[8px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                    ...
                  </Button>
                  <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] md:ml-[0] ml-[8px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                    9
                  </Button>
                  <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center md:ml-[0] ml-[8px] p-[10px] w-[32px]">
                    <Img
                      src="images/img_arrowright_bluegray_400_32x32.svg"
                      className=""
                      alt="arrowright"
                    />
                  </Button>
                  <Text
                    className="md:ml-[0] ml-[765px] not-italic text-bluegray_400 text-right w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    9 of 200 data
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Header1 className="absolute bg-white_A700 flex font-inter items-center justify-center right-[0] top-[0] w-[100%]" />
          <Sidebar3 className="absolute bg-white_A700 flex flex-col font-inter md:hidden inset-y-[0] justify-start left-[0] my-[auto] w-[17%]" />
        </div>
      </div>
    </>
  );
};

export default CustomerPage;

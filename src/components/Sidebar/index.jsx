import React from "react";

import { Img, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <Img
          src="images/img_menu.svg"
          className="h-[28px] md:ml-[0] ml-[66px] mr-[87px] mt-[36px] w-[auto]"
          alt="menu"
        />
        <div className="flex flex-col items-start justify-start mb-[522px] md:ml-[0] ml-[29px] mr-[54px] mt-[36px] w-[66%]">
          <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
            <Img
              src="images/img_grid.svg"
              className="h-[20px] w-[20px]"
              alt="grid"
            />
            <Text
              className="font-inter not-italic text-bluegray_400 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[65%]">
            <Img
              src="images/img_user_deep_orange_300.svg"
              className="h-[20px] w-[20px]"
              alt="user"
            />
            <Text
              className="font-inter not-italic text-bluegray_800 text-left w-[auto]"
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
                className="font-inter mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Message
              </Text>
            </div>
            <Text
              className="bg-red_600 flex font-inter font-normal h-[24px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
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
              className="font-inter not-italic text-bluegray_400 text-left w-[auto]"
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
              className="font-inter mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
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
              className="font-inter mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Shop
            </Text>
          </div>
          <div className="flex items-end justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[auto]">
            <Text
              className="font-inter not-italic text-bluegray_400 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Cart
            </Text>
          </div>
          <div className="flex flex-row gap-[13px] items-end justify-start mt-[30px] md:w-[100%] w-[60%]">
            <div className="bg-white_A700 h-[26px] w-[26px]"></div>
            <Text
              className="font-inter my-[4px] not-italic text-bluegray_400 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Settings
            </Text>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;

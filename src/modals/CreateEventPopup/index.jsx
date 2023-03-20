import React from "react";
import ModalProvider from "react-modal";

import { Text, Input, SelectBox, Img, Button } from "components";

const CreateEventPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start mb-[18px] p-[32px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                <Text
                  className="md:ml-[0] ml-[3px] not-italic text-bluegray_800 text-center w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Create new event
                </Text>
                <Text
                  className="not-italic text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Add new event in the calendar
                </Text>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Event name
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[35px] pt-[19px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                    type="text"
                    name="groupTwo"
                    placeholder="Type name"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[100%]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Select category
                  </Text>
                  <SelectBox
                    className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal not-italic px-[20px] py-[17px] rounded-[4px] text-[16px] text-bluegray_800 text-left w-[100%]"
                    placeholderClassName="text-bluegray_800"
                    name="groupThree"
                    placeholder="Data project"
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
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[199px] not-italic py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  Create now
                </Button>
                <Button className="bg-gray_50 cursor-pointer font-normal min-w-[199px] not-italic py-[19px] rounded-[28px] text-[14px] text-bluegray_800 text-center w-[auto]">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CreateEventPopupModal;

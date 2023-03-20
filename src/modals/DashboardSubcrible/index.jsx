import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 md:h-[184px] h-[252px] p-[16px] md:px-[20px] relative rounded-[4px] w-[100%]">
            <div className="absolute flex flex-col gap-[32px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[87%]">
              <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                <Text
                  className="md:ml-[0] ml-[3px] not-italic text-bluegray_800 text-center w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Subcrible
                </Text>
                <Text
                  className="not-italic text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Subcribe our newletter and get notification to stay update
                </Text>
              </div>
              <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                <Text
                  className="not-italic text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <div className="h-[56px] relative w-[100%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[20px] ml-[auto] mr-[20px] my-[auto] w-[20px]"
                    alt="cursor"
                  />
                  <Input
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid flex inset-[0] justify-center m-[auto] pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                    type="email"
                    name="email_One"
                    placeholder="Ackermanlhn@gmail.com"
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="mt-[auto] mb-[1px] mr-[16px] bottom-[2%] right-[4%] absolute"
                        alt="mail"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
            <Img
              src="images/img_close_bluegray_400.svg"
              className="common-pointer absolute h-[24px] right-[6%] top-[6%] w-[24px]"
              onClick={props.onRequestClose}
              alt="close"
            />
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardSubcribleModal;

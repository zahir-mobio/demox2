import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const NoPromotionPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start pb-[32px] md:px-[20px] px-[32px] rounded-[4px] w-[100%]">
            <div className="bg-white_A700 flex h-[298px] items-center justify-end p-[47px] sm:px-[20px] md:px-[40px] w-[298px]">
              <Img
                src="images/img_group_bluegray_900.svg"
                className="h-[194px] mt-[8px] w-[auto]"
                alt="group"
              />
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-end md:w-[100%] w-[auto]">
              <Text
                className="mt-[2px] not-italic text-bluegray_800 text-center w-[auto]"
                as="h2"
                variant="h2"
              >
                No promotion
              </Text>
              <Text
                className="not-italic text-bluegray_800 text-center w-[auto]"
                as="h6"
                variant="h6"
              >
                Follow us to review lattest promotion
              </Text>
            </div>
            <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[199px] mt-[48px] not-italic py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
              Yes, I understand
            </Button>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default NoPromotionPopupModal;

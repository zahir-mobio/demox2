import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const DeletePopupModal = (props) => {
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
            <Img
              src="images/img_emptybox11.svg"
              className="h-[298px] w-[298px]"
              alt="emptyboxEleven"
            />
            <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[18px] items-center justify-end w-[100%]">
                <Text
                  className="mt-[2px] not-italic text-bluegray_800 text-center w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Are you sure to delete item?
                </Text>
                <Text
                  className="not-italic text-bluegray_800 text-center w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  This item will be delete from your cart
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Button className="bg-red_600 cursor-pointer font-normal min-w-[199px] not-italic py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  Yes, Delete item
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

export default DeletePopupModal;

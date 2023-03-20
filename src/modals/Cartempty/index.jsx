import React from "react";
import ModalProvider from "react-modal";

import { Text, Img } from "components";

const CartemptyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[29%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start p-[48px] md:px-[20px] w-[100%]">
            <div className="flex flex-col justify-start mb-[50px] mt-[4px] pb-[40px] w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="mt-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  My Cart
                </Text>
                <Img
                  src="images/img_close.svg"
                  className="common-pointer h-[32px] w-[32px]"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </div>
              <Img
                src="images/img_20.svg"
                className="h-[152px] md:ml-[0] ml-[119px] mt-[75px] w-[auto]"
                alt="Twenty"
              />
              <Text
                className="font-normal md:ml-[0] ml-[127px] mt-[42px] not-italic text-bluegray_400 text-center w-[auto]"
                as="h5"
                variant="h5"
              >
                No item. Add more
              </Text>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartemptyModal;

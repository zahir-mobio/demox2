import React from "react";
import ModalProvider from "react-modal";

import { Img, Text, Button } from "components";

const DashboardPaymentsuccessfulModal = (props) => {
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[28%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex items-center justify-end mt-[64px] p-[32px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-center justify-start mt-[86px] w-[100%]">
              <Img
                src="images/img_layer2.svg"
                className="h-[152px] w-[auto]"
                alt="layerTwo"
              />
              <div className="flex flex-col gap-[14px] items-center justify-start mt-[48px] md:w-[100%] w-[auto]">
                <Text
                  className="not-italic text-bluegray_800 text-center w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Payment Successful
                </Text>
                <Text
                  className="leading-[22.00px] not-italic text-bluegray_800 text-center"
                  as="h6"
                  variant="h6"
                ></Text>
              </div>
              <Text
                className="mt-[19px] not-italic text-bluegray_400 text-center w-[auto]"
                as="h6"
                variant="h6"
              >
                Send receipt to
              </Text>
              <div className="flex flex-row gap-[16px] items-center justify-center mt-[17px] md:w-[100%] w-[53%]">
                <Button className="border-[1px] border-indigo_50 border-solid flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[20px]"
                    alt="lightbulb"
                  />
                </Button>
                <Button
                  className="common-pointer border-[1px] border-indigo_50 border-solid flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]"
                  onClick={handleNavigate}
                >
                  <Img
                    src="images/img_facebook.svg"
                    className="h-[20px]"
                    alt="facebook"
                  />
                </Button>
                <div className="border-[1px] border-indigo_50 border-solid h-[48px] rounded-[50%] w-[48px]"></div>
              </div>
              <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[336px] mt-[32px] not-italic py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                Yes, I understand
              </Button>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardPaymentsuccessfulModal;

import React from "react";
import ModalProvider from "react-modal";

import { Text, Button, Line, Img } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[53%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start mt-[64px] p-[28px] md:px-[20px] rounded-[4px] w-[100%]">
            <div className="flex flex-col items-start justify-start my-[4px] md:w-[100%] w-[99%]">
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <Text
                  className="not-italic text-bluegray_800 text-center w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Pick a wallet
                </Text>
              </div>
              <Text
                className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal h-[56px] md:max-w-[100%] max-w-[699px] mt-[32px] not-italic sm:px-[20px] px-[35px] py-[17px] rounded-[4px] text-bluegray_400 text-left w-[100%]"
                as="h5"
                variant="h5"
              >
                0.0
              </Text>
              <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start mt-[32px] md:w-[100%] w-[79%]">
                <Button className="bg-gray_50 cursor-pointer font-normal min-w-[116px] not-italic py-[15px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                  200.000đ
                </Button>
                <Button className="bg-gray_50 cursor-pointer font-normal min-w-[116px] not-italic py-[15px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                  500.000đ
                </Button>
                <Button className="bg-gray_50 cursor-pointer font-normal min-w-[126px] not-italic py-[15px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                  1.000.000đ
                </Button>
                <Button className="bg-gray_50 cursor-pointer font-normal min-w-[129px] not-italic py-[15px] rounded-[4px] text-[14px] text-bluegray_800 text-center w-[auto]">
                  2.000.000đ
                </Button>
              </div>
              <Line className="bg-indigo_50 h-[1px] mt-[32px] outline outline-[0.5px] outline-black_900 w-[100%]" />
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[31px] w-[100%]">
                <div className="flex flex-col h-[344px] items-start justify-start pt-[2px] w-[344px]">
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Available Wallet
                  </Text>
                  <div className="border-[1px] border-indigo_50 border-solid md:h-[45px] h-[64px] mt-[17px] p-[16px] relative rounded-[4px] w-[100%]">
                    <Img
                      src="images/img_menu.svg"
                      className="h-[28px] w-[auto]"
                      alt="menu"
                    />
                    <Text
                      className="absolute font-normal h-[max-content] inset-y-[0] left-[17%] my-[auto] not-italic text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Torus
                    </Text>
                  </div>
                  <div className="bg-gray_50 border-[1px] border-indigo_50 border-solid flex flex-row items-center justify-between mt-[16px] p-[16px] rounded-[4px] w-[100%]">
                    <div className="md:h-[28px] h-[32px] pb-[2px] pr-[2px] relative w-[40%]">
                      <Img
                        src="images/img_menu.svg"
                        className="absolute h-[28px] left-[0] top-[0] w-[auto]"
                        alt="menu_One"
                      />
                      <Text
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[6%] text-bluegray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Metamask
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_900.svg"
                      className="h-[20px] w-[20px]"
                      alt="arrowright"
                    />
                  </div>
                  <div className="border-[1px] border-indigo_50 border-solid md:h-[44px] h-[64px] mt-[16px] p-[16px] relative rounded-[4px] w-[100%]">
                    <Img
                      src="images/img_menu.svg"
                      className="h-[28px] w-[auto]"
                      alt="menu_Two"
                    />
                    <Text
                      className="absolute font-normal h-[max-content] inset-y-[0] left-[17%] my-[auto] not-italic text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Portis
                    </Text>
                  </div>
                  <div className="border-[1px] border-indigo_50 border-solid md:h-[44px] h-[64px] mt-[16px] p-[16px] relative rounded-[4px] w-[100%]">
                    <Img
                      src="images/img_menu.svg"
                      className="absolute h-[28px] left-[25%] top-[0] w-[auto]"
                      alt="menu_Three"
                    />
                    <Text
                      className="absolute font-normal h-[max-content] inset-y-[0] left-[17%] my-[auto] not-italic text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Fortmatic
                    </Text>
                  </div>
                </div>
                <Line className="bg-indigo_50 md:h-[1px] h-[344px] outline outline-[0.5px] outline-black_900 md:w-[100%] w-[1px]" />
                <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                  <div className="md:h-[41px] h-[46px] pb-[2px] relative w-[100%]">
                    <div className="absolute flex inset-x-[0] items-end justify-start mx-[auto] pl-[204px] sm:pl-[20px] md:pl-[40px] top-[0] w-[100%]">
                      <div className="flex items-end justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-indigo_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Refresh
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        QR Code
                      </Text>
                      <Text
                        className="mt-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Scan this QR code{" "}
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_barcodeqr1.svg"
                    className="h-[279px] w-[auto]"
                    alt="barcodeqrOne"
                  />
                </div>
              </div>
              <div className="flex items-center justify-start mt-[32px] w-[100%]">
                <Button className="bg-deep_orange_300 cursor-pointer font-normal md:min-w-[100%] min-w-[699px] not-italic py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  Pay now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardRechargemoneyModal;

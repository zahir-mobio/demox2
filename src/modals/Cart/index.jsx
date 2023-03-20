import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, List, Line, Button } from "components";

const CartModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[29%]"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col gap-[47px] items-center justify-center p-[48px] md:px-[20px] w-[100%]">
            <div className="flex flex-row items-start justify-between mt-[4px] w-[100%]">
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
            <div className="flex flex-col items-start justify-start mb-[16px] w-[100%]">
              <List
                className="flex-col gap-[32px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-end justify-start my-[0] pl-[134px] sm:pl-[20px] md:pl-[40px] w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Img
                          src="images/img_pagedisabled.svg"
                          className="h-[24px] w-[24px]"
                          alt="minus"
                        />
                      </div>
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[43%]">
                      <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center p-[9px] w-[32px]">
                        <Img
                          src="images/img_pagedisabled.svg"
                          className=""
                          alt="pagedisabled"
                        />
                      </Button>
                      <Text
                        className="ml-[20px] not-italic text-bluegray_900 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Img
                        src="images/img_plus_indigo_50.svg"
                        className="h-[32px] ml-[21px] w-[32px]"
                        alt="plus"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between py-[2px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Text
                        className="not-italic text-bluegray_800 text-right w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                <div className="flex flex-1 items-end justify-start my-[0] pl-[134px] sm:pl-[20px] md:pl-[40px] w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                      <div className="flex flex-row items-center justify-between py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Basic T-shirt
                        </Text>
                        <Img
                          src="images/img_pagedisabled.svg"
                          className="h-[24px] w-[24px]"
                          alt="minus"
                        />
                      </div>
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[43%]">
                      <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center p-[9px] w-[32px]">
                        <Img
                          src="images/img_pagedisabled.svg"
                          className=""
                          alt="pagedisabled"
                        />
                      </Button>
                      <Text
                        className="ml-[20px] not-italic text-bluegray_900 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Img
                        src="images/img_plus_indigo_50.svg"
                        className="h-[32px] ml-[21px] w-[32px]"
                        alt="plus"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between py-[2px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Price
                      </Text>
                      <Text
                        className="not-italic text-bluegray_800 text-right w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-row items-start justify-between mt-[64px] w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Total
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_800 text-right w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  $240.0
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between mt-[32px] md:w-[100%] w-[98%]">
                <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[186px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                  Purchase now
                </Button>
                <Button className="bg-deep_orange_50 cursor-pointer font-normal min-w-[185px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-deep_orange_300 w-[auto]">
                  Add to cart
                </Button>
              </div>
              <div className="flex items-end justify-start mt-[32px] sm:pl-[20px] md:pl-[40px] pl-[48px] md:w-[100%] w-[65%]">
                <div className="flex flex-col gap-[7px] items-start justify-end md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Free nationwide shipping
                  </Text>
                  <Text
                    className="not-italic text-bluegray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    (For order begin $100.0)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartModal;

import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, CheckBox, Input, Img, Button } from "components";
import Header from "components/Header";

const PaymentInfoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[750px] mb-[274px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[33px] items-center justify-start mb-[43px] mt-[9px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Checkout
                  </Text>
                  <Text
                    className="font-inter font-normal mb-[2px] sm:mt-[0] mt-[7px] not-italic text-bluegray_400 text-right w-[auto]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-start justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                    <div className="flex flex-col gap-[11px] items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Payment information
                      </Text>
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Fill form below
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[277px] w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start md:w-[100%] w-[23%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                          inputClassName="mr-[5px]"
                          name="remember"
                          id="remember"
                          label="Cash on delivery"
                        ></CheckBox>
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                          inputClassName="bg-bluegray_400_87 h-[19px] mr-[5px] outline outline-[0.5px] outline-black_900_87 w-[19px]"
                          name="remember_One"
                          id="remember_One"
                          label="Credit card"
                        ></CheckBox>
                        <CheckBox
                          className="font-normal not-italic sm:pr-[20px] text-[14px] text-bluegray_800 text-left"
                          inputClassName="mr-[5px]"
                          name="remember_Two"
                          id="remember_Two"
                          label="RiriBa wallet"
                        ></CheckBox>
                      </div>
                      <Line className="bg-indigo_50 h-[1px] mt-[32px] w-[100%]" />
                      <div className="flex flex-col gap-[24px] items-center justify-start mt-[31px] w-[100%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Card number
                          </Text>
                          <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex items-start justify-start p-[16px] rounded-[4px] w-[100%]">
                            <Input
                              wrapClassName="md:ml-[0] ml-[4px] pl-[35px] py-[2px] w-[27%]"
                              className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pl-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                              type="number"
                              name="frame"
                              placeholder="Enter your card number"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Card holder
                            </Text>
                            <div className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex items-start justify-start p-[16px] rounded-[4px] w-[100%]">
                              <Input
                                wrapClassName="flex md:ml-[0] ml-[4px] pr-[3px] w-[54%]"
                                className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                                type="text"
                                name="frame_One"
                                placeholder="Enter your name"
                                prefix={
                                  <Img
                                    src="images/img_user_bluegray_900_20x20.svg"
                                    className="mt-[auto] mb-[1px] mr-[16px]"
                                    alt="user"
                                  />
                                }
                              ></Input>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              CVV
                            </Text>
                            <Input
                              wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid flex pb-[18px] pl-[20px] pr-[35px] pt-[15px] rounded-[4px] w-[100%]"
                              className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                              name="frame_Two"
                              placeholder="***"
                              prefix={
                                <Img
                                  src="images/img_lock_bluegray_900.svg"
                                  className="mt-[2px] mb-[auto] mr-[16px]"
                                  alt="lock"
                                />
                              }
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[33%]">
                    <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_rectangle_118x110.png"
                            className="h-[118px] md:h-[auto] object-cover w-[auto]"
                            alt="rectangle"
                          />
                          <div className="flex flex-col gap-[38px] items-start justify-start w-[auto]">
                            <div className="flex flex-col gap-[14px] items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Polo Shirt
                              </Text>
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Color: Grey, S
                              </Text>
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
                        <Line className="bg-indigo_50 h-[1px] mt-[32px] w-[100%]" />
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid mt-[31px] pl-[20px] pr-[12px] py-[18px] rounded-[8px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                          name="group_One"
                          placeholder="Enter reffered code"
                        ></Input>
                        <Line className="bg-indigo_50 h-[1px] mt-[32px] w-[100%]" />
                        <div className="flex flex-col gap-[20px] items-center justify-start mt-[31px] w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Price
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-right w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $120.0
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between pl-[2px] pt-[2px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Shipping fee
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-right w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $10.0
                            </Text>
                          </div>
                        </div>
                        <Line className="bg-indigo_50 h-[1px] mt-[32px] w-[100%]" />
                        <div className="flex items-center justify-start mt-[31px] w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
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
                              $130.0
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] items-center justify-start mt-[32px] w-[100%]">
                          <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[306px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                            Purchase now
                          </Button>
                          <Button className="bg-gray_50 cursor-pointer font-normal min-w-[306px] not-italic py-[15px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                            Scan QR code
                          </Button>
                        </div>
                        <Text
                          className="leading-[22.00px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[98%]"
                          as="h6"
                          variant="h6"
                        >
                          By clicking “Purchase” button, I agree with RiriBa
                          Term and Policy
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] pr-[11px] w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_arrowleft_bluegray_100.svg"
                          className="mr-[16px]"
                          alt="arrow_left"
                        />
                      }
                    >
                      <div className="font-normal not-italic text-[16px] text-indigo_400 text-left">
                        Back to shopping cart
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInfoPage;

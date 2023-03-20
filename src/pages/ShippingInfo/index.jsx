import React from "react";

import Sidebar3 from "components/Sidebar3";
import {
  Line,
  Text,
  Input,
  TextArea,
  SelectBox,
  Img,
  Button,
} from "components";
import Header from "components/Header";

const ShippingInfoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <Sidebar3 className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[240px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[990px] mb-[34px] md:w-[100%] w-[1px]" />
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
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                    <div className="flex flex-col items-start justify-start mb-[4px] w-[100%]">
                      <div className="flex flex-col gap-[11px] items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Shipping information
                        </Text>
                        <Text
                          className="not-italic text-bluegray_900 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fill form below
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[10px] items-start justify-start mt-[32px] pt-[2px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[12px] pt-[19px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                          type="text"
                          name="groupSeventyNine"
                          placeholder="Enter your name"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[23px] items-center justify-between mt-[24px] w-[100%]">
                        <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Email address
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[35px] pt-[19px] rounded-[4px] w-[100%]"
                            className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                            type="email"
                            name="group_One"
                            placeholder="Enter your email"
                          ></Input>
                        </div>
                        <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Phone number
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[35px] pt-[19px] rounded-[4px] w-[100%]"
                            className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                            type="number"
                            name="group_Two"
                            placeholder="Enter your phone number"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] items-start justify-start mt-[24px] pt-[2px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Your address
                        </Text>
                        <TextArea
                          className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal not-italic pb-[35px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[18px] rounded-[4px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group_Three"
                          placeholder="Enter full address"
                        ></TextArea>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-[24px] pt-[3px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Country
                        </Text>
                        <SelectBox
                          className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal not-italic pl-[20px] sm:pr-[20px] pr-[24px] py-[17px] rounded-[4px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="country_One"
                          placeholder="Vietnam"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="h-[6px] mr-[0] w-[11px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                      <div className="flex flex-col gap-[10px] items-start justify-start mt-[24px] pt-[2px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Note
                        </Text>
                        <TextArea
                          className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal not-italic pb-[35px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[19px] rounded-[4px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group_Four"
                          placeholder="Write somethhing for us..."
                        ></TextArea>
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
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid mt-[31px] pl-[20px] pr-[35px] py-[18px] rounded-[8px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                          name="group_Five"
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

export default ShippingInfoPage;

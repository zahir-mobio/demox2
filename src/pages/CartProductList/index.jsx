import React from "react";

import Sidebar2 from "components/Sidebar2";
import { Text, CheckBox, List, Line, Img, Button, Input } from "components";
import Header from "components/Header";

const CartProductListPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Sidebar2 className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
        <div className="flex-1 h-[1071px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-gray_50 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[32px] items-center justify-start mt-[9px] w-[100%]">
              <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
                <Text
                  className="font-poppins text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Cart
                </Text>
                <Text
                  className="font-inter font-normal mb-[3px] mt-[6px] not-italic text-bluegray_400 text-right w-[auto]"
                  as="h5"
                  variant="h5"
                ></Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between w-[100%]">
                <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-end p-[24px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[67%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[8px] mt-[11px] not-italic text-bluegray_900 text-left w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Product List
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[28px] mt-[37px] pr-[2px] pt-[2px] md:w-[100%] w-[93%]">
                    <div className="flex h-[20px] items-center justify-end mb-[2px] sm:w-[100%] w-[20px]">
                      <CheckBox
                        className=""
                        inputClassName="bg-bluegray_400 mr-[5px]"
                        name="file_One"
                        id="file_One"
                      ></CheckBox>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[32px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Product
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[201px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[74px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Quantity
                    </Text>
                    <Text
                      className="font-normal md:ml-[0] ml-[96px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Total
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[12px] grid items-center md:ml-[0] ml-[8px] mt-[16px] w-[98%]"
                    orientation="vertical"
                  >
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                        <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                          <CheckBox
                            className=""
                            inputClassName="bg-bluegray_400 mr-[5px]"
                            name="file"
                            id="file"
                          ></CheckBox>
                        </div>
                        <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                          <Img
                            src="images/img_rectangle_86x80.png"
                            className="h-[86px] md:h-[auto] object-cover w-[35%]"
                            alt="rectangle"
                          />
                          <div className="flex items-center justify-start w-[55%]">
                            <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                              <div className="flex items-start justify-end pr-[2px] py-[2px] w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  Polo Shirt
                                </Text>
                              </div>
                              <Text
                                className="not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Color: Grey, S
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[30px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $120.0
                        </Text>
                        <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[17%]">
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
                          <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center ml-[21px] p-[9px] w-[32px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[13px]"
                              alt="plus"
                            />
                          </Button>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[49px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $120.0
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className=""
                          inputClassName="bg-bluegray_400 mr-[5px]"
                          name="file"
                          id="file3"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_rectangle_3.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="rectangle"
                        />
                        <div className="flex items-center justify-start w-[55%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-end pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Basic T- Shirt
                              </Text>
                            </div>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Color: Grey, S
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[17%]">
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
                        <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center ml-[21px] p-[9px] w-[32px]">
                          <Img
                            src="images/img_plus.svg"
                            className="h-[13px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className=""
                          inputClassName="bg-bluegray_400 mr-[5px]"
                          name="file"
                          id="file4"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_rectangle_4.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="rectangle"
                        />
                        <div className="flex items-center justify-start w-[55%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start pr-[5px] pt-[5px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Trendy Polo
                              </Text>
                            </div>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Color: Grey, S
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[17%]">
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
                        <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center ml-[21px] p-[9px] w-[32px]">
                          <Img
                            src="images/img_plus.svg"
                            className="h-[13px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className=""
                          inputClassName="bg-bluegray_400 mr-[5px]"
                          name="file"
                          id="file5"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_rectangle_5.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="rectangle"
                        />
                        <div className="flex items-center justify-start w-[55%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-end pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Over Shirt
                              </Text>
                            </div>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Color: Grey, S
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[17%]">
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
                        <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center ml-[21px] p-[9px] w-[32px]">
                          <Img
                            src="images/img_plus.svg"
                            className="h-[13px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className=""
                          inputClassName="bg-bluegray_400 mr-[5px]"
                          name="file"
                          id="file6"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_rectangle_6.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="rectangle"
                        />
                        <div className="flex items-center justify-start w-[55%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-end pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Avo T-Shirt
                              </Text>
                            </div>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Color: Grey, S
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[17%]">
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
                        <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center ml-[21px] p-[9px] w-[32px]">
                          <Img
                            src="images/img_plus.svg"
                            className="h-[13px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[90%]" />
                    <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[8px] w-[100%]">
                      <div className="flex sm:flex-1 h-[20px] items-center justify-end md:ml-[0] ml-[12px] md:mt-[0] mt-[33px] sm:w-[100%] w-[20px]">
                        <CheckBox
                          className=""
                          inputClassName="bg-bluegray_400 mr-[5px]"
                          name="file"
                          id="file7"
                        ></CheckBox>
                      </div>
                      <div className="flex md:flex-1 flex-row gap-[24px] items-start justify-center md:ml-[0] ml-[32px] md:w-[100%] w-[34%]">
                        <Img
                          src="images/img_rectangle_7.png"
                          className="h-[86px] md:h-[auto] object-cover w-[35%]"
                          alt="rectangle"
                        />
                        <div className="flex items-center justify-start w-[55%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-end pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Bomber
                              </Text>
                            </div>
                            <Text
                              className="not-italic text-bluegray_400 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Color: Grey, S
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[30px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                      <div className="flex md:flex-1 flex-row items-center justify-center md:ml-[0] ml-[68px] md:w-[100%] w-[17%]">
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
                        <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center ml-[21px] p-[9px] w-[32px]">
                          <Img
                            src="images/img_plus.svg"
                            className="h-[13px]"
                            alt="plus"
                          />
                        </Button>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[49px] md:mt-[0] mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        $120.0
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[33%]">
                  <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                      <Text
                        className="not-italic text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Promotion
                      </Text>
                      <Input
                        wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[12px] py-[17px] rounded-[4px] w-[100%]"
                        className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                        name="groupNine"
                        placeholder="Enter code"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-center md:w-[100%] w-[70%]">
                      <Img
                        src="images/img_offer.svg"
                        className="h-[20px] w-[20px]"
                        alt="offer"
                      />
                      <Text
                        className="mr-[29px] not-italic text-indigo_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Click to find Promotion
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
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
                        <div className="flex flex-row items-start justify-between pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Shipping fee
                          </Text>
                          <Text
                            className="font-normal h-[20px] not-italic text-bluegray_800 text-right w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $0
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
                            $120.0
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
                        By clicking “Purchase” button, I agree with RiriBa Term
                        and Policy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Header className="absolute bg-white_A700 flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]" />
          <Line className="absolute bg-indigo_50 h-[1071px] inset-y-[0] left-[0] my-[auto] w-[1px]" />
        </div>
      </div>
    </>
  );
};

export default CartProductListPage;

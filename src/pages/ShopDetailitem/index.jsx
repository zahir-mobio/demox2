import React from "react";

import Sidebar2 from "components/Sidebar2";
import { Line, Text, List, Img, Button } from "components";
import Header from "components/Header";

const ShopDetailitemPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar2 className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 h-[1979px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[9px] mt-[12px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 text-right w-[auto]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="bg-white_A700 flex items-center justify-start mt-[30px] p-[30px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col gap-[48px] items-center justify-start mb-[38px] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[61%]">
                        <List
                          className="flex-col gap-[20px] grid w-[auto]"
                          orientation="vertical"
                        >
                          <Img
                            src="images/img_rectangle.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="rectangle"
                          />
                          <Img
                            src="images/img_rectangle_126x116.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="rectangle"
                          />
                          <Img
                            src="images/img_rectangle_1.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="rectangle"
                          />
                          <Img
                            src="images/img_rectangle_2.png"
                            className="h-[126px] md:h-[auto] my-[0] object-cover w-[100%]"
                            alt="rectangle"
                          />
                        </List>
                        <Img
                          src="images/img_rectangle_564x524.png"
                          className="h-[564px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                          alt="rectangle"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[36%]">
                        <div className="flex flex-col gap-[19px] items-start justify-start pt-[2px] md:w-[100%] w-[53%]">
                          <Text
                            className="not-italic text-bluegray_900 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Polo Shirt
                          </Text>
                          <div className="flex items-start justify-end w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Code: #1230
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="mt-[33px] not-italic text-center text-indigo_400 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $120.0
                        </Text>
                        <div className="flex flex-col gap-[17px] items-start justify-start mt-[32px] pr-[2px] pt-[2px] md:w-[100%] w-[28%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose color
                          </Text>
                          <Img
                            src="images/img_file.svg"
                            className="h-[24px] w-[auto]"
                            alt="file_One"
                          />
                        </div>
                        <div className="flex flex-col gap-[16px] items-start justify-start mt-[32px] pr-[3px] pt-[3px] md:w-[100%] w-[35%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose quantity
                          </Text>
                          <div className="flex flex-row items-center justify-start md:w-[100%] w-[86%]">
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
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[32px] md:w-[100%] w-[39%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose size
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start mt-[17px] md:w-[100%] w-[75%]">
                            <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                              S
                            </Button>
                            <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                              M
                            </Button>
                            <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                              L
                            </Button>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[2px] mt-[19px] not-italic text-center text-indigo_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            How to find your size?
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between mt-[32px] w-[100%]">
                          <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[186px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                            Purchase now
                          </Button>
                          <Button className="bg-deep_orange_50 cursor-pointer font-normal min-w-[185px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-deep_orange_300 w-[auto]">
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[26px] items-start justify-start md:w-[100%] w-[15%]">
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <div className="bg-indigo_400 h-[2px] my-[9px] w-[26%]"></div>
                          <Text
                            className="font-normal not-italic text-indigo_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product Detail
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Reviews
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[54%]">
                        <div className="flex flex-col gap-[17px] items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            PRODUCT DETAIL
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] not-italic text-bluegray_800 text-left w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            We use the Join Life label on clothing that is
                            produced using technology and raw materials that
                            help us to reduce the environmental impact of our
                            products.{" "}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            SPECIFICATION
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] not-italic text-bluegray_800 text-left"
                            as="h5"
                            variant="h5"
                          >
                            <>
                              Size: S<br />
                              Material: Cotton
                              <br />
                              Weight: 1kg
                              <br />
                              Original: Vietnam
                              <br />
                              Category: T-Shirt
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-poppins md:gap-[40px] items-start justify-between mt-[35px] w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Related product
                  </Text>
                  <div className="flex flex-row font-inter gap-[16px] items-center justify-between pl-[3px] w-[9%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      See all
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_100.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[30px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="images/img_3427408800611.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[82px]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] my-[1px]"
                              alt="airplane"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[98px]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] my-[1px]"
                              alt="offer"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start pb-[27px] md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[14px] items-center justify-start py-[2px] w-[100%]">
                            <Text
                              className="not-italic text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Avo T-Shirt
                            </Text>
                            <div className="flex flex-row gap-[6px] items-start justify-between w-[100%]">
                              <Text
                                className="font-inter font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-poppins line-through not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[48px] rounded-[50%] w-[48px]"
                            alt="floatingicon"
                          />
                          <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary.svg"
                              className=""
                              alt="buttonprimary"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="images/img_3427408800611_353x273.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[82px]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] my-[1px]"
                              alt="airplane"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[98px]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] my-[1px]"
                              alt="offer"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start pb-[27px] md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[14px] items-center justify-start py-[2px] w-[100%]">
                            <Text
                              className="not-italic text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Basic T-Shirt
                            </Text>
                            <div className="flex flex-row gap-[6px] items-start justify-between w-[100%]">
                              <Text
                                className="font-inter font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-poppins line-through not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[48px] rounded-[50%] w-[48px]"
                            alt="floatingicon"
                          />
                          <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary.svg"
                              className=""
                              alt="buttonprimary"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="images/img_3427408800611_1.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[82px]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] my-[1px]"
                              alt="airplane"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[98px]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] my-[1px]"
                              alt="offer"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start pb-[27px] md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[12px] items-center justify-end py-[2px] w-[100%]">
                            <Text
                              className="not-italic text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Trendy Polo
                            </Text>
                            <div className="flex flex-row gap-[6px] items-start justify-between w-[100%]">
                              <Text
                                className="font-inter font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-poppins line-through not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[48px] rounded-[50%] w-[48px]"
                            alt="floatingicon"
                          />
                          <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary.svg"
                              className=""
                              alt="buttonprimary"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="h-[353px] relative w-[100%]">
                      <Img
                        src="images/img_3427408800611_2.png"
                        className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                        alt="3427408800611"
                      />
                      <div className="absolute flex flex-row gap-[8px] items-center justify-center right-[7%] top-[6%] w-[69%]">
                        <Button
                          className="bg-red_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[82px]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] my-[1px]"
                              alt="airplane"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-left text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="bg-indigo_400_19 cursor-pointer flex h-[30px] items-center justify-center px-[16px] py-[9px] rounded-[4px] w-[98px]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] my-[1px]"
                              alt="offer"
                            />
                          }
                        >
                          <div className="font-normal not-italic text-[12px] text-indigo_400 text-left">
                            Flash sale
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                      <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start pb-[27px] md:w-[100%] w-[96%]">
                          <div className="flex flex-col gap-[14px] justify-start py-[2px] w-[100%]">
                            <Text
                              className="md:ml-[0] ml-[14px] not-italic text-bluegray_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Over Shirt
                            </Text>
                            <div className="flex flex-row gap-[6px] items-start justify-between w-[100%]">
                              <Text
                                className="font-inter font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-poppins line-through not-italic text-bluegray_400 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_floatingicon.svg"
                            className="h-[48px] rounded-[50%] w-[48px]"
                            alt="floatingicon"
                          />
                          <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                            <Img
                              src="images/img_buttonprimary.svg"
                              className=""
                              alt="buttonprimary"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetailitemPage;

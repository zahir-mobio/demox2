import React from "react";

import { Line, Img, Text, List, Button } from "components";
import Header1 from "components/Header1";

const ShopReviewsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <div className="h-[1024px] md:px-[20px] relative md:w-[100%] w-[17%]">
            <Line className="bg-indigo_50 h-[690px] ml-[auto] mr-[21px] mt-[60px] w-[1px]" />
            <div className="absolute bg-white_A700 flex flex-col gap-[36px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[29px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_menu.svg"
                className="h-[28px] mt-[7px] w-[auto]"
                alt="menu"
              />
              <div className="flex flex-col items-start justify-start mb-[493px] md:w-[100%] w-[87%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_grid.svg"
                    className="h-[20px] w-[20px]"
                    alt="grid"
                  />
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[65%]">
                  <Img
                    src="images/img_user.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer
                  </Text>
                </div>
                <div className="flex flex-row gap-[34px] items-center justify-between md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_sort.svg"
                      className="h-[20px] w-[20px]"
                      alt="sort"
                    />
                    <Text
                      className="mt-[3px] not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Message
                    </Text>
                  </div>
                  <Text
                    className="bg-red_600 flex font-normal h-[24px] items-center justify-center not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
                    variant="body1"
                  >
                    3
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[3px] mt-[31px] md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_folder.svg"
                    className="h-[20px] w-[20px]"
                    alt="folder"
                  />
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    File
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[62%]">
                  <Img
                    src="images/img_calendar.svg"
                    className="h-[20px] w-[20px]"
                    alt="calendar"
                  />
                  <Text
                    className="mt-[2px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Calender
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[45%]">
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px] w-[20px]"
                    alt="trash"
                  />
                  <Text
                    className="mt-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Shop
                  </Text>
                </div>
                <div className="flex items-end justify-start md:ml-[0] ml-[3px] mt-[32px] md:w-[100%] w-[auto]">
                  <Text
                    className="not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Cart
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-end justify-start mt-[30px] md:w-[100%] w-[60%]">
                  <div className="bg-white_A700 h-[26px] w-[26px]"></div>
                  <Text
                    className="my-[4px] not-italic text-bluegray_400 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Settings
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-indigo_50 h-[1979px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-[20px] md:w-[100%] w-[84%]">
            <Header1 className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[22px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[10px] mt-[13px] w-[100%]">
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
                  <div className="flex flex-col gap-[48px] items-center justify-start mb-[50px] w-[100%]">
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
                      <div className="flex md:flex-1 flex-col gap-[25px] items-start justify-start pt-[2px] md:w-[100%] w-[11%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Product Detail
                        </Text>
                        <div className="flex flex-row gap-[12px] items-center justify-start w-[100%]">
                          <div className="bg-indigo_400 h-[2px] my-[9px] w-[35%]"></div>
                          <Text
                            className="font-normal not-italic text-indigo_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Reviews
                          </Text>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 flex-col gap-[20px] grid md:w-[100%] w-[66%]"
                        orientation="vertical"
                      >
                        <div className="border-[1px] border-indigo_50 border-solid flex items-center justify-start my-[0] p-[32px] sm:px-[20px] rounded-[4px] w-[100%]">
                          <div className="flex flex-col gap-[40px] items-end justify-start w-[100%]">
                            <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between w-[100%]">
                              <div className="flex md:flex-1 sm:flex-col flex-row gap-[20px] items-start justify-between md:w-[100%] w-[78%]">
                                <div className="flex h-[48px] items-center justify-start w-[48px]">
                                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                                    <div className="flex h-[48px] items-center justify-start w-[48px]">
                                      <Img
                                        src="images/img_tintin22_48x48.png"
                                        className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                        alt="tintinTwentyTwo"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-start sm:w-[100%] w-[87%]">
                                  <div className="flex flex-col gap-[10px] items-start justify-start pr-[3px] pt-[3px] w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Jimo
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      {
                                        "Nice T-Shirt, I have a soft spot for buying this stuff <3 <3"
                                      }
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="font-normal md:mt-[0] mt-[3px] not-italic text-bluegray_400 text-right w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[24px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start pr-[6px] w-[62%]">
                                <Img
                                  src="images/img_refresh.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="refresh"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[28%]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border-[1px] border-indigo_50 border-solid flex items-center justify-start my-[0] p-[32px] sm:px-[20px] rounded-[4px] w-[100%]">
                          <div className="flex flex-col gap-[16px] items-end justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                              <div className="flex sm:flex-1 items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[68px] sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex flex-col gap-[5px] items-start justify-start pt-[4px] w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                      as="h4"
                                      variant="h4"
                                    >
                                      Ackerman_lhn
                                    </Text>
                                    <Text
                                      className="font-normal leading-[24.00px] not-italic text-bluegray_800 text-left w-[100%]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Oh my god, i am really addicted to this
                                      brand a lot. I define myself as a big fan
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="font-normal sm:mt-[0] mt-[3px] not-italic text-bluegray_400 text-right w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[24px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
                              <div className="flex flex-row gap-[8px] items-center justify-start pr-[6px] w-[62%]">
                                <Img
                                  src="images/img_refresh.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="refresh"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[28%]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite"
                                />
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
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
                <div className="flex font-inter items-center justify-start mt-[30px] w-[100%]">
                  <List
                    className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start sm:ml-[0] pb-[32px] rounded-[8px] shadow-bs w-[100%]">
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
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start sm:ml-[0] pb-[32px] rounded-[8px] shadow-bs w-[100%]">
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
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start sm:ml-[0] pb-[32px] rounded-[8px] shadow-bs w-[100%]">
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
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start sm:ml-[0] pb-[32px] rounded-[8px] shadow-bs w-[100%]">
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
      </div>
    </>
  );
};

export default ShopReviewsPage;

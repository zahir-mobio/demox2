import React from "react";

import Sidebar2 from "components/Sidebar2";
import { Line, Text, Img, SeekBar, CheckBox, Button, Input } from "components";
import Header from "components/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CloseSVG } from "../../assets/images";

const ShopSearchPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar2 className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 h-[1538px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-between mb-[25px] mt-[12px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:w-[100%] w-[24%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <div className="flex font-inter h-[1050px] justify-end relative w-[100%]">
                    <div className="flex flex-col gap-[7px] h-[100%] items-start justify-start mb-[247px] mt-[auto] mx-[auto] pr-[2px] py-[2px] w-[auto]">
                      <Text
                        className="md:ml-[0] ml-[3px] not-italic text-center text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Balance
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        $0.0
                      </Text>
                    </div>
                    <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[31px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                      <div className="flex flex-col items-start justify-start pt-[5px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Categories
                        </Text>
                        <Accordion
                          preExpanded={[0]}
                          className="flex flex-col gap-[19px] mt-[32px] w-[100%]"
                        >
                          {[...Array(4)].map((item, index) => (
                            <AccordionItem uuid={index} key={Math.random()}>
                              <div className="flex items-center justify-start pb-[21px] w-[100%]">
                                <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                                  <AccordionItemHeading className="w-full">
                                    <AccordionItemButton>
                                      <AccordionItemState>
                                        {({ expanded }) => (
                                          <div className="flex flex-row items-center justify-between w-[100%]">
                                            <Text
                                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                              as="h5"
                                              variant="h5"
                                            >
                                              Clothes
                                            </Text>
                                            {expanded && (
                                              <Img
                                                src="images/img_arrowup_bluegray_900.svg"
                                                className="h-[20px] w-[20px]"
                                                alt="arrowup"
                                              />
                                            )}
                                            {!expanded && (
                                              <Img
                                                src="images/img_arrowdown_bluegray_900.svg"
                                                className="h-[20px] w-[20px]"
                                                alt="arrowdown"
                                              />
                                            )}
                                          </div>
                                        )}
                                      </AccordionItemState>
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel className="w-[100%] ">
                                    <div className="flex items-center justify-start md:w-[100%] w-[42%]">
                                      <div className="flex flex-col items-start justify-end w-[100%]">
                                        <Text
                                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                          as="h5"
                                          variant="h5"
                                        >
                                          T-shirts
                                        </Text>
                                        <Text
                                          className="font-normal mt-[20px] not-italic text-bluegray_800 text-left w-[auto]"
                                          as="h5"
                                          variant="h5"
                                        >
                                          Jeans
                                        </Text>
                                        <Text
                                          className="font-normal mt-[20px] not-italic text-bluegray_800 text-left w-[auto]"
                                          as="h5"
                                          variant="h5"
                                        >
                                          Jackets
                                        </Text>
                                      </div>
                                    </div>
                                  </AccordionItemPanel>
                                </div>
                              </div>
                              <Line className="self-center h-[1px] bg-indigo_50 w-[100%]" />
                            </AccordionItem>
                          ))}
                        </Accordion>
                        <div className="flex flex-col gap-[17px] items-start justify-start mt-[19px] pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Price
                          </Text>
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                            <SeekBar
                              inputValue={[null]}
                              trackColors={["", "#e2e8ed"]}
                              thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                              className="flex h-[14px] w-[100%]"
                              trackClassName="h-[4px] flex w-[100%]"
                            />{" "}
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Text
                                className="font-normal h-[15px] not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body1"
                              >
                                $0
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                variant="body1"
                              >
                                $10,000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-normal mt-[23px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Rating
                        </Text>
                        <div className="flex items-start justify-start mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                            inputClassName="mr-[5px]"
                            name="remember"
                            id="remember"
                            label="5 Stars"
                          ></CheckBox>
                        </div>
                        <div className="flex items-start justify-start mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                            inputClassName="mr-[5px]"
                            name="remember_One"
                            id="remember_One"
                            label="4 Stars"
                          ></CheckBox>
                        </div>
                        <div className="flex items-start justify-start mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                            inputClassName="mr-[5px]"
                            name="remember_Two"
                            id="remember_Two"
                            label="3 Stars"
                          ></CheckBox>
                        </div>
                        <div className="flex items-start justify-start mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                            inputClassName="mr-[5px]"
                            name="remember_Three"
                            id="remember_Three"
                            label="2 Stars"
                          ></CheckBox>
                        </div>
                        <div className="flex items-start justify-start mt-[16px] w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                            inputClassName="mr-[5px]"
                            name="remember_Four"
                            id="remember_Four"
                            label="1 Star"
                          ></CheckBox>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mt-[20px] pt-[2px] md:w-[100%] w-[73%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Color
                          </Text>
                          <Img
                            src="images/img_frame_pink_a100.svg"
                            className="h-[24px] w-[auto]"
                            alt="frame_One"
                          />
                        </div>
                        <div className="flex flex-col gap-[12px] items-center justify-start mt-[32px] w-[100%]">
                          <Button
                            className="bg-deep_orange_300 cursor-pointer flex h-[48px] items-center justify-center px-[50px] py-[9px] rounded-[24px] w-[210px]"
                            rightIcon={
                              <Img
                                src="images/img_plus_white_a700.svg"
                                className="ml-[18px]"
                                alt="plus"
                              />
                            }
                          >
                            <div className="font-normal md:px-[40px] not-italic sm:px-[20px] text-[14px] text-center text-white_A700">
                              Apply filter
                            </div>
                          </Button>
                          <Button className="bg-gray_50 cursor-pointer font-normal h-[48px] not-italic sm:px-[20px] md:px-[40px] px-[54px] py-[9px] rounded-[24px] text-[14px] text-bluegray_900 text-center w-[210px]">
                            Clear all
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-inter items-center justify-start md:mt-[0] mt-[60px] md:w-[100%] w-[75%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-white_A700 flex pl-[32px] pr-[35px] py-[16px] rounded-[4px] shadow-bs w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:px-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                    name="frame_Two"
                    placeholder="Seach name, type,..."
                    prefix={
                      <Img
                        src="images/img_search_bluegray_900.svg"
                        className="cursor-pointer mr-[16px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        color="#828fa2"
                        className="cursor-pointer my-[auto]"
                        onClick={() => setInputvalue("")}
                        style={{
                          visibility:
                            inputvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                      />
                    }
                  ></Input>
                  <div className="h-[1186px] md:h-[2407px] sm:h-[3592px] mt-[19px] relative w-[100%]">
                    <div className="absolute bg-white_A700 h-[308px] inset-x-[0] mx-[auto] rounded-[4px] shadow-bs top-[1%] w-[32%]"></div>
                    <div className="bg-white_A700 h-[308px] ml-[auto] mt-[9px] rounded-[4px] shadow-bs w-[32%]"></div>
                    <div className="absolute gap-[1px] md:gap-[20px] grid grid-cols-1 inset-[0] justify-center m-[auto] min-h-[auto] w-[100%]">
                      <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
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
                              alt="3427408800611_One"
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
                                  alt="floatingicon_One"
                                />
                                <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className=""
                                    alt="buttonprimary_One"
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
                              alt="3427408800611_Two"
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
                                  alt="floatingicon_Two"
                                />
                                <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className=""
                                    alt="buttonprimary_Two"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[32px] items-center justify-start pb-[32px] rounded-[8px] shadow-bs w-[100%]">
                          <div className="h-[353px] relative w-[100%]">
                            <Img
                              src="images/img_3427408800611_3.png"
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
                                    Polo Shirt
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
                              src="images/img_3427408800611_4.png"
                              className="h-[353px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                              alt="3427408800611_One"
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
                                <div className="flex flex-col gap-[13px] justify-end py-[2px] w-[100%]">
                                  <Text
                                    className="md:ml-[0] ml-[14px] mr-[41px] not-italic text-bluegray_900 text-left w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Bomber
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
                                  alt="floatingicon_One"
                                />
                                <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className=""
                                    alt="buttonprimary_One"
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
                              alt="3427408800611_Two"
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
                                  alt="floatingicon_Two"
                                />
                                <Button className="bg-gray_50 flex h-[48px] items-center justify-center p-[14px] rounded-[50%] w-[48px]">
                                  <Img
                                    src="images/img_buttonprimary.svg"
                                    className=""
                                    alt="buttonprimary_Two"
                                  />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-center mt-[41px] md:w-[100%] w-[28%]">
                    <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center p-[10px] w-[32px]">
                      <Img
                        src="images/img_arrowleft.svg"
                        className=""
                        alt="arrowleft"
                      />
                    </Button>
                    <Button className="border-[1px] border-bluegray_900 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_900 text-center w-[32px]">
                      1
                    </Button>
                    <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                      2
                    </Button>
                    <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                      ...
                    </Button>
                    <Button className="border-[1px] border-indigo_50 border-solid cursor-pointer font-normal h-[32px] not-italic py-[7px] text-[14px] text-bluegray_800 text-center w-[32px]">
                      9
                    </Button>
                    <Button className="border-[1px] border-indigo_50 border-solid flex h-[32px] items-center justify-center p-[10px] rotate-[180deg] w-[32px]">
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className=""
                        alt="arrowright"
                      />
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

export default ShopSearchPage;

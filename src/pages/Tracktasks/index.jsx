import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Img, Button } from "components";
import Header from "components/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const TracktasksPage = () => {
  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex items-center justify-start w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <Sidebar className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
            <Line className="bg-indigo_50 md:h-[1px] h-[950px] mb-[74px] md:w-[100%] w-[1px]" />
            <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
              <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
              <div className="bg-gray_50 flex font-poppins items-center justify-start p-[19px] w-[100%]">
                <div className="flex flex-col gap-[30px] items-center justify-start mb-[173px] mt-[16px] w-[100%]">
                  <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Product design
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                      as="h5"
                      variant="h5"
                    ></Text>
                  </div>
                  <Accordion
                    preExpanded={[0]}
                    className="flex flex-col font-inter gap-[20px] w-[100%]"
                  >
                    {[...Array(3)].map((item, index) => (
                      <AccordionItem uuid={index} key={Math.random()}>
                        <div className="bg-white_A700 flex flex-col items-center justify-start py-[24px] rounded-[4px] shadow-bs w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[95%]">
                            <Img
                              src="images/img_arrowup.svg"
                              className="h-[24px] w-[24px]"
                              alt="arrowup"
                            />
                            <div className="flex flex-row font-poppins gap-[12px] items-center justify-center md:ml-[0] ml-[16px] md:w-[100%] w-[14%]">
                              <Img
                                src="images/img_television.svg"
                                className="h-[24px] w-[24px]"
                                alt="television"
                              />
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-center w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                In process (10)
                              </Text>
                            </div>
                            <Button className="bg-gray_50 cursor-pointer font-normal h-[40px] md:ml-[0] ml-[797px] not-italic px-[16px] py-[9px] rounded-[20px] text-[14px] text-bluegray_800 text-center w-[98px]">
                              Edit{" "}
                            </Button>
                          </div>
                          <Line className="bg-indigo_50 h-[1px] mt-[16px] w-[100%]" />
                          <div className="flex font-poppins items-center justify-start mb-[8px] mt-[31px] md:w-[100%] w-[95%]">
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {({ expanded }) => (
                                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                                      <div className="border-[2px] border-indigo_50 border-solid flex md:flex-1 items-center justify-center p-[55px] sm:px-[20px] md:px-[40px] rounded-[4px] md:w-[100%] w-[24%]">
                                        <div className="flex flex-col gap-[39px] items-center justify-start my-[17px] w-[100%]">
                                          <Button className="bg-red_52 flex h-[56px] items-center justify-center p-[18px] rounded-[50%] w-[56px]">
                                            <Img
                                              src="images/img_plus_deep_orange_300.svg"
                                              className="h-[20px]"
                                              alt="plus"
                                            />
                                          </Button>
                                          <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                                            <Text
                                              className="font-bold text-bluegray_800 text-center w-[auto]"
                                              as="h5"
                                              variant="h5"
                                            >
                                              Add file
                                            </Text>
                                            <Text
                                              className="leading-[22.00px] not-italic text-bluegray_800 text-center w-[100%]"
                                              as="h6"
                                              variant="h6"
                                            >
                                              Add file to manage your vital task
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                                        <div className="flex items-center justify-start w-[100%]">
                                          <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                                            <div className="flex flex-col gap-[11px] items-center justify-start md:w-[100%] w-[auto]">
                                              <Text
                                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                                as="h4"
                                                variant="h4"
                                              >
                                                LD presentation file
                                              </Text>
                                              <Text
                                                className="leading-[22.00px] not-italic text-bluegray_800 text-left"
                                                as="h6"
                                                variant="h6"
                                              >
                                                <>
                                                  Introduction about LD
                                                  <br />
                                                  Project in detail
                                                </>
                                              </Text>
                                            </div>
                                            <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                                              <Text
                                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                                as="h5"
                                                variant="h5"
                                              >
                                                Process (80%)
                                              </Text>
                                              <Img
                                                src="images/img_frame_indigo_50.svg"
                                                className="h-[1px] w-[auto]"
                                                alt="frame"
                                              />
                                            </div>
                                            <div className="flex flex-row items-end justify-between w-[100%]">
                                              <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                                                <Text
                                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                                  as="h5"
                                                  variant="h5"
                                                >
                                                  Members
                                                </Text>
                                                <div className="h-[32px] relative w-[64%]">
                                                  <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[32px]">
                                                    <Img
                                                      src="images/img_robototoyfacefinal2_32x32.png"
                                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                                      alt="robototoyfacefi"
                                                    />
                                                  </div>
                                                  <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[32px]">
                                                    <Img
                                                      src="images/img_fidenza978toyface_32x32.png"
                                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                                      alt="fidenza978toyfa"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_volume.svg"
                                                className="h-[32px] mt-[40px] rounded-[50%] w-[32px]"
                                                alt="volume"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                                        <div className="flex items-center justify-start w-[100%]">
                                          <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                                            <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                                              <Text
                                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                                as="h4"
                                                variant="h4"
                                              >
                                                Urgent Tasks
                                              </Text>
                                              <Text
                                                className="leading-[22.00px] not-italic text-bluegray_800 text-left"
                                                as="h6"
                                                variant="h6"
                                              >
                                                <>
                                                  Introduction about LD
                                                  <br />
                                                  Project in detail
                                                </>
                                              </Text>
                                            </div>
                                            <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                                              <Text
                                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                                as="h5"
                                                variant="h5"
                                              >
                                                Process (10%)
                                              </Text>
                                              <Img
                                                src="images/img_frame_indigo_50_1x194.svg"
                                                className="h-[1px] w-[auto]"
                                                alt="frame_One"
                                              />
                                            </div>
                                            <div className="flex flex-row items-end justify-between w-[100%]">
                                              <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                                                <Text
                                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                                  as="h5"
                                                  variant="h5"
                                                >
                                                  Members
                                                </Text>
                                                <div className="h-[32px] relative w-[64%]">
                                                  <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[32px]">
                                                    <Img
                                                      src="images/img_robototoyfacefinal2_32x32.png"
                                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                                      alt="robototoyfacefi_One"
                                                    />
                                                  </div>
                                                  <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[32px]">
                                                    <Img
                                                      src="images/img_fidenza978toyface_32x32.png"
                                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                                      alt="fidenza978toyfa_One"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_volume.svg"
                                                className="h-[32px] mt-[40px] rounded-[50%] w-[32px]"
                                                alt="volume_One"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[31px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[24%]">
                                        <div className="flex items-center justify-start w-[100%]">
                                          <div className="flex flex-col items-start justify-start w-[100%]">
                                            <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[auto]">
                                              <Text
                                                className="font-bold text-bluegray_900 text-left w-[auto]"
                                                as="h4"
                                                variant="h4"
                                              >
                                                Plan for 2022
                                              </Text>
                                              <Text
                                                className="leading-[22.00px] not-italic text-bluegray_800 text-left"
                                                as="h6"
                                                variant="h6"
                                              >
                                                <>
                                                  Introduction about LD
                                                  <br />
                                                  Project in detail
                                                </>
                                              </Text>
                                            </div>
                                            <div className="flex flex-col gap-[23px] items-start justify-start mt-[24px] w-[100%]">
                                              <Text
                                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                                as="h5"
                                                variant="h5"
                                              >
                                                Process (0%)
                                              </Text>
                                              <Img
                                                src="images/img_frame_1x194.svg"
                                                className="h-[1px] w-[auto]"
                                                alt="frame_Two"
                                              />
                                            </div>
                                            <div className="flex flex-row items-end justify-between mt-[23px] w-[100%]">
                                              <div className="flex flex-col gap-[15px] items-start justify-start w-[auto]">
                                                <Text
                                                  className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                                  as="h5"
                                                  variant="h5"
                                                >
                                                  Members
                                                </Text>
                                                <div className="flex h-[32px] items-center justify-start w-[32px]">
                                                  <div className="flex h-[32px] items-center justify-start w-[32px]">
                                                    <Img
                                                      src="images/img_tintin22_32x32.png"
                                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                                      alt="tintinTwentyTwo"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              {expanded && (
                                                <Img
                                                  src="images/img_volume.svg"
                                                  className="h-[32px] mt-[40px] rounded-[50%] w-[32px]"
                                                  alt="volume_Two"
                                                />
                                              )}
                                              {!expanded && (
                                                <Img
                                                  src="images/img_television.svg"
                                                  className="h-[24px] w-[24px]"
                                                  alt="television_One"
                                                />
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                          </div>
                        </div>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TracktasksPage;

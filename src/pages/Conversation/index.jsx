import React from "react";

import { Line, Text, Img, List, Input, Button } from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images";
import Sidebar from "components/Sidebar";

const ConversationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex items-center justify-end w-[100%]">
          <div className="sm:h-[1024px] h-[1084px] md:h-[2092px] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-start justify-end mx-[auto] sm:pl-[20px] pl-[241px] md:pl-[40px] top-[0] w-[100%]">
              <Line className="bg-indigo_50 md:h-[1px] h-[927px] md:w-[100%] w-[1px]" />
              <Header className="bg-white_A700 flex flex-1 items-center justify-center mb-[867px] w-[100%]" />
            </div>
            <div className="absolute bg-gray_50 bottom-[0] flex flex-col font-poppins gap-[30px] items-start justify-center p-[23px] sm:px-[20px] right-[0] w-[84%]">
              <Text
                className="mt-[12px] text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Message
              </Text>
              <div className="bg-white_A700 flex md:flex-col flex-row font-inter gap-[26px] items-center justify-end mb-[158px] sm:pl-[20px] pl-[32px] rounded-[4px] shadow-bs w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[35%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[46%]">
                    <div className="border-[2px] border-green_700 border-solid flex h-[62px] items-center justify-start p-[7px] rounded-[50%] w-[62px]">
                      <div className="flex h-[48px] items-center justify-start w-[48px]">
                        <Img
                          src="images/img_robototoyfacefinal2_48x48.png"
                          className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                          alt="robototoyfacefi"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-end w-[auto]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Ackerman
                      </Text>
                      <Text
                        className="not-italic text-bluegray_400 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        My accout
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[26px] items-start justify-start pt-[2px] w-[100%]">
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Online (10)
                    </Text>
                    <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[10px] items-center justify-start w-[15%]">
                            <div className="md:h-[48px] h-[51px] relative w-[100%]">
                              <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                                <div className="flex h-[48px] items-center justify-start w-[48px]">
                                  <Img
                                    src="images/img_punktoyface1_48x48.png"
                                    className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                    alt="punktoyfaceOne"
                                  />
                                </div>
                              </div>
                              <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                            </div>
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Lee
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[10px] items-center justify-start pb-[2px] w-[15%]">
                            <Img
                              src="images/img_music.svg"
                              className="h-[51px] w-[auto]"
                              alt="music"
                            />
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Riri
                            </Text>
                          </div>
                          <List
                            className="sm:flex-col flex-row gap-[24px] grid grid-cols-3 w-[58%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col gap-[10px] items-start justify-start sm:ml-[0] w-[100%]">
                              <div className="md:h-[48px] h-[51px] relative w-[100%]">
                                <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                                    <Img
                                      src="images/img_tintin22_48x48.png"
                                      className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                      alt="tintinTwentyTwo"
                                    />
                                  </div>
                                </div>
                                <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                              </div>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jimo
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[10px] items-start justify-start sm:ml-[0] w-[100%]">
                              <div className="md:h-[48px] h-[51px] relative w-[100%]">
                                <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                                    <Img
                                      src="images/img_vangoghbyamrit1_48x48.png"
                                      className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                      alt="vangoghbyamritOne"
                                    />
                                  </div>
                                </div>
                                <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Acker
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[10px] items-start justify-start sm:ml-[0] w-[100%]">
                              <div className="md:h-[48px] h-[51px] md:ml-[0] ml-[2px] relative w-[93%]">
                                <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                                    <Img
                                      src="images/img_punk9252toyfaceedita2.png"
                                      className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                                      alt="punk9252toyface"
                                    />
                                  </div>
                                </div>
                                <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Momo
                              </Text>
                            </div>
                          </List>
                        </div>
                      </div>
                      <Img
                        src="images/img_arrowright_bluegray_400_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    wrapClassName="bg-gray_50 flex pl-[16px] pr-[35px] py-[10px] rounded-[4px] w-[99%]"
                    className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[12px] text-bluegray_400 text-left w-[100%]"
                    name="searchbox_One"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer mr-[8px] my-[auto]"
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
                  <List
                    className="flex-col gap-[10px] grid items-center pb-[21px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                          <div className="flex h-[48px] items-center justify-start w-[48px]">
                            <Img
                              src="images/img_punktoyface1_48x48.png"
                              className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                              alt="punktoyfaceOne"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-green_700 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[9px] items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Lee Ankar
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hey! Can i meet you for a sec?
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start pl-[2px] pt-[2px] w-[auto]">
                          <Text
                            className="not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            now
                          </Text>
                          <Text
                            className="bg-red_600 flex font-normal h-[24px] items-center justify-center md:ml-[0] ml-[4px] not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
                            variant="body1"
                          >
                            3
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[83%]" />
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                          <div className="flex h-[48px] items-center justify-start w-[48px]">
                            <Img
                              src="images/img_tintin22_48x48.png"
                              className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                              alt="tintinTwentyTwo"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Jimo
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                          <Text
                            className="mb-[34px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[83%]" />
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="md:h-[48px] h-[51px] relative w-[13%]">
                        <div className="absolute flex h-[48px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[48px]">
                          <div className="flex h-[48px] items-center justify-start w-[48px]">
                            <Img
                              src="images/img_punk9252toyfaceedita2.png"
                              className="h-[48px] md:h-[auto] rounded-[50%] w-[48px]"
                              alt="punk9252toyface"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] outline outline-[2px] outline-white_A700 right-[4%] rounded-[5px] w-[11px]"></div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[9px] items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Momo
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                          <Text
                            className="mb-[34px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-indigo_50 w-[83%]" />
                    <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_music.svg"
                        className="h-[51px] w-[auto]"
                        alt="music"
                      />
                      <div className="flex flex-row items-center justify-between w-[83%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start pr-[3px] pt-[3px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Riri Lee
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </div>
                        <div className="flex items-center justify-start pl-[2px] py-[2px] w-[55px]">
                          <Text
                            className="mb-[34px] not-italic text-bluegray_400 text-right w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Line className="bg-indigo_50 md:h-[1px] h-[747px] md:w-[100%] w-[1px]" />
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[63%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[92%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start pr-[3px] pt-[3px] md:w-[100%] w-[15%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Lee Ankar
                        </Text>
                        <div className="flex items-center justify-start md:w-[100%] w-[70%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                            <div className="bg-green_700 h-[8px] my-[4px] rounded-[50%] w-[8px]"></div>
                            <Text
                              className="not-italic text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Online
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_search_gray_50.svg"
                        className="h-[48px] md:ml-[0] ml-[437px] rounded-[50%] w-[48px]"
                        alt="search"
                      />
                      <Img
                        src="images/img_volume.svg"
                        className="h-[48px] md:ml-[0] ml-[16px] rounded-[50%] w-[48px]"
                        alt="volume"
                      />
                    </div>
                    <Line className="bg-indigo_50 h-[1px] mt-[24px] w-[100%]" />
                    <div className="flex flex-col items-start justify-start mt-[33px] md:w-[100%] w-[92%]">
                      <div className="flex flex-col relative w-[50%]">
                        <div className="flex flex-col gap-[10px] justify-start mx-[auto] w-[100%]">
                          <Text
                            className="md:ml-[0] ml-[36px] not-italic text-bluegray_400 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lee Ankar{" "}
                          </Text>
                          <div className="flex flex-row gap-[12px] items-start justify-between w-[100%]">
                            <div className="flex h-[24px] items-center justify-start w-[24px]">
                              <div className="flex h-[24px] items-center justify-start w-[24px]">
                                <Img
                                  src="images/img_punktoyface1_24x24.png"
                                  className="h-[24px] md:h-[auto] rounded-[50%] w-[24px]"
                                  alt="punktoyfaceOne_One"
                                />
                              </div>
                            </div>
                            <div className="bg-gray_50 flex items-start justify-start p-[16px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[auto]">
                              <Text
                                className="font-normal my-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray_50 border-[2px] border-solid border-white_A700 flex h-[28px] items-center justify-end ml-[auto] mr-[11px] mt-[-10px] p-[3px] rounded-[50%] w-[28px] z-[1]">
                          <Img
                            src="images/img_.png"
                            className="h-[20px] md:h-[auto] object-cover w-[73%]"
                            alt="One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] mt-[5px] md:w-[100%] w-[49%]">
                        <div className="bg-deep_orange_300_6c flex items-start justify-start p-[16px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] w-[auto]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hey! Can i meet you for a sec?
                          </Text>
                        </div>
                        <Img
                          src="images/img_checkmark_deep_orange_300.svg"
                          className="h-[20px] mt-[36px] w-[20px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-row gap-[8px] items-end justify-end ml-[auto] mt-[16px] md:w-[100%] w-[49%]">
                        <div className="bg-gray_50 flex flex-col gap-[16px] items-center justify-start p-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[91%]">
                          <div className="h-[133px] relative w-[100%]">
                            <Img
                              src="images/img_vector.png"
                              className="h-[133px] m-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="vector"
                            />
                            <div className="absolute bottom-[6%] flex items-center justify-start right-[3%] w-[17%]">
                              <Button className="bg-black_900_66 cursor-pointer font-normal min-w-[41px] not-italic py-[4px] rounded-[10px] text-[12px] text-center text-white_A700 w-[auto]">
                                1:00
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[13px] items-start justify-end md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              ☕️ Life Style Coffee
                            </Text>
                            <Text
                              className="not-italic text-bluegray_401 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              8350 Melrose Ave, Los Angeles
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_checkmark_deep_orange_300.svg"
                          className="h-[20px] mt-[215px] w-[20px]"
                          alt="checkmark_One"
                        />
                      </div>
                      <div className="bg-gray_50 flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[105px] p-[9px] rounded-[4px] w-[100%]">
                        <Input
                          wrapClassName="bg-gray_50 sm:flex-1 sm:ml-[0] ml-[4px] pb-[6px] pl-[3px] pr-[-101px] pt-[10px] sm:w-[100%] w-[auto]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                          name="frame3801"
                          placeholder="Enter message..."
                        ></Input>
                        <Img
                          src="images/img_plus_bluegray_400.svg"
                          className="h-[24px] mr-[19px] w-[24px]"
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar className="absolute bg-white_A700 flex flex-col font-inter md:hidden justify-start left-[0] top-[0] w-[17%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConversationPage;

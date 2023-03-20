import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Input, Switch, SelectBox, Img, Button } from "components";
import Header from "components/Header";

const SettingsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[870px] mb-[154px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex font-poppins items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[19px] items-end justify-between mb-[155px] mt-[12px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[67%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Settings
                  </Text>
                  <div className="bg-white_A700 flex flex-col font-inter items-start justify-start mt-[30px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                    <div className="flex flex-col gap-[14px] items-start justify-end md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Account info.
                      </Text>
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      ></Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-start mt-[32px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Username
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="groupEightyNine"
                          placeholder="Sam"
                        ></Input>
                      </div>
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
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          type="email"
                          name="email"
                          placeholder="sambrown@gmail.com"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-start mt-[24px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          First name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="groupNinetyOne"
                          placeholder="Sam"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[49%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Last name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          name="groupNinetyTwo"
                          placeholder="Brown"
                        ></Input>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-inter gap-[21px] items-center justify-between mt-[20px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-start justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[49%]">
                      <div className="flex items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Password Reset
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Current password
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[20px] pl-[20px] pr-[35px] pt-[15px] rounded-[4px] w-[100%]"
                            className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                            name="password"
                            placeholder="************"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            New password
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[20px] pl-[20px] pr-[35px] pt-[15px] rounded-[4px] w-[100%]"
                            className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                            name="password_One"
                            placeholder="************"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col items-start justify-start p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[49%]">
                      <div className="flex flex-col gap-[14px] items-start justify-end md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Notifications
                        </Text>
                        <Text
                          className="not-italic text-bluegray_400 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Open notification to receive our news fastly
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-center justify-start mt-[42px] pr-[12px] md:w-[100%] w-[87%]">
                        <Switch
                          onColor="#018df0"
                          offColor="#c0c7d0"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[19%]"
                        />
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send notification to mail
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-start justify-start mt-[32px] pr-[10px] md:w-[100%] w-[78%]">
                        <Switch
                          onColor="#018df0"
                          offColor="#c0c7d0"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[21%]"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send new promotion
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[24px] items-start justify-start mb-[20px] mt-[32px] pr-[11px] md:w-[100%] w-[73%]">
                        <Switch
                          onColor="#018df0"
                          offColor="#c0c7d0"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={false}
                          className="w-[23%]"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Notice my balance
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 flex-col font-inter items-start justify-start md:mt-[0] mt-[60px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[33%]">
                  <div className="flex items-start justify-start pr-[5px] pt-[5px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Payment
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[24px] items-center justify-start mt-[32px] w-[100%]">
                    <SelectBox
                      className="font-normal not-italic px-[20px] py-[17px] text-[16px] text-bluegray_800 text-left w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="group_One"
                      placeholder="Paypal"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="h-[20px] mr-[0] w-[20px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <div className="bg-gradient  md:h-[172px] sm:h-[182px] h-[184px] relative rounded-[4px] w-[100%]">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col md:gap-[40px] gap-[68px] h-[100%] inset-[0] justify-center m-[auto] pr-[19px] pt-[19px] rounded-[4px] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group93.svg')",
                        }}
                      >
                        <Img
                          src="images/img_group.svg"
                          className="h-[12px] md:ml-[0] ml-[245px] rounded-[4px] w-[auto]"
                          alt="group_Two"
                        />
                        <div className="h-[83px] mr-[104px] relative w-[63%]">
                          <Text
                            className="absolute bottom-[30%] font-normal not-italic right-[0] text-left text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1234 **** 4567 8901{" "}
                          </Text>
                          <Img
                            src="images/img_group_83x97.png"
                            className="absolute h-[83px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[4px] w-[auto]"
                            alt="group_Three"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_group_172x108.png"
                        className="absolute h-[172px] object-cover right-[0] rounded-[4px] top-[0] w-[auto]"
                        alt="group_Four"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-[32px] pt-[3px] w-[100%]">
                    <Text
                      className="not-italic text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Type your email
                    </Text>
                    <Input
                      wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[35px] pt-[19px] rounded-[4px] w-[100%]"
                      className="font-normal not-italic p-[0] placeholder:text-bluegray_800 sm:pr-[20px] text-[16px] text-bluegray_800 text-left w-[100%]"
                      type="email"
                      name="email_One"
                      placeholder="Ackermanlhn@gmail.com"
                    ></Input>
                  </div>
                  <Text
                    className="leading-[22.00px] md:ml-[0] ml-[45px] mt-[32px] not-italic text-bluegray_400 text-center sm:w-[100%] w-[70%]"
                    as="h6"
                    variant="h6"
                  >
                    Please make sure that all your information precisely
                  </Text>
                  <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[306px] mt-[60px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                    Save change
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;

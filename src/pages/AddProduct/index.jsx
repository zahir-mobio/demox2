import React from "react";

import Sidebar2 from "components/Sidebar2";
import {
  Line,
  Text,
  Input,
  SelectBox,
  Img,
  TextArea,
  Button,
} from "components";
import Header from "components/Header";

const AddProductPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Sidebar2 className="flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 h-[1071px] md:h-[1px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col items-center justify-start mb-[12px] mt-[9px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
                  <Text
                    className="font-poppins text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Add Product
                  </Text>
                  <Text
                    className="font-inter font-normal mb-[2px] mt-[7px] not-italic text-bluegray_400 text-right w-[auto]"
                    as="h5"
                    variant="h5"
                  ></Text>
                </div>
                <div className="bg-white_A700 flex items-center justify-end mt-[33px] p-[32px] sm:px-[20px] rounded-[4px] shadow-bs w-[100%]">
                  <div className="flex flex-col items-start justify-start mt-[3px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic information
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-[34px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pt-[2px] md:w-[100%] w-[57%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product name
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[12px] pt-[19px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                          type="text"
                          name="group100"
                          placeholder="Enter product’s name"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start pt-[3px] md:w-[100%] w-[39%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Select category
                        </Text>
                        <SelectBox
                          className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal not-italic pb-[16px] pl-[20px] sm:pr-[20px] pr-[24px] pt-[19px] rounded-[4px] text-[16px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="group18058"
                          placeholder="Data project"
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
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[54px] items-center justify-between mt-[24px] w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] w-[57%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Branch
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[12px] py-[17px] rounded-[4px] w-[100%]"
                            className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                            name="group101"
                            placeholder="Enter brach"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Price
                          </Text>
                          <Input
                            wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[12px] py-[17px] rounded-[4px] w-[100%]"
                            className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                            name="group102"
                            placeholder="Enter brach"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start pt-[3px] md:w-[100%] w-[39%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product description
                        </Text>
                        <TextArea
                          className="bg-white_A700 border-[1px] border-indigo_50 border-solid font-normal not-italic pb-[35px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[19px] rounded-[4px] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 text-left w-[100%]"
                          name="group103"
                          placeholder="Write something..."
                        ></TextArea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] items-start justify-end p-[32px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                    <Text
                      className="font-normal mt-[5px] not-italic text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Product image
                    </Text>
                    <div className="border-[2px] border-dashed border-indigo_50 flex items-center justify-end p-[87px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start mt-[10px] pt-[68px] md:w-[100%] w-[67%]">
                        <div className="flex flex-col gap-[12px] items-center justify-end w-[100%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-bluegray_800 text-center w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Upload image
                          </Text>
                          <Text
                            className="not-italic text-bluegray_800 text-center w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col justify-start p-[26px] sm:px-[20px] rounded-[4px] shadow-bs md:w-[100%] w-[50%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[6px] mt-[9px] not-italic text-bluegray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Add link
                    </Text>
                    <div className="flex flex-col gap-[24px] items-center justify-start mr-[6px] mt-[34px] md:w-[100%] w-[99%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start pt-[2px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product Link
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pl-[20px] pr-[12px] py-[17px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                          name="group104"
                          placeholder="Enter link"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-[100%]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Hashtag
                        </Text>
                        <Input
                          wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid pb-[16px] pl-[20px] pr-[12px] pt-[19px] rounded-[4px] w-[100%]"
                          className="font-normal not-italic p-[0] placeholder:text-bluegray_400 text-[16px] text-bluegray_400 text-left w-[100%]"
                          name="group105"
                          placeholder="Enter tag"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[16px] items-center justify-end mb-[6px] ml-[auto] mt-[62px] md:w-[100%] w-[61%]">
                      <Button className="bg-deep_orange_300 cursor-pointer font-normal min-w-[148px] not-italic py-[15px] rounded-[24px] text-[14px] text-center text-white_A700 w-[auto]">
                        Save
                      </Button>
                      <Button className="bg-gray_50 cursor-pointer font-normal min-w-[148px] not-italic py-[15px] rounded-[24px] text-[14px] text-bluegray_800 text-center w-[auto]">
                        Cancel
                      </Button>
                    </div>
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

export default AddProductPage;

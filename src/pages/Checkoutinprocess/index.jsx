import React from "react";

import Sidebar from "components/Sidebar";
import { Line, Text, Img } from "components";
import Header from "components/Header";

const CheckoutinprocessPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
          <Sidebar className="bg-white_A700 flex flex-col md:hidden justify-start md:px-[20px] w-[241px]" />
          <Line className="bg-indigo_50 md:h-[1px] h-[990px] mb-[34px] md:w-[100%] w-[1px]" />
          <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
            <Header className="bg-white_A700 flex items-center justify-center w-[100%]" />
            <div className="bg-gray_50 flex items-center justify-start p-[23px] sm:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[34px] items-center justify-start mb-[42px] mt-[9px] md:w-[100%] w-[99%]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
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
                <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-start p-[114px] sm:px-[20px] md:px-[40px] rounded-[4px] shadow-bs w-[100%]">
                  <Img
                    src="images/img_creditcardpay.svg"
                    className="h-[270px] w-[270px]"
                    alt="creditcardpay"
                  />
                  <div className="flex items-center justify-start mb-[226px] md:w-[100%] w-[57%]">
                    <div className="flex flex-col gap-[12px] items-center justify-end w-[100%]">
                      <Text
                        className="not-italic text-bluegray_900 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        In Process...
                      </Text>
                      <Text
                        className="not-italic text-bluegray_900 text-center w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Please wait a minute, your order is processing
                      </Text>
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

export default CheckoutinprocessPage;

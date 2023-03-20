import React from "react";

import { Text, Img, Button, Line, Input, CheckBox } from "components";
import { useGoogleLogin } from "@react-oauth/google";

const SigninDefaultPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-red_51 flex items-center justify-start p-[56px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[59px] items-start justify-start max-w-[1260px] mb-[6px] mx-[auto] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[132px] md:gap-[40px] justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[50%]">
              <Text
                className="leading-[40.00px] md:ml-[0] ml-[173px] not-italic text-bluegray_900 text-center sm:w-[100%] w-[50%]"
                as="h1"
                variant="h1"
              >
                Manage your work more effectively
              </Text>
              <Img
                src="images/img_workingtime.svg"
                className="h-[483px] w-[auto]"
                alt="workingtime"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[44px] items-center justify-end p-[44px] sm:px-[20px] md:px-[40px] rounded-[20px] shadow-bs4 md:w-[100%] w-[46%]">
              <Text
                className="mt-[25px] not-italic text-bluegray_800 text-center w-[auto]"
                as="h2"
                variant="h2"
              >
                Login to Utillia
              </Text>
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[88%]">
                <Button
                  className="common-pointer bg-white_A700 border-[1px] border-indigo_50 border-solid cursor-pointer flex items-center justify-center sm:min-w-[100%] min-w-[414px] pl-[24px] pr-[35px] py-[18px] rounded-[4px] w-[auto]"
                  onClick={() => googleSignIn()}
                  leftIcon={
                    <Img
                      src="images/img_google.svg"
                      className="mb-[1px] mr-[35px]"
                      alt="google"
                    />
                  }
                >
                  <div className="font-normal not-italic sm:px-[20px] text-[14px] text-bluegray_800 text-center">
                    Login with Google
                  </div>
                </Button>
                <div className="flex flex-row items-start justify-between mt-[53px] w-[100%]">
                  <Line className="bg-indigo_50 h-[1px] my-[7px] w-[39%]" />
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Or
                  </Text>
                  <Line className="bg-indigo_50 h-[1px] my-[7px] w-[39%]" />
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start mt-[51px] pt-[2px] md:w-[100%] w-[98%]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Email
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid flex pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                    type="email"
                    name="email_One"
                    placeholder="Infor@gmail.com"
                    prefix={
                      <Img
                        src="images/img_mail.svg"
                        className="mt-[auto] mb-[1px] mr-[16px]"
                        alt="mail"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-[10px] items-start justify-start mt-[28px] pt-[2px] md:w-[100%] w-[98%]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Password
                  </Text>
                  <Input
                    wrapClassName="bg-white_A700 border-[1px] border-indigo_50 border-solid flex pl-[20px] pr-[35px] py-[17px] rounded-[4px] w-[100%]"
                    className="font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:pr-[20px] text-[16px] text-bluegray_400 text-left w-[100%]"
                    name="password"
                    placeholder="************"
                    prefix={
                      <Img
                        src="images/img_lock_bluegray_800.svg"
                        className="mt-[auto] mb-[1px] mr-[16px]"
                        alt="lock"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-row items-end justify-between mt-[113px] md:w-[100%] w-[98%]">
                  <CheckBox
                    className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                    inputClassName="mr-[5px]"
                    name="remember"
                    id="remember"
                    label="Remember"
                  ></CheckBox>
                  <a
                    className="font-normal mt-[5px] not-italic text-[14px] text-bluegray_800 text-left underline w-[auto]"
                    href="javascript:"
                  >
                    Forgot password?
                  </a>
                </div>
                <Button className="bg-deep_orange_300 cursor-pointer font-normal sm:min-w-[100%] min-w-[414px] mt-[80px] not-italic py-[19px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  LOGIN
                </Button>
                <div className="flex flex-row gap-[4px] items-start justify-start mt-[51px] self-stretch w-[auto]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    You don’t have an account yet?
                  </Text>
                  <a
                    className="font-normal not-italic text-[14px] text-deep_orange_300 text-left underline w-[auto]"
                    href="javascript:"
                  >
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninDefaultPage;

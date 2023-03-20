import React from "react";

import { Text, Input, Img } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] my-[10px] w-[96%]">
          <div className="header-row mt-[12px] mb-[10px]">
            <Text
              className="font-inter not-italic text-bluegray_800 text-center"
              as="h6"
              variant="h6"
            >
              Welcomback, Team!
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            wrapClassName="bg-gray_50 flex sm:hidden md:ml-[0] ml-[228px] pl-[16px] pr-[35px] py-[10px] rounded-[4px] md:w-[100%] w-[38%]"
            className="font-inter font-normal not-italic p-[0] placeholder:text-bluegray_400 sm:hidden sm:pr-[20px] text-[12px] text-bluegray_400 text-left w-[100%]"
            name="searchbox"
            placeholder="Search..."
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer mr-[8px] sm:hidden my-[auto]"
                alt="search"
              />
            }
            suffix={
              <CloseSVG
                color="#828fa2"
                className="cursor-pointer sm:hidden my-[auto]"
                onClick={() => setInputvalue("")}
                style={{
                  visibility: inputvalue?.length <= 0 ? "hidden" : "visible",
                }}
              />
            }
          ></Input>
          <div
            className="bg-cover bg-no-repeat flex h-[24px] sm:hidden items-end justify-start md:ml-[0] ml-[180px] w-[24px]"
            style={{ backgroundImage: "url('images/img_group85.svg')" }}
          >
            <div className="bg-red_600 h-[8px] mb-[14px] outline outline-[2px] outline-white_A700 rounded-[50%] w-[8px]"></div>
          </div>
          <Text
            className="font-inter font-normal sm:hidden md:ml-[0] ml-[24px] not-italic text-gray_500 text-left w-[auto]"
            as="h5"
            variant="h5"
          ></Text>
          <div className="flex h-[40px] sm:hidden items-center justify-start md:ml-[0] ml-[13px] w-[40px]">
            <Img
              src="images/img_sherlocktoyfacelow.png"
              className="common-pointer h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
              onClick={() => navigate("/profile")}
              alt="sherlocktoyface"
            />
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;

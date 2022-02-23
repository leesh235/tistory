import styled from "styled-components";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "../../assets/svg/Arrow";
import { Text } from "./Text";

const Wrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 6px;
    border: 1px solid gray;
    background-color: white;
    position: relative;
`;

const SelectWrapper = styled.div<StyleProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    cursor: pointer;
    input{
        width: calc(100% - 24px);
        height: 100%;
        margin: 0px;
        padding: 0px;
        border: 0px;
        color: ${props => props.fc};
        font-size: ${props => props.fs};
        ::placeholder {
            color: ${props => props.fc};
        }
        cursor: pointer;
    }
`;

const OptionWrapper = styled.ul<StyleProps>`
    display: ${props => props.display};
    flex-direction: column;
    width: 100%;
    height: auto;
    position: absolute;
    top: 32px;
    z-index: 9999;
    border-radius: 6px;
    border: 1px solid gray;
    background-color: white;
    li{
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        cursor: pointer;
        margin: 5px 0;
    }
`;

const ArrowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface StyleProps{
    width?: string,
    height?: string,
    display?: string,
    fc?: string,
    fs?: string,
}

interface Props extends StyleProps{
    option: Array<string>,
    defaultOption: string,
    inputName?: string,
    register?: () => void,
    setValue?: any
}

export const Select = ({width, height, fc, fs, defaultOption, option, inputName, register, setValue}: Props) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleSelect = (val: string) => {
        setValue(`${inputName}`, val, {shouldValidate: true})
        setOpen(false);
    }

    return(
        <Wrapper width={width} height={height}>
            <SelectWrapper onClick={handleOpen} fs={fs} fc={fc}>
                <input type="text" readOnly={true} {...register} placeholder={defaultOption}/>
                <ArrowWrapper>
                    {open ? <ArrowUp /> : <ArrowDown />}
                </ArrowWrapper>
            </SelectWrapper>
            <OptionWrapper  display={open ? "flex" : "none"}>
                {option.map((val, idx) => {
                    return(
                        <li key={idx} onClick={() => {handleSelect(val)}}>
                            <Text text={val} fc={"gray"} fs={"1.4rem"}/>
                        </li>
                    );
                })}
            </OptionWrapper>
        </Wrapper>
    );
}

Select.defaultProps = {
    width: "282px",
    height: "30px",
    defaultOption: "카테고리를 선택해주세요",
    option: ["공지사항"],
    fc: "gray",
    fs: "1.4rem",
}
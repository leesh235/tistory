import { useState } from "react";
import { emailPattern, passwordPattern } from "../regex";

export const useTextInput = (defaultValue="") => {
    const [value, setValue] = useState(defaultValue);
    const onChange = e => {
        const {
            target: {value}
        } = e;
        setValue(value);
    }

    return { value, onChange, setValue };
};

export const useEmailInput = (defaultValue="") => {
    const [temp, setTemp] = useState(defaultValue);
    const [value, setValue] = useState(defaultValue);
    const onChange = e => {
        const {
            target: {value}
        } = e;
        if(passwordPattern.test(value)){
            setValue(value);
            setTemp(value);
        }else{
            setValue(temp);
        }
    }

    return { value, onChange, setValue };
};

export const usePasswordInput = (defaultValue="") => {
    const [value, setValue] = useState(defaultValue);
    const onChange = e => {
        const {
            target: {value}
        } = e;
        setValue(value);
    }

    return { value, onChange, setValue };
};
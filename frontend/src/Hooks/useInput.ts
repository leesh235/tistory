import React, { useState } from "react";
import { emailPattern, passwordPattern } from "../regex";

export const useTextInput = (defaultValue: string) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = (e: React.ChangeEvent) => {
        const { value } = e.target as HTMLTextAreaElement;
        setValue(value);
    }

    return { value, onChange, setValue };
};

export const useEmailInput = (defaultValue: string) => {
    const [temp, setTemp] = useState<string>(defaultValue);
    const [value, setValue] = useState<string>(defaultValue);
    const onChange = (e: React.ChangeEvent) => {
        const { value } = e.target as HTMLTextAreaElement;
        if(passwordPattern.test(value)){
            setValue(value);
            setTemp(value);
        }else{
            setValue(temp);
        }
    }

    return { value, onChange, setValue };
};

export const usePasswordInput = (defaultValue: string) => {
    const [value, setValue] = useState(defaultValue);
    const onChange = (e: React.ChangeEvent) => {
        const { value } = e.target as HTMLTextAreaElement;
        setValue(value);
    }

    return { value, onChange, setValue };
};
import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import { useMediaQuery } from 'react-responsive';

export const getToken = () => {
    const jwt = localStorage.getItem("token");
    return jwt;
}

export const isLogedIn = () => {
    const jwt = localStorage.getItem("token");
    return jwt ? true : false;
}

export const PC = ({children } : { children: FC }) => {
	const isPC = useMediaQuery({query:"(min-width: 64em)"})
	return isPC ? children : null
}

export const Mobile = ({children} : { children: FC }) => {
	const isMobile = useMediaQuery({query:"(max-width: 48em)"})
	return isMobile ? children : null
}
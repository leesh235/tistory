import React, { ReactChildren, ReactChild } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props{
	children?: ReactChildren | ReactChild | React.ReactNode
}

export const PC = ({children} : Props) => {
	const isPC = useMediaQuery({query:"(min-width: 64em)"})
	return isPC ? <React.Fragment>{children}</React.Fragment> : null
}

export const Tablet = ({children} : Props) => {
	const isTablet = useMediaQuery({query:"(max-width: 64em) and (min-width: 22.5em)"})
	return isTablet ? <React.Fragment>{children}</React.Fragment> : null
}

export const Mobile = ({children} : Props) => {
	const isMobile = useMediaQuery({query:"(max-width: 22.5em)"})
	return isMobile ? <React.Fragment>{children}</React.Fragment> : null
}
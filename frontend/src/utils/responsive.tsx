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
	const isTablet = useMediaQuery({query:"(max-width: 63.94em) and (min-width: 22.5em)"})
	return isTablet ? <React.Fragment>{children}</React.Fragment> : null
}

export const Mobile = ({children} : Props) => {
	const isMobile = useMediaQuery({query:"(max-width: 22.44em)"})
	return isMobile ? <React.Fragment>{children}</React.Fragment> : null
}

export const PCTablet = ({children} : Props) => {
	const isPCTablet = useMediaQuery({query:"(min-width: 22.5em)"})
	return isPCTablet ? <React.Fragment>{children}</React.Fragment> : null
}

export const TabletMobile = ({children} : Props) => {
	const isPCTabletMobile = useMediaQuery({query:"(max-width: 63.94em)"})
	return isPCTabletMobile ? <React.Fragment>{children}</React.Fragment> : null
}

export const PCMobile = ({children} : Props) => {
	const isPCMobile = useMediaQuery({query:"(min-width: 64em) and (max-width: 22.44em)"})
	return isPCMobile ? <React.Fragment>{children}</React.Fragment> : null
}
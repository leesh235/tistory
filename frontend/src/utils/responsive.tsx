import React, { ReactChildren, ReactChild } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props{
	children?: ReactChildren | ReactChild | React.ReactNode
}

export const is_pc = "(min-width: 64em)";
export const is_tablet = "(max-width: 63.94em) and (min-width: 22.5em)";
export const is_mobile = "(max-width: 22.44em)";
export const is_pc_tablet = "(min-width: 22.5em)";
export const is_tablet_mobile = "(max-width: 63.94em)";
export const is_pc_mobile = "(min-width: 64em) and (max-width: 22.44em)";

export const PC = ({children} : Props) => {
	const isPC = useMediaQuery({query: is_pc})
	return isPC ? <React.Fragment>{children}</React.Fragment> : null
}

export const Tablet = ({children} : Props) => {
	const isTablet = useMediaQuery({query: is_tablet})
	return isTablet ? <React.Fragment>{children}</React.Fragment> : null
}

export const Mobile = ({children} : Props) => {
	const isMobile = useMediaQuery({query: is_mobile})
	return isMobile ? <React.Fragment>{children}</React.Fragment> : null
}

export const PCTablet = ({children} : Props) => {
	const isPCTablet = useMediaQuery({query: is_pc_tablet})
	return isPCTablet ? <React.Fragment>{children}</React.Fragment> : null
}

export const TabletMobile = ({children} : Props) => {
	const isTabletMobile = useMediaQuery({query: is_tablet_mobile})
	return isTabletMobile ? <React.Fragment>{children}</React.Fragment> : null
}

export const PCMobile = ({children} : Props) => {
	const isPCMobile = useMediaQuery({query: is_pc_mobile})
	return isPCMobile ? <React.Fragment>{children}</React.Fragment> : null
}
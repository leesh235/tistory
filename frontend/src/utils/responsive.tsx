import { FC } from 'hoist-non-react-statics/node_modules/@types/react';
import { useMediaQuery } from 'react-responsive';

export const PC = ({children } : { children: FC }) => {
	const isPC = useMediaQuery({query:"(min-width: 64em)"})
	return isPC ? children : null
}

export const Mobile = ({children} : { children: FC }) => {
	const isMobile = useMediaQuery({query:"(max-width: 48em)"})
	return isMobile ? children : null
}
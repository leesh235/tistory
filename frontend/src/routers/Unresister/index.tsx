import { RouteComponentProps } from "react-router-dom";
import { UnresisterContainer } from './UnresisterContainer';

const UnresisterIndex = (props: RouteComponentProps) => {
        return(
            <UnresisterContainer props={props} />
        );
}

export default UnresisterIndex;
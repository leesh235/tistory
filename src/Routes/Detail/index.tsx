import { RouteComponentProps } from "react-router-dom";
import { DetailContainer } from './DetailContainer';

const DetailIndex = (props: RouteComponentProps) => {

        const {history, location} = props;

        return(
                <DetailContainer history={history} location={location} />
        );
}

export default DetailIndex;
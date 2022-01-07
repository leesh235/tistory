import React from 'react';
import { ModifyProfileContainer } from './ModifyProfileContainer';
import { RouteComponentProps } from "react-router-dom";

const ModifyProfileIndex = (props: RouteComponentProps) => {
        return(
                <ModifyProfileContainer props={props} />
        );
}

export default ModifyProfileIndex;
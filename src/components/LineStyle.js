import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    width: ${p=>p.w};
    border-bottom: 1px solid ${p=>p.color};
    margin: ${props => props.margin};
`;

export const LineStyle = ({w, color, margin}) => {
    return(
        <Wrapper w={w} color={color} margin={margin} />
    );
}

LineStyle.defaultProps = {
    color: "gray",
}

LineStyle.LineStyle = {
    color: PropTypes.string,
    w: PropTypes.string,
    margin: PropTypes.string,
}
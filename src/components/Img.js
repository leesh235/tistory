import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.img`
    width: ${prop => prop.w};
    height: ${prop => prop.h};
`;

export const Img = ({img, w, h}) => {
    return(
        <Wrapper src={img} w={w} h={h}/>
    );
}

Img.propTypes = {
    img: PropTypes.string,
    w: PropTypes.string,
    h:PropTypes.string,
}
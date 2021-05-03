import React from 'react';
import styled from 'styled-components';

const BodyStyle = styled.div`
    width: auto;
    height: 400px;
    margin: 30px 100px 50px 100px;
`;

const BoxStyle = styled.div`
    height: 400px;
    width: 500px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
`;

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleIn = styled.input`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;

const RatingIn = styled.input`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;

const GenresIn = styled.input`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;

const SummaryIn = styled.textarea`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;


const AddPresenter = () => {
    return (
        <BodyStyle>
            <BoxStyle>
                <ContentStyle>
                    <TitleIn type="text" placeholder="hi" />
                    <RatingIn type="text" placeholder="hi" />
                    <GenresIn type="text" placeholder="hi" />
                    <SummaryIn type="text" placeholder="hi" />
                </ContentStyle>
            </BoxStyle>
        </BodyStyle>
    );
}

export default AddPresenter;
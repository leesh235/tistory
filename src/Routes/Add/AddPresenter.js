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

const SummaryIn = styled.textarea`
    height: 30px;
    width: 80%;
    margin-bottom: 20px;
`;

const ImgIn = styled.input`
    margin-bottom: 20px;
`;

const SubmitIn = styled.button`
    width: 60px;
    height: 60px;
`;


const AddPresenter = ({title, contents, handlePicture, onSubmit}) => {
    return (
        <BodyStyle>
            <BoxStyle>
                <ContentStyle>
                    <form onSubmit={onSubmit}>
                        <TitleIn placeholder={"  제목"} {...title} />
                        <ImgIn type="file" onChange={handlePicture} />
                        <SummaryIn placeholder={"  내용"} {...contents} />
                        <SubmitIn>완료</SubmitIn>
                    </form>
                </ContentStyle>
            </BoxStyle>
        </BodyStyle>
    );
}

export default AddPresenter;
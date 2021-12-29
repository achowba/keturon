import styled from "styled-components";


const BrandWrapper = styled.div`
    background-image: ${({props}) => `url(${props.logoSrc})`};
    background-position: left;
    background-repeat: no-repeat;
    background-size: 70%;
    cursor: pointer;
    display: grid;
    filter: grayscale(100%);
    grid-template-columns: 1fr;
    height: 100px;
    justify-items: center;
    width: 100%;

    > img {
        width: 70%;
    }

    > .overlay {
        background: #ffffff8a;
        position: relative;
        width: 100%;
    }
`;

const Brand = (props) => {
    return (
        <BrandWrapper props={{...props}}>
            <div className="overlay"></div>
        </BrandWrapper>
    )
}

export default Brand;

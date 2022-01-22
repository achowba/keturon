import styled from "styled-components";

const StyledFacility = styled.div`
    cursor: pointer;

    > .img {
        background-image: ${({imgSrc}) => `url(${imgSrc})`};
        background-size: cover;
        background-position: center;
        height: 250px;
    }

    > .body {
        align-items: center;
        background: #ffffff;
        box-shadow: 0 30px 60px -10px #cdcdcd;
        display: flex;
        justify-content: space-between;
        padding: 25px 30px;
        width: calc(100% - 60px);

    > .text {
        h2 {
            color: #2d2d2d;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0;
        }

        p {
            color: #a9a9a9;
            font-size: 14px;
            font-weight: 400;
            margin: 1px 0 0 0;
        }
    }
}
`;

const Facility = (props) => {
    return (
        <StyledFacility {...props}>
            <div className="img"></div>
            <div className="body">
                <div className="text">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="link-view">&gt;</div>
            </div>
        </StyledFacility>
    )
};

export default Facility;

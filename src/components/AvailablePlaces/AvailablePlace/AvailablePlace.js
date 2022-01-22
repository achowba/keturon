import styled from "styled-components";

const StyledAvailablePlace = styled.div`
    cursor: pointer;

    :nth-child(1) {
        grid-column-start: span 2;

        > .img {
            background-position: center;
        }

        h2 {
            font-size: 1.7rem !important;
            font-weight: 600;
        }

        p {
            font-size: 1.1rem !important;
        }
    }

    :nth-child(2) {
        > .img {
            background-position: center -160px;
        }
    }

    > .img {
        background-image: ${({imgSrc}) => `url(${imgSrc})`};
        background-size: cover;
        background-position: center;
        height: 230px;
    }

    > .body {
        align-items: center;
        background: #ffffff;
        box-shadow: 0px 30px 60px -10px #c1c1c1;
        display: flex;
        justify-content: space-between;
        padding: 30px 40px 25px 40px;
        width: calc(100% - 80px);

        > .text {
            h2 {
                color: #2d2d2d;
                font-size: 1.2rem;
                margin: 0;
            }

            p {
                color: #a9a9a9;
                font-size: 0.9rem;
                font-weight: 400;
                margin: 7px 0 0 0;
            }
        }
    }
`;

const AvailablePlace = (props) => {
    return (
        <StyledAvailablePlace {...props}>
            <div className="img"></div>
            <div className="body">
                <div className={`city-${props.name.toLowerCase()} text`}>
                    <h2>{props.name}</h2>
                    <p>{props.hotel} {props.apartment}</p>
                </div>
                <div className="link-view">&gt;</div>
            </div>
        </StyledAvailablePlace>
    )
}

export default AvailablePlace;

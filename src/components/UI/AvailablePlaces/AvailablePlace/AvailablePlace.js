import styled from "styled-components";

const AvailablePlaceWrapper = styled.div`
    :first-child {
        grid-column-start: span 2;

        > .img {
            background-position: center;
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

        .city-surabaya {
            h2 {
                font-size: 1.7rem !important;
                font-weight: 600;
            }

            p {
                font-size: 1.1rem !important;
            }
        }

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
        <AvailablePlaceWrapper {...props}>
            <div className="img"></div>
            <div className="body">
                <div className={`city-${props.name.toLowerCase()} text`}>
                    <h2>{props.name}</h2>
                    <p>{props.hotel} {props.apartment}</p>
                </div>
                <div className="link-view">&gt;</div>
            </div>
        </AvailablePlaceWrapper>
    )
}

export default AvailablePlace;

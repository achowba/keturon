import styled from "styled-components";

import PLACES from "../../../models/data";
import AvailablePlace from "./AvailablePlace/AvailablePlace";

const Wrapper = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1.2fr;
    margin-top: 80px;

    > .places-info {
        margin-top: 70px;

        > h4 {
            color: #275e96;
            font-family: 'Poppins';
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 5px;
            margin: 0 0 30px 0;
        }

        > h3 {
            font-family: "DM Serif Display";
            font-size: 4rem;
            font-weight: 400;
            margin: 0;
        }

        > p {
            color: #c1c1c1;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.7rem;
        }

        > .cta {
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr 1fr;
            margin-top: 80px;
            width: 80%;

            > a {
                font-size: 1.1rem;
                font-weight: 500;
                letter-spacing: 3px;
                padding: 20px 10px;
                text-align: center;
            }

            > .link-view-all {
                background-color: #ff734c;
                color: #ffffff;
            }

            > .link-read-more {
                background-color: #ffffff;
                color: #ff734c;
            }
        }
    }
`;

const PlacesWrapper = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
`;

const AvailablePlaces = () => {
    return (
        <Wrapper>
            <div className="places-info">
                <h4>AVAILABLE PLACES</h4>
                <h3 className="__header">Entire city of choice</h3>
                <p className="__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lectus <br />
                    molestie porttitor aliquet feugiat in quisque fermentum <br />
                    quam leo. Proin l
                </p>
                <div className="cta">
                    <a href="##" className="link-view-all">VIEW ALL</a>
                    <a href="##" className="link-read-more">READ MORE</a>
                </div>
            </div>
            <PlacesWrapper>
                { PLACES.map((place) => <AvailablePlace key={place.id} {...place} />) }
            </PlacesWrapper>
        </Wrapper>
    )
}

export default AvailablePlaces;

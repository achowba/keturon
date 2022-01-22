import styled from "styled-components";

import DATA from "../../models/data";

import * as Text from "../UI/Text/Text";
import ButtonLink from "../UI/ButtonLink/ButtonLink";
import AvailablePlace from "./AvailablePlace/AvailablePlace";

const StyledAvailablePlaces = styled.div`
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1.2fr;
    margin-top: 80px;
    padding: 0 130px;
    z-index: 15;

    > .places-info {
        margin-top: 70px;

        > .cta {
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr 1fr;
            margin-top: 80px;
            width: 80%;
        }
    }
`;

const PlacesWrapper = styled.div`
    display: grid;
    gap: 35px 30px;
    grid-template-columns: 1fr 1fr;
`;

const AvailablePlaces = () => {
    return (
        <StyledAvailablePlaces>
            <div className="places-info">
                <Text.Info>AVAILABLE PLACES</Text.Info>
                <Text.Header>Entire city of choice</Text.Header>
                <Text.Detail>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lectus <br />
                    molestie porttitor aliquet feugiat in quisque fermentum <br />
                    quam leo. Proin l
                </Text.Detail>
                <div className="cta">
                    <ButtonLink>VIEW ALL</ButtonLink>
                    <ButtonLink textColor="#ff734c" bgColor="#ffffff">READ MORE</ButtonLink>
                </div>
            </div>
            <PlacesWrapper>
                {DATA.places.map((place) => <AvailablePlace key={place.id} {...place} />)}
            </PlacesWrapper>
        </StyledAvailablePlaces>
    )
}

export default AvailablePlaces;

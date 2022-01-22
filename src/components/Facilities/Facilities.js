import styled from "styled-components";

// data
import DATA from "../../models/data";

// components
import * as Text from "../UI/Text/Text";
import Facility from "./Facility/Facility";
import ButtonLink from "../UI/ButtonLink/ButtonLink";

const StyledFacilities = styled.div`
    background: #f6f6f6;
    margin-top: -112px;
    padding: 250px 130px 50px 130px;

    > .facilities-info {
        text-align: center;
        margin-bottom: 110px;

        > h4 {
            margin-bottom: 5px;
        }

        > p {
            color: #8d8d8d;
            font-size: 17px;
            line-height: 1.8rem;
            margin-bottom: 65px;
        }

        a {
            letter-spacing: 0;
            margin-top: 30px;
            padding: 20px 40px;
        }
    }
`;

const FacilitiesWrapper = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(4, 1fr);
`;

const Facilities = () => {
    return (
        <StyledFacilities>
            <div className="facilities-info">
                <Text.Info>PUBLIC FACILITIES</Text.Info>
                <Text.Header>Various kinds of Facilities</Text.Header>
                <Text.Detail>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Est fusce tristique placerat id <br />
                    cursus etiam orci, moleste. Viverra teiam ornare enim, et.
                </Text.Detail>
                <ButtonLink>READ MORE</ButtonLink>
            </div>
            <FacilitiesWrapper>
                {DATA.facilities.map((facility) => <Facility key={facility.id} {...facility} />)}
            </FacilitiesWrapper>
        </StyledFacilities>
    );
}

export default Facilities;

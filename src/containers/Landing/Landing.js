import styled from "styled-components";

import SearchHostel from '../../components/UI/SearchHostel/SearchHostel';
import LandingHostel from '../../components/UI/LandingHostel/LandingHostel';


const LandingWrapper = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 45% 55%;
`;

const Landing = () => {
    return (
        <LandingWrapper>
            <LandingHostel/>
            <SearchHostel/>
        </LandingWrapper>
    )
};

export default Landing;

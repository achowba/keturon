import styled from "styled-components";

import Search from "../../components/Search/Search";
import SearchHostel from '../../components/SearchHostel/SearchHostel';
import LandingHostel from '../../components/LandingHostel/LandingHostel';

const LandingWrapper = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
    height: 120vh;
`;

const Landing = () => {
    return (
        <>
            <LandingWrapper>
                <LandingHostel />
                <SearchHostel />
            </LandingWrapper>
            <Search />
        </>
    )
};

export default Landing;

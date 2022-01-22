import styled from "styled-components";

import Landing from "./Landing/Landing";
import Brands from "../components/Brands/Brands";
import Facilities from "../components/Facilities/Facilities";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import AvailablePlaces from "../components/AvailablePlaces/AvailablePlaces";

const LayoutWrapper = styled.div`
    > .test {
        background: #ffffff;
        height: 400px;
        margin-top: -230px;
    }
`;

const Layout = () => {
    return (
        <LayoutWrapper>
            <Landing />
            <Brands />
            <AvailablePlaces />
            <Facilities />
            <CompanyProfile />
        </LayoutWrapper>
    )
};

export default Layout;

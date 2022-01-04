import styled from "styled-components";

import Landing from "./Landing/Landing";
import Brands from "../components/Brands/Brands";
import Facilities from "../components/UI/Facilities/Facilities";
import AvailablePlaces from "../components/UI/AvailablePlaces/AvailablePlaces";

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
            <div className="test"></div>
        </LayoutWrapper>
    )
};

export default Layout;

import styled from "styled-components";

import Landing from "./Landing/Landing";
import Brands from "../components/Brands/Brands";
import AvailablePlaces from "../components/UI/AvailablePlaces/AvailablePlaces";

const LayoutWrapper = styled.div`
    display: grid;

    > .content-wrapper {
        padding: 40px 130px;
    }
`;

const Layout = () => {
    return (
        <LayoutWrapper>
            <Landing />
            <div className="content-wrapper">
                <Brands />
                <AvailablePlaces />
            </div>
        </LayoutWrapper>
    )
};

export default Layout;

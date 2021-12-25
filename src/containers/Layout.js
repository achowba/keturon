import styled from "styled-components";

import Landing from "./Landing/Landing";

const LayoutWrapper = styled.div`
    display: grid;

`;

const Layout = () => {
    return (
        <LayoutWrapper>
            <Landing/>
        </LayoutWrapper>
    )
};

export default Layout;

import styled from "styled-components";

const StyledLogo = styled.div`
    color: ${({fontColor}) => fontColor };
    font-family: "DM Serif Display";
    font-size: 2.5rem;
    font-weight: 400;
`;

const Logo = (props) => {
    return (
            <StyledLogo {...props}>Keturon</StyledLogo>
    );
};

export default Logo;

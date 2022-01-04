import styled from "styled-components";

const StyledButtonLink = styled.a`
    background-color: ${({ bgColor }) => bgColor || '#ff734c'};
    color: ${({ textColor }) => textColor || '#ffffff'};
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 3px;
    padding: 20px 10px;
    text-align: center;
`;

const ButtonLink = (props) => {
    return (
        <StyledButtonLink {...props} href={props.linkTo || '#'}>
            {props.children}
        </StyledButtonLink>
    );
};

export default ButtonLink;

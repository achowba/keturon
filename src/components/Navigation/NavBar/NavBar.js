import styled from "styled-components";

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 75px;

    & > .links {
        display: flex;
        justify-content: space-between;

        > a {
            font-size: 1rem;
            margin-right: 40px;
            color: #777777;
        }

        > a.active {
            color: #393939;
            font-weight: bold;
        }
    }
`;

const NavBar = () => {
    return (
        <NavBarWrapper>
            <div className="links">
                <a href="##" className="active">Home</a>
                <a href="##">Booking</a>
                <a href="##">Blog</a>
                <a href="##">Support</a>
            </div>
            <div className="btn-login">
                <a href="##">LOGIN</a>
            </div>
        </NavBarWrapper>
    )
};

export default NavBar;

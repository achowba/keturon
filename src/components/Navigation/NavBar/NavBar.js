import styled from "styled-components";

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 100px;

    & > .links {
        display: flex;
        justify-content: space-between;

        > a {
            font-size: 1rem;
            margin-right: 40px;
            color: #555555;
        }

        > a.active {
            color: #393939;
            font-weight: bold;
        }
    }

    /* & > .links  */
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

            <span className="btn-login">
                <a href="##">LOGIN</a>
            </span>
        </NavBarWrapper>
    )
};

export default NavBar;

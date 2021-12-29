import styled from "styled-components";

import NavBar from "../../Navigation/NavBar/NavBar";

import assets from "../../../assets/index";

const SearchHostelWrapper = styled.div`
    padding: 45px 70px;

    & .intro-header {
        font-family: "DM Serif Display";
        font-size: 4.5rem;
        font-weight: 400;
        line-height: 6rem;
        margin-bottom: 30px;
        margin-top: 120px;
    }

    & .intro-text {
        color: #a5a5a5;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.8rem;
    }
`;

const IntroWrapper = styled.div`
    margin-bottom: 50px;
`;

const StatsWrapper = styled.div`
    display: flex;
`;

const Stat = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;

    > .icon {
        align-items: center;
        background: #ffffff;
        border: 1px solid #e3e3e3;
        border-radius: 50%;
        display: grid;
        height: 45px;
        justify-content: center;
        margin-right: 15px;
        width: 45px;

        & > img {
            width: 22px;
        }
    }

    :last-child {
        margin-left: 40px;
    }
`;

const SearchHostel = () => {
    return (
        <SearchHostelWrapper>
            <NavBar />
            <IntroWrapper>
                <h3 className="intro-header">
                    The best place to <br />
                    rest like home
                </h3>
                <p className="intro-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lectus <br />
                    molestie porttitor aliquet feugiat in quisque fermentum quam leo. <br />
                    Proin lorem ornane sapien elementum, nunc, cursus
                </p>
            </IntroWrapper>
            <StatsWrapper>
                <Stat>
                    <div className="icon">
                        <img src={assets.icons.houseIconBlue} alt="" />
                    </div>
                    <p><b>720</b> Apartments</p>
                </Stat>
                <Stat>
                    <div className="icon">
                        <img src={assets.icons.pinIconBlue} alt="" />
                    </div>
                    <p><b>3</b> branches in Indonesia</p>
                </Stat>
            </StatsWrapper>
        </SearchHostelWrapper>
    )
};

export default SearchHostel;

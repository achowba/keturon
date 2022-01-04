import styled from "styled-components";

import Brand from "./Brand/Brand";
import assets from "../../assets/index";

const BrandsWrapper = styled.div`
    background: #ffffff8a;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 40px;
    padding: 50px 130px 0 130px;
`;

const Brands = () => {
    return (
        <BrandsWrapper>
            <Brand logoSrc={assets.logos.airbnbLogo} altName="Airbnb" />
            <Brand logoSrc={assets.logos.bookingComLogo} altName="Booking.Com" />
            <Brand logoSrc={assets.logos.travelokaLogo} altName="Traveloka" />
            <Brand logoSrc={assets.logos.redDoorzLogo} altName="Reddoorz" />
            <Brand logoSrc={assets.logos.oyoLogo} altName="OYO" />
        </BrandsWrapper>
    )
}

export default Brands;

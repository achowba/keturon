import styled from "styled-components";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Logo from "../UI/Logo/Logo";

const StyledFooter = styled.div`
    background: #ffffff;
    display: grid;
    gap: 70px;
    /* grid-template-columns: 20% max-content max-content max-content max-content; */
    grid-template-columns: 20% 1fr 1fr 1fr 1fr;
    padding: 100px 130px 80px 130px;
`;

const FooterLinks = styled.div`
    h4 {
        color: #0f1f31;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 30px;
    }

    ul {
        padding: 0;

        li {
            list-style: none;
            margin-bottom: 8px;

            a {
                color: #696969;
                font-size: 14px;
            }
        }
    }

    .social-links {
        display: flex;

        li:not(:first-child) {
            margin-left: 20px;
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Logo fontColor="#000000" />
            <FooterLinks>
                <h4>Learn More</h4>
                <ul>
                    <li><a href="##">About Lift</a></li>
                    <li><a href="##">Press Releases</a></li>
                    <li><a href="##">Environment</a></li>
                    <li><a href="##">Jobs</a></li>
                    <li><a href="##">Privacy Policy</a></li>
                    <li><a href="##">Contact Us</a></li>
                </ul>
            </FooterLinks>
            <FooterLinks>
                <h4>Tickers & Booking</h4>
                <ul>
                    <li><a href="##">Lift Tickets</a></li>
                    <li><a href="##">Season Passes</a></li>
                    <li><a href="##">Vacation Packages</a></li>
                </ul>
            </FooterLinks>
            <FooterLinks>
                <h4>Contact Us</h4>
                <ul>
                    <li><a href="##">Hotel Reservation: 123-456-7890</a></li>
                    <li><a href="##">Ticket Office: 123-456-7890</a></li>
                </ul>
            </FooterLinks>
            <FooterLinks>
                <h4>Social</h4>
                <ul className="social-links">
                    <li>
                        <a href="##"><FontAwesomeIcon icon={faCoffee} /></a>
                    </li>
                    <li>
                        <a href="##"><FontAwesomeIcon icon={faCoffee} /></a>
                    </li>
                    <li>
                        <a href="##"><FontAwesomeIcon icon={faCoffee} /></a>
                    </li>
                    <li>
                        <a href="##"><FontAwesomeIcon icon={faCoffee} /></a>
                    </li>
                    <li>
                        <a href="##"><FontAwesomeIcon icon={faCoffee} /></a>
                    </li>
                </ul>
            </FooterLinks>

        </StyledFooter>
    )
}

export default Footer;

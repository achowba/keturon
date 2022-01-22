import styled from "styled-components";

// assets
import assets from "../../../assets/index";

const StyledTestimonial = styled.div`
    background-color: #ffffff;
    padding: 70px 50px 50px 50px;

    > img {
        height: 15px;
        width: 15px;
        margin-bottom: 10px;
    }

    > p {
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 35px;
        margin-bottom: 40px;
    }

    .testimonial-footer {
        align-items: center;
        display: flex;
        justify-content: space-between;

        .author {
            align-items: center;
            display: flex;

            > img {
                border-radius: 50%;
                height: 55px;
                width: 55px;
            }

            p {
                font-weight: 600;
                margin-left: 20px;
            }
        }

        .rating {
            align-items: center;
            display: flex;

            > img {
                height: 20px;
                width: 20px;
            }

            p {
                font-weight: 600;
                margin-left: 10px;
            }
        }
    }
`;

const Testimonial = (props) => {
    return (
        <StyledTestimonial {...props}>
            <img src={assets.icons.quoteIcon} alt="Quote" />
            <p dangerouslySetInnerHTML={{ __html: props.details }}></p>
            <div className="testimonial-footer">
                <div className="author">
                    <img src={props.authorImg} alt={`${props.name} Testimonial`} />
                    <p>{props.name}</p>
                </div>
                <div className="rating">
                    <img src={assets.icons.starIcon} alt="Star" />
                    <p>{props.rating}</p>
                </div>
            </div>
        </StyledTestimonial>
    );
}

export default Testimonial;

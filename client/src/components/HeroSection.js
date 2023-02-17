// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { Button } from "../styles/Button";

// --------------------> New Code <---------
import Slider from './Slider'
// import Brands from './Brands'
import styled from "styled-components";
// --------------------> New Code <---------

// const HeroSection = ({ myData }) => {
const HeroSection = () => {
    // const { name } = myData;

    return (
        // <Wrapper>
        //   <div className="container">
        //     <div className="grid grid-two-column">
        //       <div className="hero-section-data">
        //         <p className="intro-data">Welcome to </p>
        //         <h1> {name} </h1>
        //         <p>
        //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        //           atque temporibus veniam doloribus libero ad error omnis voluptates
        //           animi! Suscipit sapiente.
        //         </p>
        //         <NavLink>
        //           <Button>show now</Button>
        //         </NavLink>
        //       </div>

        //       <div className="hero-section-image">
        //         <figure>
        //           <img
        //             src="images/hero.jpg"
        //             alt="hero-section-photo"
        //             className="img-style"
        //           />
        //         </figure>
        //       </div>
        //     </div>
        //   </div>
        // </Wrapper>

        // --------------------> New Code <---------
        <Wrapper>
            <Slider />
            {/* <Brands /> */}
            {/* <div>
        <img src='./images/HomeImage.jpg' alt='afterSliderImage' style={{ width: "100%" }} />
      </div> */}
        </Wrapper>
        // --------------------> New Code <---------
    );
};

// --------------------> New Code <---------

const Wrapper = styled.section`

/* @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap'); */

/* *{
    font-family: 'Bebas Neue', cursive;
} */

.home__main__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    background-color: #ffddf4;
    margin: 20px auto;
    padding: 10px;
    border-radius: 8px;
    height: 490px;
    width: 90%;

}

.home__main__container__left {
    display: flex !important;
    justify-content: center !important;
    flex-direction: column !important;
    margin-left: 30px;
}

.home__main__container-mainHeading {
    font-size: 3.5rem;
}

.home__main__container-firstHeading,
.home__main__container-priceHeading {
    font-size: 1.7rem;
    color: #ff43a4;
}

.home__main__container-priceHeading>span {
    /* color: var(--black); */
    color: #333;
    font-size: 1.3rem;
}

.home__main__container__right-img {
    height: 480px;
}

@media screen and (max-width:768px) {
    .home__main__container {
        display: grid;
    }

    .home__main__container__right-img {
        width: 350px;
        height: 480px;
        background-position: bottom;
    }
}

@media screen and (max-width:425px) {
    .home__main__container {
        display: grid;
        height: 400px;
    }

    .home__main__container__right-img {
        display: none;
    }
}

@media screen and (max-width:320px) {
    .home__main__container {
        display: grid;
        font-size: 1.4rem;
    }

    .home__main__container__right-img {
        display: none;
    }
}
`;

// --------------------> New Code <---------



// const Wrapper = styled.section`
//   padding: 12rem 0;

//   img {
//     min-width: 10rem;
//     height: 10rem;
//   }

//   .hero-section-data {
//     p {
//       margin: 2rem 0;
//     }

//     h1 {
//       text-transform: capitalize;
//       font-weight: bold;
//     }

//     .intro-data {
//       margin-bottom: 0;
//     }
//   }

//   .hero-section-image {
//     width: 100%;
//     height: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   figure {
//     position: relative;

//     &::after {
//       content: "";
//       width: 60%;
//       height: 80%;
//       background-color: rgba(81, 56, 238, 0.4);
//       position: absolute;
//       left: 50%;
//       top: -5rem;
//       z-index: -1;
//     }
//   }
//   .img-style {
//     width: 100%;
//     height: auto;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid {
//       gap: 10rem;
//     }

//     figure::after {
//       content: "";
//       width: 50%;
//       height: 100%;
//       left: 0;
//       top: 10%;
//       /* bottom: 10%; */
//       background-color: rgba(81, 56, 238, 0.4);
//     }
//   }
// `;

export default HeroSection;

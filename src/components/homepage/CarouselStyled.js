import styled from 'styled-components';


export const SliderWrapper = styled.section`
    img {
        object-fit: contain;
        width: 100%;
    }
    .container-hero{
        max-width: 1200px;
        margin: 0px auto;
        /* padding: 0 2rem;  */
    }
    .hero-category {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
    }

    @media only screen and (max-width: 767px){
        .hero-category{
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 10px;
        }
        img {
            object-fit: contain;
            /* width: 100%; */
            padding: 0 1rem;
        }
    }

`
import styled from 'styled-components';

export const DisplayWrapper = styled.section`
        margin-top: 200px;
        background-color: #33A0FF;
        max-height: 620px;
        color: white;

    .iphone-plus{
        max-width: 1200px;
        margin: 0px auto;
        padding: 0 2rem; 
        display: grid;
        justify-content: space-between;
        grid-template-columns: 1fr 1fr;
    }
    .iphone-display{
        transform: translateY(-100px);
    }
    .iphone-plus div > h1{
        font-size: 48px;
        font-weight: 500;
        margin: 50px 0 100px 0;
    }
    .iphone-plus div > p{
        font-size: 22px;
        margin-bottom: 50px;
    }
    .iphone-plus div > a{
        text-decoration: none;
        color: white;
        
    }

    @media only screen and (max-width: 767px){
        .iphone-display{
            display: none;
         }
    }
`
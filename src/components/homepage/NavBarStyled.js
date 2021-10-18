import styled from 'styled-components';

export const NavBarWrapper = styled.section`
    nav > div{
    max-width: 700px;
    margin: 50px auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    }
    nav div > a {
        text-decoration: none;
        color: black;
        cursor: pointer;
        /* display: block; */
    }
    nav div > a:hover{
        color: grey;
    }
    .dropdown-menu {
        display: none;
        position: absolute;
        min-width: 400px;
        height: 350px;
        z-index: 1;
        box-shadow: 1px 1px 3px rgb(229, 225, 225);
    }
    .dropdown-menu > div{
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
        background-color: #F6F7F8;
        /* flex-wrap: wrap; */
    }
    .stage-one > a, .stage-two > a, 
    .stage-three > a, .stage-four > a, 
    .stage-five > a{
        text-decoration: none;
        color: black;
        cursor: pointer;
        display: block;
    }
    .stage-two, .stage-three, .stage-four, .stage-five{
        margin: 0 30px;
    }
    .stage-one > h4, .stage-two > h4,  .stage-three > h4, 
    .stage-four > h4,  .stage-five > h4 {
        color: lightgray;
    }
    .stage-one{
        padding-left: 10px;
    }
    .right-menu {
        position: relative;
        /* display: inline-block; */
        /* float: center; */
    }
    .right-menu:hover .dropdown-menu{
        display: block;
    }
    .nav-header{
        margin: 50px 0;
    }
    .nav-image {
        display: flex;
        justify-content: center;
        margin: 50px 0;
    }
    .nav-bar, .menu-bar{
        max-width: 700px;
        margin: 0px auto;
    }
    .nav-bar ul, .menu-bar ul{
        display: flex;
        justify-content: space-evenly;
        margin-top: 70px;
        flex-wrap: wrap;
    }
    .nav-bar li, .menu-bar li{
        list-style: none;
    }
    .nav-bar a, .menu-bar a{
        color: black;
        text-decoration: none;
        cursor: pointer;
        font-weight: 400;
    }    

`
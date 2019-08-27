import { createGlobalStyle } from 'styled-components'
import { colors, variables, fonts } from "./vars";

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: colfax-web;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/light.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/light.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/light.woff) format("woff");
    font-style: normal;
    font-weight: 300
  }

  @font-face {
    font-family: colfax-web;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/regular.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/regular.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/regular.woff) format("woff");
    font-style: normal;
    font-weight: 400
  }

  @font-face {
    font-family: colfax-web;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/medium.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/medium.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/medium.woff) format("woff");
    font-style: normal;
    font-weight: 500
  }

  @font-face {
    font-family: colfax-web;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/bold.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/bold.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/colfax/bold.woff) format("woff");
    font-style: normal;
    font-weight: 600
  }

  @font-face {
    font-family: gilroy;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Regular.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Regular.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Regular.woff) format("woff");
    font-style: normal;
    font-weight: 400
  }

  @font-face {
    font-family: gilroy;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Medium.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Medium.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Medium.woff) format("woff");
    font-style: normal;
    font-weight: 500
  }

  @font-face {
    font-family: gilroy;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Bold.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Bold.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Bold.woff) format("woff");
    font-style: normal;
    font-weight: 700
  }

  @font-face {
    font-family: gilroy;
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Black.eot);
    src: url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Black.eot?#iefix) format("embedded-opentype"), url(https://s3.amazonaws.com/secondchance.assets/fonts/gilroy/Gilroy-Black.woff) format("woff");
    font-style: normal;
    font-weight: 900
  }

  //@font-face {
  //  font-family: calibre-web;
  //  src: url("/fonts/cal-regular-webfont.eot");
  //  src: url("/fonts/cal-regular-webfont.eot?#iefix") format("embedded-opentype"), url("/fonts/cal-regular-webfont.woff2") format("woff2"), url("/fonts/cal-regular-webfont.woff") format("woff"), url("/fonts/cal-regular-webfont.ttf") format("truetype"), url("/fonts/cal-regular-webfont.svg#calibre_regularregular") format("svg");
  //  font-weight: 400;
  //  font-style: normal
  //}

  @font-face {
    font-family: noe-display-web;
    src: url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-bold.eot") format("embedded-opentype");
    font-weight: 700;
    font-style: normal
  }

  @font-face {
    font-family: noe-display-web;
    src: url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-bold.woff") format("woff"), url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-bold.ttf") format("truetype"), url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-bold.svg#NoeDisplay-Bold") format("svg");
    font-weight: 700;
    font-style: normal
  }

  @font-face {
    font-family: noe-display-web;
    src: url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-regular.eot") format("embedded-opentype");
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: noe-display-web;
    src: url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-regular.woff") format("woff"), url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-regular.ttf") format("truetype"), url("https://s3.amazonaws.com/secondchance.assets/fonts/noe-display-web/noe-display-regular.svg#NoeDisplay-Regular") format("svg");
    font-weight: 400;
    font-style: normal
  }

  html {
    font-family: 'gilroy', sans-serif;
    font-size: ${variables.baseFontSize}rem;
    line-height: 1.75;
    letter-spacing: 1px;
  }
  
  .preventScroll {
    overflow: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  a {
    margin-top: 0;
  }

  h1 {
    font-family: ${fonts.headingPrimary}, sans-serif;
    font-weight: 900;
    font-size: ${4.5 * variables.baseFontSize}rem;
    margin-bottom: 1rem;
    line-height: 1.05;
    letter-spacing: 1.5px;
    text-transform: capitalize;

    @media (max-width: 52em) {
      font-size: ${2.5 * variables.baseFontSize}rem;
      letter-spacing: 3px;
      line-height: 1.25;
    }
  }

  h2 {
    font-family: ${fonts.headingPrimary}, serif;
    font-weight: 900;
    font-size: ${2.25 * variables.baseFontSize}rem;
    margin-bottom: 1rem;
    line-height: 1.25;
    letter-spacing: 1.5px;
    
    @media (max-width: 52em) {
      font-size: ${1.75 * variables.baseFontSize}rem;
    }
  }

  h3 {
    font-family: ${fonts.headingPrimary}, serif;
    font-weight: 700;
    font-size: ${1.5 * variables.baseFontSize}rem;
    line-height: 1.35;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
    
    @media (max-width: 52em) {
      font-size: ${1.35 * variables.baseFontSize}rem;
    }
  }

  h4 {
    font-size: ${1.25 * variables.baseFontSize}rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: ${1.15 * variables.baseFontSize}rem;
    line-height: 1.35;
    margin-bottom: 1rem;
  }

  h6 {
    //font-family: noe-display-web, serif;
    font-weight: 400;
    font-size: ${1.15 * variables.baseFontSize}rem;
    line-height: 1.45;
    margin-bottom: 1rem;
  }

  blockquote {
    //font-family: noe-display-web, serif;
    font-weight: 400;
    font-size: ${1.15 * variables.baseFontSize}rem;
    line-height: 1.75;
    font-style: italic;
    border-left: 4px solid ${colors.primary};
    padding: 1rem 0 1rem 2rem;
    margin-top: 4rem;
    margin-bottom: 4rem;

    p {
      margin-bottom: 0 !important;
    }
  }

  ul,
  ol {
    list-style-position: inside;

    li {
      margin: 0;
    }
  }

  hr {
    border: rgba(19,19,19,0.15) 1px solid;
  }

  p {
    line-height: 1.5;

    &:last-of-type {
      margin-bottom: 1rem;
    }

    a {
      color: ${colors.primary};
      text-decoration: none;
      transition: all 0.25s ease-in-out;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        background: ${colors.secondary};
        height: 1px;
        margin-bottom: -2px;
        transition: width .4s;
      }

      &:hover {
        color: ${colors.secondary};
        transition: all 0.25s ease-in-out;

        &:after {
          width: 100%;
        }
      }
    }
  }

  ::selection {
    background-color: rgba(19,19,19,0.75);
    color: ${colors.primary};
  }

`
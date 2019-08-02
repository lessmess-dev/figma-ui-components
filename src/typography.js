// @flow
import { createGlobalStyle } from 'styled-components'

export const TextStyles = createGlobalStyle`
  /*  Typography */
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 400;
        src: url("https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7") format("woff2"),
             url("https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 500;
        src: url("https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7") format("woff2"),
             url("https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7") format("woff");
    }
    
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: 600;
        src: url("https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7") format("woff2"),
             url("https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7") format("woff");
    }
`;

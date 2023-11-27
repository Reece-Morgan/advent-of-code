import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

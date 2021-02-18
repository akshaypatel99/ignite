import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #51548C;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
		background-color: #BFC0D9;
	}
  }
  body {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    background: #C7D3F0;
    color: #34366a;
  }
  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
  }
  h3 {
    font-size: 1.5rem;
    color: #34366a;
    padding: 1.5rem 0rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #34366a;
  }
  a {
    text-decoration: none;
    color: #34366a;
  }
  img {
    display: block;
  }
  input {
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    color: #34366a;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 2rem;
    }
		h3 {
			padding: 0.5rem 0rem;
		}
    p {
    font-size: 1rem;
    line-height: 200%;
    color: #34366a;
  }
	}
`;

export default GlobalStyles;

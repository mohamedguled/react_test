import '../styles/globals.css';
// import "@fontsource/roboto"
import '@fontsource/open-sans';
import '@fontsource/inter';
import type { AppProps } from 'next/app';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      {/* <Wrapper> */}
        <Component {...pageProps} />
      {/* </Wrapper> */}
    </>
  );
}

export default MyApp;

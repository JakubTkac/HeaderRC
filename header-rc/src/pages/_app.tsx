import type { AppProps } from "next/app";
import GlobalStyle from "../../config/global";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

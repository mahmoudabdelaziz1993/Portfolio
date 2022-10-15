import { AppProps } from "next/app";
import "./../style.css";

export default function AppPage({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

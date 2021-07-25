import "../styles/globals.css";
import type { AppProps } from "next/app";
import FormState from "../utils/Form/FormState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormState>
      <Component {...pageProps} />
    </FormState>
  );
}
export default MyApp;

import "../styles/global.css";
import { AppProps } from "next/app";
import { UserInterfaceProvider } from "../contexts/UserInterfaceContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserInterfaceProvider>
      <Component {...pageProps} />
    </UserInterfaceProvider>
  );
}

export default MyApp;

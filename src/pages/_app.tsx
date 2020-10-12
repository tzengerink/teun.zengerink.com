import { AppProps } from "next/app"
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => <Component {...pageProps} />;

export default App;

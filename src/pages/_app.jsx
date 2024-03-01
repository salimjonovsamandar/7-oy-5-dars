import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;
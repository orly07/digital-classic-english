// src/App.js
import { Helmet } from "react-helmet";
import Layout from "./components/Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import AppRoutes from "./routes/AppRoutes";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTop from "./utils/helpers/ScrollToTop";
import HashElement from "./utils/helpers/HashElement";

function App() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ErrorBoundary>
        <GlobalStyle />
        <Layout>
          <ScrollToTop />
          <HashElement />
          <AppRoutes />
        </Layout>
      </ErrorBoundary>
    </>
  );
}

export default App;

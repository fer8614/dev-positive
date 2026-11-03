import "../styles/globals.css";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ErrorBoundary>
      <Layout>
        <Component key={router.route} {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}

export default MyApp;

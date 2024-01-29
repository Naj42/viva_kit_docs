import "../styles/globals.css";

export default function Nextra({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

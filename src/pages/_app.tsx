import "../styles/globals.css";

import { SessionProvider as NextAuthProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <NextAuthProvider session={session}>
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

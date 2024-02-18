import '../../style/globals.css';
import { Montserrat } from "@next/font/google"
import type { AppProps } from 'next/app'

const montserrat = Montserrat({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <main className={`flex flex-col min-h-screen w-full bg-background ${montserrat.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

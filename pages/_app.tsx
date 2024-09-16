import SiteHeader from "@/Components/SiteHeader/SiteHeader";
import store from "./../Store/index";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import RegisterModals from "@/Components/RegisterModals/RegisterModals";
import Footer from "@/Components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" >
        <div className="w-full relative ">
        {/* <button className=" bg-red-600 z-[10000000] absolute left-0 top-0 hidden"  onClick={()=>{alert('boooom')}} >Booooom !!!</button> */}
          <SiteHeader />
          
          <Component {...pageProps} />
          <Footer />
          <RegisterModals />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

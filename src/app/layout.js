import { Inter } from "next/font/google";
import "./globals.scss";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Containers/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css"; // Import the base styles
import "swiper/css/navigation"; // Import the navigation styles (optional)
import "swiper/css/pagination";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { CourseProvider } from "./utils/courseContext";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export const metadata = {
  title: "AMIT Coders",
  description: "Step into the World of Tech",
};

export default function RootLayout({ children }) {
  const facebookPixelId = "188878099982410";
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" type="image/ico" href="/Assets/favicon.ico" />

          <script
            async
            data-id="8451892967"
            id="chatling-embed-script"
            type="text/javascript"
            src="https://chatling.ai/js/embed.js"
          ></script>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-NY0VVLFS10"
          ></script>
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NY0VVLFS10');
          `}
          </Script>

          <Script
            id="facebook-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '188878099982410');
                fbq('track', 'PageView');
              `,
            }}
          />
          {/* <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
            />
          </noscript> */}
        </head>
        <body className={inter.className}>
          <NavBar />
          {children}
          <Footer />
          <img
            className="chat-btn"
            src="/Assets/cody-icon-hero-phone.svg"
            alt=""
          />
        </body>
      </html>
    </>
  );
}

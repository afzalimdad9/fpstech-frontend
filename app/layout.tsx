"use client";
//import { WhatsAppWidget } from '@/node_modules/react-whatsapp-widget/dist/index.js';
//import 'react-whatsapp-widget/dist/index.css';

//const WhatsAppWidget = import('@/node_modules/react-whatsapp-chat-widget/index') as any;
import WhatsAppWidget from '@/node_modules/react-whatsapp-chat-widget/index';
import "react-whatsapp-chat-widget/index.css";


import Header from "./_components/Header";
import Footer from "./_components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>FPS Technology</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* CSS ============================================ */}
      {/* Icon Font CSS */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      {/* Plugins CSS */}
      <link rel="stylesheet" type="text/css" href="scss/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="scss/swiper-bundle.min.css" />
      {/* Style CSS */}
      <link rel="stylesheet" type="text/css" href="scss/style.css" />
      <link rel="stylesheet" type="text/css" href="scss/common.css" />
      <link rel="stylesheet" type="text/css" href="scss/responsive.css" />
      {/* fonts css  */}
      <link
        href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
              var s1 = document.createElement("script"),s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src='https://embed.tawk.to/66acb85a1601a2195b9ff084/1i49b08mn';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />


         {/* Add the widget script here */}
         {/* <script type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var options = {
                  whatsapp: "+919826255524", // Your WhatsApp number
                  call_to_action: "Message us", // Call to action
                  position: "left", // Position may be 'right' or 'left'
                };
                var proto = document.location.protocol,
                  host = "getbutton.io",
                  url = proto + "//static." + host;
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = url + "/widget-send-button/js/init.js";
                s.onload = function () {
                  WhWidgetSendButton.init(host, proto, options);
                };
                var x = document.getElementsByTagName("script")[0];
                x.parentNode.insertBefore(s, x);
              })();
            `,
          }}
        /> */}

     </head>
     
      <body>
         <WhatsAppWidget phoneNo="919826255524" position="left" />
         <Header />
         {children}
         <Footer />
         
      </body>
      
    </html>
  );
}

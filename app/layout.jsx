import "./globals.css";

import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Animechakra!",
  description: "Where anime and magic comes together!",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="/assets/favicon/animechakra_favicon.ico"
            sizes="any"
          />
        </head>
        <body className="bg-anime-blue">
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app ">
            <Navbar />
            {children}
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;

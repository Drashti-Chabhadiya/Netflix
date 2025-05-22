import { Container } from "@mui/material";
import Footer from "./components/common/Footer";

import "./globals.css";
// import Header from "./components/common/Header";

export const metadata = {
  title: "Your App",
  description: "App description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div
          style={{
            backgroundColor: "black",
            // minHeight: "100vh",
          }}>
          {/* Optional: Add Header here */}
          {/* <Header /> */}
          <main style={{ flex: 1 }}>{children}</main>
          <Container maxWidth={"lg"}>
            <Footer />
          </Container>
        </div>
      </body>
    </html>
  );
}

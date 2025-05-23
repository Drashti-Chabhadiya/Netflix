import Footer from './components/common/Footer';
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Netflix India – Watch TV Shows Online, Watch Movies Online',
  description: 'App description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <div
          style={{
            backgroundColor: 'black',
            color: 'white',
            // height: "100vh",
            // minHeight: "100vh",
          }}
        >
          <main
            style={
              {
                // flex: 1,
                // overflow: 'hidden',
              }
            }
          >
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

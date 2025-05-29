import './globals.css';
import { Providers } from './providers';
import LayoutWrapper from './components/common/LayoutWrapper';
import ReduxProvider from './components/ReduxProvider';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Netflix India – Watch TV Shows Online, Watch Movies Online',
  description: 'App description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ReduxProvider>
          <Providers>
            <LayoutWrapper>{children}</LayoutWrapper>
            <ToastContainer />
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}

import './globals.css';
import { Providers } from './providers';
import LayoutWrapper from './components/common/LayoutWrapper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ToastContainer } from 'react-toastify';
import AOSWrapper from './components/common/animation/AOSWrapper';
import ReduxProvider from './components/provider/ReduxProvider';
import SessionReduxBridge from './components/provider/SessionReduxBridge';

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
            <AOSWrapper>
              <LayoutWrapper>
                <SessionReduxBridge />
                {children}
                <ToastContainer />
              </LayoutWrapper>
            </AOSWrapper>
          </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}

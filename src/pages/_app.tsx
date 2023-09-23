import Header from '@/components/Header';
import SideNav from '@/components/SideNav';
import VrmViewer from '@/components/VrmViewer';
import { useThemeStore } from '@/store/theme';
import '@/styles/globals.css';
import { ThemeProvider } from '@lobehub/ui';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const themeMode = useThemeStore((s) => s.themeMode);
  return (
    <ThemeProvider themeMode={themeMode}>
      <Header />
      <main style={{ display: 'flex', width: '100%' }}>
        <SideNav />
        <div style={{ flexGrow: 1 }}>
          <Component {...pageProps} />
        </div>
        <div style={{ flexBasis: '50%' }}>
          <VrmViewer />
        </div>
      </main>
    </ThemeProvider>
  );
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BannerProvider } from './context/BannerContext';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BannerProvider>
      <App />
    </BannerProvider>
  </StrictMode>
);

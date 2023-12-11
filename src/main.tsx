import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense
        fallback={
          <div className='flex h-screen items-center justify-center bg-slate-600 pb-24'>
            <p className='text-center text-4xl text-slate-300'>
              Checking token...
            </p>
          </div>
        }>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);

import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import './styles.css';

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen bg-slate-100 text-slate-900">
        <div className="h-full flex flex-col min-h-0">
          <div className="bg-slate-900 border-b border-slate-800 flex items-center justify-between py-4 px-8 box-border">
            <Link to="/home" className="block leading-3 w-1/3">
              <div className="font-black text-2xl text-white">GitHub Battle</div>
              <div className="text-slate-500">a Remix Demo</div>
            </Link>
            <div className="flex items-center gap-6">
              <p className='text-white'>link one</p>
              <p className='text-white'>link two</p>
              <p className='text-white'>link three</p>
            </div>
            <div className="w-1/3 flex justify-end"></div>
          </div>
          <div className="flex-grow-min-h-0 h-full">
            <Outlet />
          </div>
        </div>
      </body>
    </html>
  );
}

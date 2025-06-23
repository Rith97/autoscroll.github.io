
import React from 'react';
import FacebookPosterForm from './components/FacebookPosterForm';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 to-indigo-600 flex flex-col items-center justify-center p-4 selection:bg-indigo-200 selection:text-indigo-800">
      <div className="bg-white shadow-2xl rounded-xl p-6 md:p-10 w-full max-w-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Facebook Poster 🇺🇸
          </h1>
          <p className="text-slate-600 mt-2">
            Craft and schedule your Facebook posts with ease.
          </p>
        </header>
        <FacebookPosterForm />
      </div>
      <footer className="mt-8 text-center text-white/80 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Enhanced Tools. All rights reserved.</p>
        <p className="mt-1">This is a demo application and does not actually post to Facebook.</p>
      </footer>
    </div>
  );
};

export default App;
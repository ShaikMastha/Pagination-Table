import React from 'react';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              User Directory
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
            Browse through our user database with elegant pagination.
          </p>
        </div>
        
        <UserTable />
        
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            Data provided by{' '}
            <a 
              href="https://reqres.in/" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              reqres.in
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
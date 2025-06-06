import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 rounded-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">
            {message}
          </p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={onRetry}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 
                    font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 
                    transition-colors duration-150"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorDisplay;
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <tr key={index} className="animate-pulse border-b border-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 ring-2 ring-gray-100"></div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded-full"></div>
              <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="space-y-2">
              <div className="h-4 w-40 bg-gray-200 rounded-full"></div>
              <div className="h-3 w-28 bg-gray-200 rounded-full"></div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right">
            <div className="ml-auto h-8 w-24 bg-gray-200 rounded-full"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default LoadingSkeleton;
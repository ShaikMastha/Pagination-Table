import React from 'react';
import { User } from '../types';
import { ExternalLink } from 'lucide-react';

interface UserTableRowProps {
  user: User;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ user }) => {
  return (
    <tr className="hover:bg-blue-50/50 backdrop-blur-sm transition-all duration-300 ease-in-out group border-b border-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center justify-center">
          <div className="relative">
            <img 
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-lg transform group-hover:scale-110 transition-all duration-300 ease-in-out group-hover:shadow-xl" 
              src={user.avatar} 
              alt={user.name} 
            />
            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="transform transition-all duration-300 group-hover:translate-x-2">
          <div className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {user.name}
          </div>
          <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
            @{user.username}
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="transform transition-all duration-300 group-hover:translate-x-2">
          <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            {user.email}
          </div>
          <div className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300 flex items-center gap-1">
            {user.website}
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-full transition-all duration-300 group-hover:shadow-md">
          View Profile
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;

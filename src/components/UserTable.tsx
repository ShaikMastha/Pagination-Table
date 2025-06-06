import React, { useState, useEffect } from 'react';
import { User, ApiResponse } from '../types';
import { fetchUsers } from '../services/api';
import Pagination from './Pagination';
import UserTableRow from './UserTableRow';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorDisplay from './ErrorDisplay';
import { Users } from 'lucide-react';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async (page: number) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response: ApiResponse = await fetchUsers(page);
      setUsers(response.data);
      setTotalPages(response.total_pages);
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to load users. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUsers(currentPage);
  }, []);

  const handlePageChange = (page: number) => {
    loadUsers(page);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Users className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg leading-6 font-semibold text-gray-900">Users Directory</h3>
            <p className="mt-1 text-sm text-gray-500">
              Browse through our user database with elegant pagination
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-50/50 backdrop-blur-sm">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avatar
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {error ? (
              <tr>
                <td colSpan={4}>
                  <ErrorDisplay message={error} onRetry={() => loadUsers(currentPage)} />
                </td>
              </tr>
            ) : isLoading ? (
              <LoadingSkeleton />
            ) : (
              users.map((user) => <UserTableRow key={user.id} user={user} />)
            )}
          </tbody>
        </table>
      </div>

      <div className="px-6 border-t border-gray-100">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default UserTable;



import React from 'react';
import ProtectedLayout from '../components/ProtectedLayout';

const page = () => {
  return (
    <div>
      <ProtectedLayout redirectTo="/">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="mt-4 text-lg">Welcome to the dashboard!</p>
        </div>
      </ProtectedLayout>
    </div>
  );
};

export default page;

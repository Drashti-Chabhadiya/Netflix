'use client';

import React from 'react';
import ProtectedLayout from '../components/ProtectedLayout';

const page = () => {
  return (
    <ProtectedLayout redirectTo="/">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Trending</h1>
        <p className="mt-4 text-lg">This is the trending page.</p>
      </div>
    </ProtectedLayout>
  );
};

export default page;

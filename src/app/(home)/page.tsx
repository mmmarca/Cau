'use client';

import React from 'react';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <h1 className="block text-md font-semibold uppercase mb-10">Currently Reading</h1>
      <div className="flex flex-wrap gap-y-8">
        <p>Content</p>
      </div>
    </PageWrapper>
  );
}
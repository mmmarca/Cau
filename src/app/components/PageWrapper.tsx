'use client';

import { PropsWithChildren } from 'react';

export default function PageWrapper({ children }: PropsWithChildren) {
    return <div className="max-w-[85rem] mx-auto py-10 px-4">{children}</div>;
}
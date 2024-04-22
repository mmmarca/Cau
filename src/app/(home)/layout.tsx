import DefaultLayout from '../components/DefaultLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BookQuest',
  description: 'NextJs Bootcamp',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultLayout activePage="Currently reading">{children}</DefaultLayout>
  );
}
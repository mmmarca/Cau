import { PropsWithChildren } from 'react';
import { Navigation } from './navigation/Navigation';

export interface IDefaultLayoutProps {
    activePage: string;
}

export default async function DefaultLayout({ activePage, children }: IDefaultLayoutProps & PropsWithChildren) {
    return (
        <>
            <Navigation activePage={activePage} />
            {children}
        </>
    );
}
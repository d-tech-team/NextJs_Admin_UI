import * as React from 'react';
import styles from './index.module.scss'
import Link from 'next/link';
import { ChevronRight,ChevronDown } from "react-bootstrap-icons"

export interface IAppProps {
}

export default function App({ menu }) {

    const { label, href, icon, items } = menu
    return (
        <div className={styles.Item}>
            <Link href={href}><span>{icon}</span> <span>{label}</span> <ChevronRight/> </Link>
            <nav>
                {Array.isArray(items) && items.length > 0 && items.map((item,i) => (
                    <Link key={i} href={item.href}>{item.label}</Link>
                ))}
            </nav>
        </div>
    );
}

import styles from './index.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, ChevronDown } from "react-bootstrap-icons"

export interface IAppProps {
}

export default function App({ menu }) {
    const [isActive, setIsActive] = useState(false)

    const { label, href, icon, items } = menu
    return (
        <div className={styles.Item} onClick={() => {
            console.log(label);
        }}>
            <Link href={href} className={styles.Item__link}><span>{icon}</span> <span>{label}</span> <ChevronRight /> </Link>
            <nav>
                {Array.isArray(items) && items.length > 0 && items.map((item, i) => (
                    <Link key={i} href={item.href}>- {item.label}</Link>
                ))}
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    
}

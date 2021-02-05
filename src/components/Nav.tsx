import styles from '@/styles/nav.module.css';
import Link from "next/link";
import MENU from "@/const/MENU";
import Logo from "@/components/Logo";
import {useRouter} from "next/router";


export default function Nav(){

	const router = useRouter();

	return(
		<nav className={styles.nav}>
			<div className="w-1/3">
				<Logo/>
			</div>
			<ul className={styles.menu}>
				{
					MENU.TOP.map(item => (
						<Link href={item.path} key={item.path}>
							<a className={`${item.path === router.pathname ? styles.selected : styles.unselected}`}>
								{item.name}
							</a>
						</Link>
					))
				}
			</ul>
			<div className={styles.rightContainer}>
				<svg className={`${styles.searchIcon} pointer-scale`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<button className={`button ${styles.pinkButton}`}>
					<span className="">Join Us</span>
				</button>
				<svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
			</div>
		</nav>
	)
}

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import React from "react";

export default function Layout({ children}:{children:React.ReactNode}) {

	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
}

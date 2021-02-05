import SITE from "@/const/SITE";

export default function Hero(){
	return(
		<header className="bg-primary-500 mx-5 py-20 rounded-b-2xl -mt-2.5 flex flex-col items-center">
			<div className="absolute w-20 h-20 bg-white rounded-full opacity-20"/>
			<h1 className="text-center z-10 text-grey-50 text-3xl md:text-5xl tracking-wider md:leading-normal">{SITE.description}</h1>
			<button className="mt-5 bg-white py-3 px-5 rounded-lg text-primary-600 font-semibold text-xs flex items-center">
				Get Started Now
				<svg className="w-4 h-4 ml-1.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
			</button>
		</header>
	)
}

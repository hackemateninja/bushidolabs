import Image from "next/image";
import SITE from "@/const/SITE";
import Link from "next/link";

export default function Logo(){
	return(
		<Link href="/">
			<a>
				<Image
					src={SITE.logo}
					alt={SITE.title}
					width={130}
					height={30}
					className="pointer-scale"
				/>
			</a>
		</Link>
	)
}

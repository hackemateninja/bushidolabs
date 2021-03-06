import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import SITE from "@/const/SITE";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang={SITE.lang}>
				<Head />
				<body className="bg-white dark:bg-dark-800">
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument

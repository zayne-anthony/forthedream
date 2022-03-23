import Meta from "../components/layout/Meta";
import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
	return (
		<>
			<Html>
				<Head>
					<Meta title='For the Dream' desc='For the Dream NFT' />
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,400;0,500;0,700;1,300;1,500&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Bangers&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		</>
	);
}

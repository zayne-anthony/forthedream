import Image from "next/image";
import Social from "./Social";

import nft from "../public/scene-three.jpg";

const Member = ({ img, name, position, twitter, insta, discord, site }) => {
	return (
		<>
			<div className='flex-center relative flex-col'>
				<div className='member'>
					<Image src={img} alt={name} />
				</div>
				<h3>{name}</h3>
				<p>{position}</p>
				<div></div>
				<Social twitter={twitter} insta={insta} discord={discord} site={site} />
			</div>
		</>
	);
};

export default function Team() {
	return (
		<>
			<div className='lg:grid-cols-3 md:grid-cols-2 grid gap-12'></div>
		</>
	);
}

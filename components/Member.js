import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

export default function Member({ img, name, position, twitter }) {
	return (
		<>
			<div className='member'>
				{img && (
					<div className='member-img'>
						<Image src={img} alt={name} layout='responsive' />
					</div>
				)}
				<div className='member-info'>
					<h3 className='mb-4'>{name}</h3>
					<p className='outline-text-sm text-lg font-bold uppercase'>
						{position}
					</p>
				</div>
				{twitter && (
					<a
						className='social-icon text-[#1DA1F2]'
						href={twitter}
						target='_blank'
						rel='noreferrer'
					>
						<FaTwitter />
					</a>
				)}
			</div>
		</>
	);
}

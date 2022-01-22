import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";

export default function Nav({ links, position }) {
	return (
		<>
			{/* Mobile Nav */}
			<div className='top-4 left-4 fixed'>
				<div className='md:hidden block text-4xl'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-red-500 fixed'
					>
						<div className='flex flex-col'>
							{links && (
								<>
									{links.map((link) => (
										<a
											className='nav-link text-white'
											href={`#${link.toLowerCase()}`}
											key={link}
										>
											{link}
										</a>
									))}
								</>
							)}
						</div>
					</Modal>
				</div>
			</div>

			{/* Desktop Nav */}
			<div
				className={`${position} top-0 left-0 flex flex-row items-center justify-between w-full p-6`}
			>
				<div className='md:flex flex-row hidden gap-4'>
					{links && (
						<>
							{links.map((link) => (
								<a
									className='nav-link text-black'
									href={`#${link.toLowerCase()}`}
									key={link}
								>
									{link}
								</a>
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
}

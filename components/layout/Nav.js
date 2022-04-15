import { useState } from "react";

export default function Nav() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<header
				role='banner'
				className='lg:flex absolute z-50 items-center justify-center hidden w-full text-center'
			>
				<nav role='navigation' className='py-4 text-2xl'>
					<ul role='menu' className='flex-center lg:flex-row flex-col gap-6'>
						<li
							role='menuitem'
							className='outline-text-sm hover:text-primary text-gray-300'
						>
							<a href='#project'>Project</a>
						</li>
						<li
							role='menuitem'
							className='outline-text-sm hover:text-primary text-gray-300'
						>
							<a href='#team'>Team</a>
						</li>
						<li
							role='menuitem'
							className='outline-text-sm hover:text-primary text-gray-300'
						>
							<a href='#about'>About</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

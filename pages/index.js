import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import planet from "../public/imgs/planet.png";
import rocket from "../public/imgs/rocket.png";
import planetTwo from "../public/imgs/planet-2.png";
import blimp from "../public/imgs/blimp.png";
import rollercoaster from "../public/imgs/rollercoaster.png";

export default function Home() {
	return (
		<>
			<main role='main' id='main'>
				<section className='header'>
					<div className='text-center relative z-10'>
						<h1 className='text-primary outline-text'>
							For The
							<br />
							Dream
						</h1>
						<div className='flex-center flex-row gap-4'>
							<a href='' className='social-icon text-[#738ADB]'>
								<FaDiscord />
							</a>
							<a href='' className='social-icon text-[#1DA1F2]'>
								<FaTwitter />
							</a>
						</div>
					</div>
					<span className='header-img lg:left-14 top-14 -left-48'>
						<Image src={planet} alt='Planet' />
					</span>
					<span className='header-img lg:left-36 lg:block hidden lg:top-[28rem]'>
						<Image src={rocket} alt='Rocket' />
					</span>
				</section>
				<section className='bg-[url(/imgs/header-transition.jpg)] bg-cover bg-top h-[200vh] relative'>
					<span className='absolute bottom-1/4 max-w-[18rem] left-16'>
						<Image src={planetTwo} alt='Planet' />
					</span>
					<span className='absolute bottom-[20%] rotate-[12deg] max-w-[25rem] right-16'>
						<Image src={blimp} alt='WAGMI Blimp' />
					</span>
					<span className='absolute left-0 -bottom-20'>
						<Image src={rollercoaster} alt='Roller Coaster' />
					</span>
				</section>
				<section className='bg-primary h-screen flex-center'>
					<h2 className='text-white outline-text'>FAQ</h2>
				</section>
			</main>
		</>
	);
}

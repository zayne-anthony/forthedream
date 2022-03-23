import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import planet from "../public/imgs/planet.png";
import ufo from "../public/imgs/ufo.png";
import planetTwo from "../public/imgs/planet-2.png";
import planetThree from "../public/imgs/planet-3.png";
import blimp from "../public/imgs/blimp.png";
import rollercoaster from "../public/imgs/rollercoaster.png";
import stars from "../public/imgs/stars-2.png";

export default function Home() {
	return (
		<>
			<main role='main' id='main'>
				<section className='header'>
					<div className='relative z-10 text-center'>
						<h1 className='outline-text text-gray-100'>ForTheDream</h1>
						<div className='flex-center flex-row gap-4'>
							<a href='' className='social-icon text-[#738ADB]'>
								<FaDiscord />
							</a>
							<a href='' className='social-icon text-[#1DA1F2]'>
								<FaTwitter />
							</a>
						</div>
					</div>
					<span className='header-img max-w-[14rem] lg:left-36 top-14 -left-48'>
						<Image src={planet} alt='Planet' />
					</span>
					<span className='header-img max-w-[12rem] lg:left-64 lg:block hidden lg:top-[24]'>
						<Image src={ufo} alt='UFO' />
					</span>
				</section>
				<section className='bg-[url(/imgs/header-transition.jpg)] pt-[25%] pb-[50%] flex-center gap-48 flex-col bg-cover bg-top relative'>
					<span className='absolute top-1/2 max-w-[24rem]'>
						<Image src={stars} alt='Stars' />
					</span>
					<div className='relative text-center'>
						<h2>Our Inner Dreamer</h2>
						<p>
							For the Dream consists of like-minded individuals searching for an
							"escape" from the typical confinements of society. FortheDream
							represents several different things. It's a place, a group, a
							brand, a string of words that aim to inspire people to be
							themselves; to chase their wildest dreams.
						</p>
					</div>
					<div className='relative text-center'>
						<h2>FortheDream Hub</h2>
						<p>
							After 100% mint we are opening an IRL hub in New York City. Our
							hub will be a physical location where all can come and engage with
							the community. This is achieved by connecting with us & our team,
							other people in the NFT space. We plan to host workshops,
							challenges, events, and many more surprises along the way.
						</p>
					</div>
					<span className='absolute top-[5%] max-w-[24rem] right-16'>
						<Image src={planetThree} alt='Planet' />
					</span>
					<span className='absolute bottom-1/4 max-w-[18rem] left-16'>
						<Image src={planetTwo} alt='Planet' />
					</span>
					<span className='absolute bottom-[20%] rotate-[12deg] max-w-[25rem] right-16'>
						<Image src={blimp} alt='WAGMI Blimp' />
					</span>
					<span className='-bottom-20 roller-coaster absolute left-0'>
						<Image src={rollercoaster} alt='Roller Coaster' />
					</span>
				</section>
				<section className='bg-primary flex-center h-screen'>
					<h2 className='outline-text text-white'>FAQ</h2>
				</section>
			</main>
		</>
	);
}

import Image from "next/image";
import Nav from "../components/layout/Nav";
import FAQ from "../components/FAQ";
import Traits from "../components/Traits";
import Rollercoaster from "../components/Rollercoaster";
import Member from "../components/Member";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import planet from "../public/imgs/planet.png";
import ufo from "../public/imgs/ufo.png";
import planetTwo from "../public/imgs/planet-2.png";
import planetThree from "../public/imgs/planet-3.png";
import blimp from "../public/imgs/blimp.png";
import stars from "../public/imgs/stars-2.png";
// Team Members
import shiv from "../public/imgs/shiv.jpg";
import danny from "../public/imgs/danny.jpg";
import gio from "../public/imgs/gio.jpg";
import flix from "../public/imgs/flix.jpg";
import oscar from "../public/imgs/oscar.jpg";

export default function Home() {
	return (
		<>
			<Nav />
			<main role='main' id='main'>
				<section className='header'>
					<div className='relative z-10 text-center'>
						<h1 className='outline-text text-gray-300'>
							For
							<br className='lg:hidden block' />
							The
							<br className='lg:hidden block' />
							Dream
						</h1>
						<div className='flex-center flex-row gap-4'>
							<a
								href='https://discord.gg/hu3Rdxmk6P'
								className='social-icon text-[#738ADB]'
							>
								<FaDiscord />
							</a>
							<a
								href='https://twitter.com/forthedreamnft'
								className='social-icon text-[#1DA1F2]'
							>
								<FaTwitter />
							</a>
						</div>
					</div>
					<span className='header-img max-w-[18rem] md:block hidden lg:left-24 top-14 -left-20'>
						<Image src={planet} alt='Planet' />
					</span>
					<span className='header-img max-w-[20rem] lg:left-48 laptop:block hidden lg:top-[24]'>
						<Image src={blimp} alt='Blimp' />
					</span>
				</section>

				{/* Content */}
				<section className='bg-[url(/imgs/header-transition.jpg)] pt-[30%] pb-[65%] md:pb-[30%] flex-center gap-48 flex-col bg-cover bg-top relative'>
					<div id='project' className='lg:px-0 container px-6'>
						<span className='top-1/4 opacity-40 absolute max-w-full'>
							<Image src={stars} alt='Stars' />
						</span>
						<div className='lg:grid-cols-2 lg:gap-x-12 lg:gap-y-36 gap-y-24 gap-x-8 grid'>
							{/* <span className='absolute top-[5%] lg:block hidden max-w-[24rem] right-16'>
								<Image src={planetThree} alt='Planet' />
							</span> */}
							{/* <span className='absolute md:block hidden bottom-1/4 max-w-[18rem] left-16'>
								<Image src={planetTwo} alt='Planet' />
							</span> */}
							{/* <span className='absolute md:block hidden bottom-[20%] rotate-[12deg] max-w-[25rem] right-16'>
								<Image src={blimp} alt='WAGMI Blimp' />
							</span> */}
							{/* Content */}
							<div className='relative p-6 text-center border-4 border-white border-solid'>
								<h2>Our Inner Dreamer</h2>
								<p>
									For the Dream consists of like-minded individuals searching
									for an "escape" from the typical confinements of society.
									FortheDream represents several different things. It's a place,
									a group, a brand, a string of words that aim to inspire people
									to be themselves; to chase their wildest dreams.
								</p>
							</div>
							<div className='relative p-6 text-center border-4 border-white border-solid'>
								<h2>For The Dream Hub</h2>
								<p>
									After 100% mint we are opening an IRL hub in New York City.
									Our hub will be a physical location where all can come and
									engage with the community. This is achieved by connecting with
									us & our team, other people in the NFT space. We plan to host
									workshops, challenges, events, and many more surprises along
									the way.
								</p>
							</div>

							{/* Traits */}
							<div className='lg:text-left relative flex flex-col items-start justify-center text-center'>
								<div className='p-6 border-4 border-white border-solid'>
									<h2>A Visual Experience on the Blockchain</h2>
									<p>
										Our collection consists of billions of possible visual
										experiences directed by Oscar Llorens, who has worked with
										the likes of Red Bull, Coca-Cola, Mercedes-Benz and the
										United Nations. Each one curated with an imagination beyond
										your wildest dreams. Become immersed with a multiverse
										filled with traits such as the Stars of Odris, Gozai the
										Dragon and Vemzu the Planet and many more of their
										unorthodox kind!
									</p>
								</div>
							</div>

							<Traits />

							<div
								id='team'
								className='lg:grid-cols-3 col-span-full md:grid-cols-2 grid gap-8'
							>
								<Member
									img={shiv}
									name='Shiv'
									position='Co-Founder & Operations'
								/>

								<Member
									img={danny}
									name='Danny'
									position='Co-Founder & Creative Director'
								/>

								<Member
									img={gio}
									name='Gio'
									position='Co-Founder & Creative Director'
								/>

								<div className='lg:col-span-full lg:grid-cols-6 grid gap-8'>
									<div className='lg:col-start-2 lg:col-span-2'>
										<Member img={flix} name='fLix' position='Dev Manager' />
									</div>

									<div className='lg:col-span-2'>
										<Member
											img={oscar}
											name='Oscar Llorens'
											position='Art Director'
										/>
									</div>
								</div>
							</div>
						</div>

						<Rollercoaster />
					</div>
				</section>

				{/* FAQ */}
				<section id='about' className='bg-primary pt-36 pb-24'>
					<div className='flex-center container flex-col'>
						<h2 className='outline-text text-gray-300'>About Us</h2>
						<FAQ />
					</div>
				</section>
			</main>

			<footer className='bg-primary py-6' id='footer' role='contentifno'>
				<div className='container'>
					<p className='outline-text-sm font-bold text-center'>
						Copyright Ⓒ 2022 ForTheDream LLC
					</p>
				</div>
			</footer>
		</>
	);
}

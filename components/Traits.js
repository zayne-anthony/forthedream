import Image from "next/image";
import vemzu from "../public/imgs/vemzu.png";
import ghost from "../public/imgs/ghost-blaze.png";
import gozai from "../public/imgs/gozai.png";
import twin from "../public/imgs/twin-sisters-cascades.png";
import stardust from "../public/imgs/stardust.png";
import mosaic from "../public/imgs/mosaic-pillars.png";

export default function Traits() {
	return (
		<>
			<div className='md:grid-cols-2 grid gap-12'>
				<div className='trait'>
					<div className='lg:max-w-[9rem] max-w-full mx-auto'>
						<Image src={vemzu} alt='Vemzu' />
					</div>
					<p>Vemzu</p>
				</div>

				<div className='trait'>
					<div className='max-w-[7rem]'>
						<Image src={ghost} alt='Ghost Blaze' />
					</div>
					<p>Ghost Blaze</p>
				</div>

				<div className='trait'>
					<div className='max-w-[7rem] mx-auto'>
						<Image src={gozai} alt='Gozai' />
					</div>
					<p>Gozai</p>
				</div>

				<div className='trait'>
					<div className='max-w-[15rem]'>
						<Image src={twin} alt='Twin Sister Cascades' />
					</div>
					<p>Twin Sister Cascades</p>
				</div>

				<div className='trait'>
					<div className='max-w-[8rem]'>
						<Image src={stardust} alt='Stardust' />
					</div>
					<p>Stardust</p>
				</div>

				<div className='trait'>
					<div className='max-w-[15rem]'>
						<Image src={mosaic} alt='Mosaic Pillars' />
					</div>
					<p>Mosaic Pillars</p>
				</div>
			</div>
		</>
	);
}

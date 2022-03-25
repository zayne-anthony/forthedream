import Image from "next/image";
import rollercoaster from "../public/imgs/rollercoaster.png";
import rollercoasterMobile from "../public/imgs/rollercoaster-m.png";

export default function Rollercoaster() {
	return (
		<>
			<span className='-bottom-20 md:block roller-coaster absolute left-0 hidden'>
				<Image src={rollercoaster} alt='Roller Coaster' />
			</span>
			<span className='-bottom-16 md:hidden roller-coaster absolute left-0 block'>
				<Image src={rollercoasterMobile} alt='Roller Coaster' />
			</span>
		</>
	);
}

import { useEffect, useRef, useState } from "react";
import ToDo from "./components/Todo";
import { addToDo, getAllToDo, updateToDo, deleteToDo, log } from "shared";
import { motion, useAnimation, useInView } from "framer-motion";
import {
	AnimatedText,
	LinesAnimatedSVGLeft,
	LinesAnimatedSVGRight,
	LogoAnimatedSVG,
	LogoSVG,
	TextLineSVG,
} from "./assets/animations";
import {
	letterVariants,
	childVariants,
	slideVariants,
	floatVariants,
} from "./utils";

// HeroBanner assets
import BackgroundShade from "./assets/images/HeroBanner/Background-Shade.png";
import Ellipse4 from "./assets/images/HeroBanner/Ellipse4.png";
import Ellipse3 from "./assets/images/HeroBanner/Ellipse3.png";
import Ellipse5 from "./assets/images/HeroBanner/Ellipse5.png";
import Ellipse7 from "./assets/images/HeroBanner/Ellipse7.png";
import Ellipse6 from "./assets/images/HeroBanner/Ellipse6.png";
import Ellipse2 from "./assets/images/HeroBanner/Ellipse2.png";
import MainPart from "./assets/images/HeroBanner/Main-Part.png";
import LeftPart from "./assets/images/HeroBanner/Left-Part.png";
import RightPart from "./assets/images/HeroBanner/Right-Part.png";

// Features assets
import BackgroundShadeFeatures from "./assets/images/Features/Background-Shade.png";

function App() {
	const [logoLoaded, setLogoLoaded] = useState(false);
	// const controls = useAnimation();
	// const ref = useRef(null);
	// const isInView = useInView(ref, { once: false });

	// useEffect(() => {
	// 	if (isInView) {
	// 		controls.start("visible");
	// 	}
	// }, [controls, isInView]);

	useEffect(() => {
		setTimeout(() => {
			setLogoLoaded(true);
		}, 3000);
	}, [logoLoaded]);

	const Header = () => {
		return (
			<header className="flex justify-between w-full ">
				{/* Logo */}
				<div className="z-10 cursor-pointer">
					{logoLoaded ? <LogoSVG /> : <LogoAnimatedSVG />}
				</div>

				{/* Nav */}
				<nav className="flex flex-row items-center p-0 gap-[40px] z-10">
					<a
						href="#features"
						className="w-[62px] h-[16px] font-[Circular Std] font-normal font-medium text-[16px] leading-[16px] text-center text-[#5D6466] flex-none order-0 flex-grow-0"
					>
						Features
					</a>
					<a
						href="#tools"
						className="w-[62px] h-[16px] font-[Circular Std] font-normal font-medium text-[16px] leading-[16px] text-center text-[#5D6466] flex-none order-0 flex-grow-0"
					>
						Tools
					</a>
					<a
						href="#pricing"
						className="w-[62px] h-[16px] font-[Circular Std] font-normal font-medium text-[16px] leading-[16px] text-center text-[#5D6466] flex-none order-0 flex-grow-0"
					>
						Pricing
					</a>
					<a
						href="#comparison"
						className="w-[62px] h-[16px] font-[Circular Std] font-normal font-medium text-[16px] leading-[16px] text-center text-[#5D6466] flex-none order-0 flex-grow-0"
					>
						Comparison
					</a>
					<a
						href="#fAQs"
						className="w-[62px] h-[16px] font-[Circular Std] font-normal font-medium text-[16px] leading-[16px] text-center text-[#5D6466] flex-none order-0 flex-grow-0"
					>
						FAQs
					</a>
					<a
						href="#contact"
						className="w-[62px] h-[16px] font-[Circular Std] font-normal font-medium text-[16px] leading-[16px] text-center text-[#5D6466] flex-none order-0 flex-grow-0"
					>
						Contact
					</a>
				</nav>

				{/* Buttons */}
				<div className="flex">
					<button className="flex flex-row justify-center items-center p-[20px_35px] gap-[10px] w-[135px] h-[60px] right-[236px] top-[40px] rounded-full cursor-pointer z-10">
						Sign up
					</button>
					<button className="flex flex-row justify-center items-center p-[20px_35px] gap-[10px] w-[186px] h-[60px] right-[40px] top-[40px] bg-[#613EFF] rounded-full text-white font-bold cursor-pointer z-10">
						BOOK A DEMO
					</button>
				</div>
			</header>
		);
	};
	const HeroBanner = () => {
		return (
			<>
				<div className="">
					{/* Sub Heading */}
					<div className="absolute flex flex-row justify-center items-center p-[15px_20px] gap-[10px] w-[396px] h-[46px] left-[calc(50%-396px/2+0.5px)] top-[184px] bg-gradient-to-r from-[rgba(255,58,118,0.1)] to-[rgba(255,162,21,0.1)] rounded-full">
						<p className="w-[356px] h-[16px] font-[Circular Std] font-normal text-[16px] leading-[16px] text-center tracking-[-0.02em] text-[#182224] flex-none order-0">
							We help you consolidate all of your marketing tools.
						</p>
					</div>

					{/* Heading */}
					<div>
						<div className="absolute w-[1133px] h-[300px] left-[calc(50%-1133px/2+0.5px)] top-[250px] font-[Circular Std] font-bold text-[107px] leading-[100px] text-center align-middle">
							<p className="z-10 relative tracking-[-0.02em]">
								<motion.span
									className="bg-clip-text text-transparent"
									style={{
										backgroundImage:
											"linear-gradient(257.93deg, #FF3A76 -0.62%, #FFA215 100%)",
									}}
									variants={{
										initial: { y: 20, opacity: 0 },
										animate: { y: 0, opacity: 1, transition: { duration: 3 } },
									}}
									initial="initial"
									animate="animate"
								>
									SalesTratify
								</motion.span>{" "}
								<motion.span variants={childVariants}>
									<AnimatedText text="has" variants={letterVariants} />
								</motion.span>{" "}
								<motion.span variants={childVariants}>
									<AnimatedText
										text="everything you need to"
										className=""
										style={{}}
										variants={letterVariants}
									/>
								</motion.span>{" "}
								<motion.span variants={childVariants}>
									<AnimatedText
										text="succeed."
										className=""
										style={{}}
										variants={letterVariants}
									/>
								</motion.span>
							</p>
							<motion.figure
								className="absolute right-[80px] top-[170px] z-0"
								variants={slideVariants}
								initial="offScreen"
								animate="onScreen"
							>
								<TextLineSVG />
							</motion.figure>

							{/* description */}
							<p
								class="absolute w-[980px] h-[90px] left-[530px] top-[400px] translate-x-[-50%] font-normal text-center text-[20px] leading-[30px] text-[#5D6466] opacity-70"
								style={{ fontFamily: "'Circular Std', sans-serif" }}
							>
								At SalesTratify, we understand the challenges small business
								owners face in managing customer relationships. Our mission is
								to simplify your CRM needs with a comprehensive, all-in-one
								software solution designed to streamline your operations and
								enhance customer interactions.
							</p>
						</div>
						<button class="absolute flex flex-row justify-center items-center p-[20px_35px] gap-[10px] w-[225px] h-[60px] right-[847px] top-[760px] bg-[#613EFF] rounded-[30px]  font-bold text-[16px] leading-[20px] text-center uppercase text-white flex-none order-0">
							Let’s Get Started
						</button>
					</div>

					{/* Heading assets */}
					{/* Images ---*/}
					{/* Image 1 */}
					<motion.figure
						className="absolute w-[120px] h-[120px] left-[1680px] top-[196px] z-10"
						variants={floatVariants}
						animate="float"
					>
						<img src={Ellipse4} />
					</motion.figure>

					{/* Image 2 */}
					<motion.figure
						className="absolute w-[131px] h-[131px] left-[100px] top-[287px] z-10"
						variants={floatVariants}
						animate="float"
					>
						<img src={Ellipse3} />
					</motion.figure>

					{/* Image 3 */}
					<motion.figure
						className="absolute w-[80px] h-[80px] left-[321px] top-[550px] z-10 "
						variants={floatVariants}
						animate="float"
					>
						<img src={Ellipse7} />
					</motion.figure>

					{/* Image 4 */}
					<motion.figure
						className="absolute w-[80px] h-[80px] left-[1780px] top-[539px] z-10 "
						variants={floatVariants}
						animate="float"
					>
						<img src={Ellipse5} />
					</motion.figure>

					{/* Image 5 */}
					<motion.figure
						className="absolute w-[140px] h-[140px] left-[1460px] top-[840px] z-20 "
						variants={floatVariants}
						animate="float"
					>
						<img src={Ellipse6} />
					</motion.figure>

					{/* Image 6 */}
					<motion.figure
						className="absolute w-[102px] h-[102px] left-[339px] top-[1320px] z-20 "
						variants={floatVariants}
						animate="float"
					>
						<img src={Ellipse2} />
					</motion.figure>

					{/* Graphics --- */}
					{/* Graphic 1 */}
					<figure className="absolute right-[30px] top-0">
						<LinesAnimatedSVGRight />
					</figure>

					{/* Graphic 2 */}
					<figure className="absolute top-[23.89%] -left-[155px]">
						<LinesAnimatedSVGLeft />
					</figure>

					{/* Graphic 3 */}
					<img src={BackgroundShade} />

					{/* Graphic 4 */}
					<motion.div
						// ref={ref}
						// initial="hidden"
						// animate={controls}
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
						}}
					>
						<motion.figure
							className="absolute w-[1260px] h-[630px] left-[330px] top-[870px] z-10"
							variants={{
								hidden: { x: 0, opacity: 0 },
								visible: {
									x: [0, -100, 100, 0],
									opacity: 1,
									transition: { duration: 1 },
								},
							}}
						>
							<img src={MainPart} />
						</motion.figure>
						<motion.figure
							className="absolute w-[960px] h-[540px] left-[150px] top-[960px]"
							variants={{
								hidden: { x: 0, opacity: 0 },
								visible: {
									x: [0, -100, 100, 0],
									opacity: 1,
									transition: { duration: 1 },
								},
							}}
						>
							<img src={LeftPart} />
						</motion.figure>
						<motion.figure
							className="absolute w-[960px] h-[540px] right-[150px] top-[960px]"
							variants={{
								hidden: { x: 0, opacity: 0 },
								visible: {
									x: [0, -100, 100, 0],
									opacity: 1,
									transition: { duration: 1 },
								},
							}}
						>
							<img src={RightPart} />
						</motion.figure>
					</motion.div>
				</div>
			</>
		);
	};
	const Features = () => {
		return (
			<div className="">
				<div className="absolute w-[1620px] h-[145px] left-[150px] top-[1784px]">
					<p className="z-10 relative tracking-[-0.02em]">
						<motion.span
							className="absolute w-[1299px] h-[100px] left-[calc(50%-1299px/2+0.5px)] top-[1684px] font-[Circular Std] font-normal font-medium text-[150px] leading-[100px] text-center tracking-[-0.04em] text-white"
							variants={{
								initial: { y: 20, opacity: 0 },
								animate: { y: 0, opacity: 1, transition: { duration: 3 } },
							}}
							initial="initial"
							animate="animate"
						>
							Everything you need
						</motion.span>
					</p>
					<motion.figure
						className="absolute w-[1620px] left-[calc(50%-1620px/2)] top-[14.3%] bottom-[85.13%] bg-white bg-opacity-20"
						variants={slideVariants}
						initial="offScreen"
						animate="onScreen"
					>
						<TextLineSVG />
					</motion.figure>
				</div>

				{/* Feautes Assets */}
				<figure className="absolute h-[1920px] top-[1564px] left-0">
					<img src={BackgroundShadeFeatures} />
				</figure>
			</div>
		);
	};

	return (
		<div className="relative max-w-[1950px] mx-auto transform xl:scale-50 xl:-mt-[180px] 2xl:scale-75 2xl:-mt-[180px] 3xl:-mt-0 3xl:scale-100 bg-[#D9D9D9]">
			<div className="p-10">
				{/* Header */}
				<div className="relative">
					<Header />
				</div>

				{/* Hero Banner*/}
				<HeroBanner />

				{/* Features */}
        <Features />
			</div>
		</div>
	);
}

export default App;

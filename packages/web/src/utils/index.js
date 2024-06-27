const childVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: { y: 0, opacity: 1 },
};
const letterVariants = {
	hidden: { opacity: 0 },
	visible: (i) => ({
		opacity: 1,
		transition: {
			delay: i * 0.05, // Adjust the delay multiplier to control speed
		},
	}),
};

const slideVariants = {
	offScreen: { x: "-100vw" }, // Start off-screen to the left
	onScreen: {
		x: 0,
		transition: { type: "tween", duration: 0.5, ease: "easeOut" }, // Adjust the duration and ease to control the speed and style of the animation
	},
};

const floatVariants = {
	float: {
		y: ["0%", "-10%", "0%"], // Adjust the percentage to control the float range
		transition: {
			duration: 4,
			ease: "easeInOut",
			repeatType: "loop",
		},
	},
};
export { childVariants, letterVariants, slideVariants, floatVariants };

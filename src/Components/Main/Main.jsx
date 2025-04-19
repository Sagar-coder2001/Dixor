import { useSelector } from 'react-redux';
import start from '../../assets/6.png';
import { motion } from "framer-motion";

// Component to animate each character
const AnimatedText = ({ text, className = "" }) => {
    const characterAnimation = {
        hidden: { y: 50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.07,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className="inline-block overflow-hidden">
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={characterAnimation}
                    className={`inline-block ${className}`}
                >
                    {char}
                </motion.span>
            ))}
        </div>
    );
};

export default function Main() {
    const headingText = "CREATIVE";

    const bgcolor = useSelector((state) => state.theme.navbar);
    const textcolors = useSelector((state) => state.theme.textcolor)


    const lightGradient = 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(195, 232, 195, 1) 100%)';
    const darkGradient = 'radial-gradient(circle at center, #0E1027 0%, #000000 100%)';

    return (
        <div
            className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-br from-green-100 via-white to-pink-100 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: bgcolor === 'black' ? darkGradient : lightGradient
            }}
        >
            {/* Left section */}
            <div className="max-w-xl text-center md:text-left space-y-8 mt-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight"
                    style={{ color: textcolors }}>
                    {/* Animate CREATIVE */}
                    <AnimatedText text={headingText} />

                    <br />

                    {/* Animate STUDIO with gradient + symbol */}
                    <span className="inline-flex items-center text-black md-ml-25">
                        <span className="text-lime-400 text-8xl md:text-7xl mr-6">
                            <img src={start} alt="" className='w-15 h-15' />
                        </span>
                        <AnimatedText
                            text="STUDIO"
                            className="bg-gradient-to-r from-black via-lime-500 to-lime-300 bg-clip-text text-transparent"
                        />
                    </span>
                </h1>

                <p className="text-gray-600 text-md font-bold md:text-base" style={{ color: textcolors }}>
                    Excellence projecting is devonshire dispatched remarkably on estimating.
                    Side in so life past. Continue indulged speaking the was out horrible for domestic.
                </p>
            </div>

            {/* Right section */}
            <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ color: textcolors }}
                className="mt-10 md:mt-0 md:w-1/3 space-y-9 text-gray-800 text-lg font-bold">
                <div>
                    <p className="font-semibold">$20M+ Spend in marketing</p>
                </div>
                <hr />
                <div>
                    <p>1st ambassador partner for marketing in Australia</p>
                </div>
                <hr />
                <div>
                    <p>10+ passionate partner</p>
                </div>

                <div className="flex items-center space-x-3 mt-6">
                    <div className="flex -space-x-2 overflow-hidden">
                        <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="user1"
                        />
                        <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="user2"
                        />
                        <img
                            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="user3"
                        />
                        <div className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full text-black text-xl font-semibold">
                            +
                        </div>
                    </div>
                    <div className="text-sm ml-2">
                        <p className="font-semibold">We have 40k+ customers</p>
                        <p className="text-xs text-gray-500">world–wide</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

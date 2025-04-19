
import { useSelector } from 'react-redux';
import aboutimg from '../../assets/11.jpg'
import { motion } from "framer-motion";


export default function About() {
    const bgcolor = useSelector((state) => state.theme.value)
    const bgcolor1 = useSelector((state) => state.theme.navbar)

    const txtcolor = useSelector((state) => state.theme.textcolor)
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 font-sans gap-10" style={{backgroundColor : bgcolor , color : txtcolor}}>
            {/* Image Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full lg:w-1/2">
                <img
                    src={aboutimg} // replace with your image
                    alt="Agency Team"
                    className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
            </motion.div>

            {/* Text Content */}
            <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 viewport={{ once: true, amount: 0.3 }}
             className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                    Boost the growth<br />
                    development agency<br />
                    your branding!
                </h2>

                {/* About Us */}
                <div className="mb-4">
                    <span className="text-sm font-semibold border-b-2 border-gray-400 pb-1">
                        About Us
                    </span>
                </div>

                <p className="text-sm lg:text-base mb-8">
                    Regular as hearts by garret. Perceived determine departure explained no forfeited he something. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff.
                </p>

                {/* Animated Button */}
                <button
    className={`relative group inline-flex items-center px-6 py-2 border rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden 
      ${bgcolor1 === 'black' ? 'border-white text-white' : 'border-black text-black'}`}
  >
    <span
      className={`relative z-10 transition-all duration-300 
        ${bgcolor1 === 'black' ? 'group-hover:text-black' : 'group-hover:text-white'}`}
    >
      Get in Touch
    </span>
    <span
      className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0 rounded-full 
        ${bgcolor1 === 'black' ? 'bg-white' : 'bg-black'}`}
    ></span>
  </button>
            </motion.div>
        </div>
    );
}

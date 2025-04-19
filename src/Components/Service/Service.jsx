import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function ServicesSection() {
    const bgcolor = useSelector((state) => state.theme.value)
      const bgcolor1 = useSelector((state) => state.theme.navbar)
    const txtcolor = useSelector((state) => state.theme.textcolor)
    const services = [
      {
        title: "Marketing & SEO Optimization",
        desc: "Content marketing focuses on creating and distributing valuable, relevant content to attract and engage a target audience. SEO, on the other hand, focuses on optimizing a website and its content to improve its visibility in search engine results",
        icon: "⚙️",
      },
      {
        title: "Mobile App & Web Development",
        desc: "Mobile app development focuses on creating software applications for mobile devices (like smartphones and tablets), while web development involves building websites and web applications accessible through web browsers. ",
        icon: "👤",
      },
      {
        title: "Access to the Latest Technology",
        desc: " joining professional organizations and attending industry events to utilizing online resources like social media and TED talks",
        icon: "⚙️",
      },
    ];
  
    return (
      <div className="px-6 py-12 lg:px-20 font-sans" style={{backgroundColor : bgcolor , color : txtcolor}}>
        {/* Header + Button */}
        <div className="flex justify-between items-center mb-12 flex-col lg:flex-row gap-6 lg:gap-0">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Services We Offer
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mt-2">
              Turn Information<br />Into Actionable Insights
            </h2>
          </div>
  
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
        </div>
  
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
            // initial={{ opacity: 0, y:20 }}
            // whileInView={{ opacity: 1, y:0}}
            // transition={{ duration: 0.6 }}
            // viewport={{ once: true, amount: 0.5 }}

              key={index}
              className="relative group border border-gray-300 rounded-xl p-6 text-gray-800 bg-white 
                lg:transition-all lg:duration-300 lg:hover:scale-105 overflow-hidden"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
  
              {/* Show always on small, show on hover on large */}
              <p className="text-sm text-gray-600 transition-all duration-300 
                lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                {service.desc}
              </p>
  
              <div className="absolute top-4 right-4 text-2xl font-bold text-gray-200">
                {`0${index + 1}`}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  
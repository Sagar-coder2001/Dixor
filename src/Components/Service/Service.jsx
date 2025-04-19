import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import mail from '../../assets/Mail Letter.gif'
import Cloud from '../../assets/Cloud downloading.gif'
import shield from '../../assets/shield.gif'

export default function ServicesSection() {
    const bgcolor = useSelector((state) => state.theme.value)
      const bgcolor1 = useSelector((state) => state.theme.navbar)
    const txtcolor = useSelector((state) => state.theme.textcolor)
    const services = [
      {
        title: "Email Send / Receive Speed",
        desc: "Fastest Outlokk any Email Application Sync Speed",
        img: mail,
      },
      {
        title: "Backup And Restore",
        desc: "Automated 30 Days Scheduled Backup on AWS s3 Bucket",
        img: Cloud,
      },
      {
        title: "AWS Security Standards",
        desc: "AWS Foundational Security Best Practices CIS AWS Foundation Benchmark & PCI DSS",
        img: shield,
      },
    ];
  
    return (
      <div className="px-6 py-12 lg:px-20 font-sans" style={{backgroundColor : bgcolor , color : txtcolor}}>
        {/* Header + Button */}
        <div className="flex justify-between items-center mb-12 flex-col lg:flex-row gap-6 lg:gap-0">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-wides">
              Services We Offer
            </p>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
          {services.map((service, index) => (
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}

              key={index}
              className="relative group border border-gray-300 rounded-xl p-6 text-gray-800 bg-white 
                lg:transition-all lg:duration-300 lg:hover:scale-105 overflow-hidden"
            >
             <img src={service.img} alt="" className="w-18 mx-auto" />
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
  
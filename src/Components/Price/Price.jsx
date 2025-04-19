import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function Price() {
    const bgcolor = useSelector((state) => state.theme.value)
    const txtcolor = useSelector((state) => state.theme.textcolor)

    const plans = [
      {
          title: 'Tizzy® Mail Basic 10 GB',
          price: '₹792',
          renews: '₹792',
          icon: <FaEnvelopeOpenText className="text-red-500 text-4xl mb-3" />,
      },
      {
          title: 'Tizzy® Mail Corporate 1 TB',
          price: '₹8000',
          renews: '₹8000',
          icon: <FaUsers className="text-black text-4xl mb-3" />,
      },
  ];
  

    return (
      <section className="py-16 px-6 md:px-12" style={{backgroundColor : bgcolor , color : txtcolor}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
          Tizzy® Cloud Business Email Hosting Plans
          </h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        className="p-6 rounded-xl shadow-xl relative hover:scale-105 transition-transform bg-[white]"
                    >
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">{plan.title}</h3>
                        {plan.icon}
                        <p className="text-xl font-bold mb-1">{plan.price} <span className="text-sm font-medium text-gray-600">/Per user /Per Year</span></p>
                        <p className="text-sm text-gray-600 mb-1">Renews at {plan.renews}</p>
                        <p className="text-sm text-gray-600 mb-4">GST 18% Additional</p>
                        <button className="text-blue-600 font-medium hover:underline">Details</button>

                        {/* {index === 0 && (
              <div className="absolute right-[-39px] top-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg w-16 h-16 flex flex-col items-center justify-center font-semibold text-sm text-gray-600 z-10">
                <span className="-mb-1">Up</span>
                <span>To</span>
              </div>
            )} */}
                    </motion.div>
                ))}
            </div>
      </section>
    );
  }
  
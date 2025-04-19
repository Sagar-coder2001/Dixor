
import { useSelector } from 'react-redux';
import women from '../../assets/3.jpg'
import user from '../../assets/download.png'
import { motion } from "framer-motion";


export default function Revenue() {
    const bgcolor = useSelector((state) => state.theme.value)
    const txtcolor = useSelector((state) => state.theme.textcolor)

    return (
      <section className="py-16 px-4 md:px-16 relative" style={{backgroundColor : bgcolor , color : txtcolor}}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={women}
              alt="Growth"
              className="rounded-lg w-full object-cover shadow-lg"
            />
          </div>
  
          {/* Text + List Section */}
          <div>
            <span className="inline-block px-4 py-1 text-sm font-semibold bg-gray-100 rounded-full mb-3 text-gray-900">
              WHY IT’S AWESOME
            </span>
            <h2 className="text-3xl md:text-4xl font-bold  mb-6">
              Unlock <span className="text-blue-600">Revenue Growth</span>
            </h2>
  
            <ul className="space-y-4">
              <li>✔ Business Innovation</li>
              <li>✔ Search Engine Optimization</li>
              <li>✔ Thinking Differently</li>
            </ul>
          </div>
        </div>
  
        {/* Awards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto px-4 md:px-0 relative md:-mt-20 text-gray-950">
        <motion.div
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y:0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <img src={user} alt="Behance" className="w-10 h-10 mb-3" />
            <h4 className="text-lg font-semibold">Behance Awards</h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y:0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
           className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <img src={user} alt="Design" className="w-10 h-10 mb-3" />
            <h4 className="text-lg font-semibold">Design Awards</h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y:0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }} 
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <img src={user} alt="Coding" className="w-10 h-10 mb-3" />
            <h4 className="text-lg font-semibold">Coding Awards</h4>
          </motion.div>
        </div>
      </section>
    );
  }
  
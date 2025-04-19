import { motion } from "framer-motion";
import { useSelector } from "react-redux";


export default function Price() {
    const bgcolor = useSelector((state) => state.theme.value)
    const txtcolor = useSelector((state) => state.theme.textcolor)

    return (
      <section className="py-16 px-6 md:px-12" style={{backgroundColor : bgcolor , color : txtcolor}}>
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold bg-gray-100 rounded-full mb-2 text-gray-950">
            BEST PRICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            The best pricing plans <br /> to get your best rate
          </h2>
        </div>
  
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* First Card */}
          <motion.div
            initial={{ opacity: 0, x:-20 }}
            whileInView={{ opacity: 1, x:0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
           className="border-2 border-lime-400 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 bg-white">
            <h3 className="text-xl font-bold mb-2">Rank High on Google</h3>
            <p className="text-gray-500 mb-4">7 Days Free Trial</p>
            <p className="text-4xl font-bold text-black mb-6">$26</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✔ Number of back-links</li>
              <li>✔ Site speed</li>
              <li>✔ Keyword density</li>
              <li>✔ Enterprise management</li>
              <li>✔ Enterprise integrations</li>
            </ul>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 py-2 rounded-full transition duration-300">
              Order Now
            </button>
          </motion.div>
  
          {/* Second Card */}
          <motion.div
            initial={{ opacity: 0, x:20 }}
            whileInView={{ opacity: 1, x:0}}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Email-based Advertising</h3>
            <p className="text-gray-500 mb-4">7 Days Free Trial</p>
            <p className="text-4xl font-bold text-black mb-6">$52</p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✔ Email Templates</li>
              <li>✔ Marketing Campaigns</li>
              <li>✔ Traffic Estimation</li>
              <li>✔ Audience Segmentation</li>
              <li>✔ Automation Integration</li>
            </ul>
            <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
              Order Now
            </button>
          </motion.div>
        </div>
      </section>
    );
  }
  
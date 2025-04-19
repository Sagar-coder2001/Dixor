import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import user from '../../assets/download.png'
import { useSelector } from 'react-redux';

const testimonials = [
    {
        rating: 5,
        name: 'Micheal Dark',
        position: 'Founder @Interior',
        image: user,
        message: 'Targeting consultation discover apartments, indulgence of under folly death in worse cause realising way spite. Plan upon yet way get cold spot for week.'
    },
    {
        rating: 4.7,
        name: 'Alex Hales',
        position: 'Founder @Creative',
        image: user,
        message: 'Mentioning consultation discover apartments, indulgence of under folly death in worse cause realising way spite. Plan upon yet way get cold spot for week.'
    },
    {
        rating: 5,
        name: 'Sarah Woods',
        position: 'CEO @Visionary',
        image: user,
        message: 'Best service ever! The quality and dedication are unmatched. I highly recommend them to anyone looking for professionalism and creativity.'
    },
    {
        rating: 4.9,
        name: 'John Carter',
        position: 'Product Manager @Techie',
        image: user,
        message: 'They made my project shine. The attention to detail and support throughout the process was outstanding!'
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const bgcolor = useSelector((state) => state.theme.value)
    const txtcolor = useSelector((state) => state.theme.textcolor)

    const handlePrev = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="py-8 px-6 md:px-16" style={{backgroundColor : bgcolor , color : txtcolor}}>
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        TESTIM<span className="text-lime-500">ONIALS</span>
                    </h2>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <div className="text-lg font-semibold bg-gray-100 rounded-full px-4 py-2 shadow text-gray-950">
                            4.9
                        </div>
                        <div className="text-sm text-gray-500">★★★★★ <span className="ml-2">(748 Reviews)</span></div>
                    </div>
                </div>

                {/* Testimonial Card */}
                <div className="transition duration-500 ease-in-out">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-to-br from-lime-50 via-white to-lime-100 p-6 rounded-xl shadow-md border"
                        >
                            <div className="text-yellow-500 mb-3">
                                {'★'.repeat(Math.floor(testimonials[index].rating))}
                            </div>
                            <p className="text-gray-700 mb-6">{testimonials[index].message}</p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonials[index].image}
                                    className="w-10 h-10 rounded-full object-cover "
                                    alt={testimonials[index].name}
                                />
                                <div>
                                    <p className="font-bold text-gray-950">{testimonials[index].name}</p>
                                    <p className="text-xs text-gray-500">{testimonials[index].position}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                </div>

                {/* Buttons */}
                <div className="flex justify-end items-center mt-10">
                    <button onClick={handlePrev} className="p-2 rounded-full border hover:bg-gray-100 transition mr-2">&larr;</button>
                    <button onClick={handleNext} className="p-2 rounded-full border hover:bg-gray-100 transition">&rarr;</button>
                </div>
            </div>
        </section>
    );
}

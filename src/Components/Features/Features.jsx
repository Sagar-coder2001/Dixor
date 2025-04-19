import React from "react";
import market from '../../assets/7.jpg';
import motion from '../../assets/9.jpg';
import creative from '../../assets/20.jpg';
import { useSelector } from "react-redux";

const featuredWorks = [
  {
    title: "Market Branding",
    date: "February 18, 2024",
    image: market,
  },
  {
    title: "Motion Graphics",
    date: "January 10, 2024",
    image: motion,
  },
  {
    title: "Creative Design",
    date: "August 24, 2024",
    image: creative,
  },
];

export default function FeaturedWorks() {
    const bgcolor = useSelector((state) => state.theme.value)
    const txtcolor = useSelector((state) => state.theme.textcolor)
  return (
    <section className="relative py-10 px-4 sm:px-6 lg:px-20" style={{backgroundColor : bgcolor , color : txtcolor}}>
      <div className="text-center mb-16">
        <span className="text-xs tracking-wide font-semibold bg-black text-white px-3 py-1 rounded-full">
          YOUR FEATURED
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Featured Works</h2>
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block relative">
        <div className="relative h-[300vh]">
          {/* Card 1 - Sticks first, centered */}
          <div className="sticky -top-10 h-screen flex items-center justify-center z-10">
            <Card {...featuredWorks[0]} />
          </div>

          {/* Card 2 - Scrolls over Card 1 */}
          <div className="sticky -top-10 h-screen flex items-center justify-center z-20 w-full">
            <Card {...featuredWorks[1]} />
          </div>

          {/* Card 3 - Normal scroll after overlap */}
          <div className="relative h-screen flex items-center justify-center z-29">
            <Card {...featuredWorks[2]} />
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden space-y-10">
        {featuredWorks.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

function Card({ title, date, image }) {
  return (
    <div className="bg-white w-full max-w-4xl p-6 md:p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-500 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg mb-4"
      />
      <p className="text-xs text-gray-500">{date}</p>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">View Details →</p>
    </div>
  );
}

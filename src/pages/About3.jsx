import { ArrowRight } from 'lucide-react';
import React from 'react'

const About3 = () => {

  const team = [
  {
    name: "SAURABH KUMAR",
    role: "Founder & CEO",
    color: "bg-lime-400",
    letter: "A",
  },
  {
    name: "SAHIL KUMAR",
    role: "Head of Product",
    color: "bg-blue-500",
    letter: "P",
  },
  {
    name: "ADITYA KUMAR",
    role: "Lead Engineer",
    color: "bg-purple-500",
    letter: "R",
  },
  {
    name: "SAURABH KUMAR(S2)",
    role: "Design Director",
    color: "bg-pink-500",
    letter: "S",
  },
];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      {/* Heading */}

      <h2 className="text-center text-5xl font-bold mb-16">
        Meet the Team
      </h2>

      {/* Team */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition"
          >
            <div
              className={`w-16 h-16 ${member.color} rounded-2xl mx-auto flex items-center justify-center text-3xl font-bold text-white`}
            >
              {member.letter}
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              {member.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {member.role}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}

      <div className="mt-24 border border-lime-400/20 bg-[#111111] rounded-[40px] py-16 px-8 text-center">

        <h2 className="text-5xl font-bold">
          Ready to shop?
        </h2>

        <p className="text-gray-400 text-lg mt-5">
          Explore thousands of products at unbeatable prices.
        </p>

        <button className="mt-10 bg-lime-400 hover:bg-lime-300 transition px-10 py-4 rounded-2xl text-black font-bold text-xl inline-flex items-center gap-3">
          Browse Products
          <ArrowRight size={22} />
        </button>

      </div>

    </section>
  )
}

export default About3

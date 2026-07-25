import { HeartHandshake, ShieldCheck, Star, Truck } from 'lucide-react';
import React from 'react'

const About2 = () => {

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">

      {/* Our Story */}

      <div className="border border-zinc-700 rounded-[32px] bg-[#111111] p-10 lg:p-12">

        <h2 className="text-4xl font-bold mb-8">
          Our Story
        </h2>

        <div className="space-y-7 text-gray-400 text-lg leading-9">

          <p>
            SkyMart started in 2022 as a small side project —
            two engineers tired of slow, bloated online shopping
            experiences. We believed buying products online
            should feel simple, fast and enjoyable.
          </p>

          <p>
            Today SkyMart serves thousands of customers across
            India. From electronics and fashion to home
            essentials, every product is carefully selected to
            provide the best value.
          </p>

          <p>
            We're still the same team at heart — focused on
            speed, transparency and creating an experience that
            customers genuinely enjoy.
          </p>

        </div>

      </div>

      {/* Heading */}

      <h2 className="text-center text-5xl font-bold mt-24 mb-16">
        What We Stand For
      </h2>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-8">

        {values.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="border border-zinc-700 bg-[#111111] rounded-3xl p-8 hover:border-lime-400 transition duration-300"
            >

              <div className="flex gap-6">

                <div className="w-16 h-16 rounded-2xl bg-lime-400/10 flex items-center justify-center flex-shrink-0">

                  <Icon
                    size={30}
                    className="text-lime-400"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-8 mt-3">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </section>
  )
}

export default About2

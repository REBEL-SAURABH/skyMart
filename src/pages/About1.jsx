import { Bolt, Package, Star, Truck, Users } from 'lucide-react';
import React from 'react'

const About1 = () => {

const stats = [
  {
    icon: Package,
    value: "20K+",
    title: "Products",
  },
  {
    icon: Users,
    value: "50K+",
    title: "Happy Customers",
  },
  {
    icon: Star,
    value: "4.9",
    title: "Avg. Rating",
  },
  {
    icon: Truck,
    value: "99%",
    title: "On-time Delivery",
  },
];


  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Logo */}

      <div className="flex justify-center">

        <div className="w-20 h-20 rounded-3xl bg-lime-400 flex justify-center items-center">

          <Bolt
            size={38}
            className="text-black fill-black"
          />

        </div>

      </div>

      {/* Heading */}

      <h1 className="text-center text-5xl lg:text-7xl font-bold mt-10">

        About{" "}

        <span className="text-lime-400">
          SkyMart
        </span>

      </h1>

      <p className="text-center text-gray-400 max-w-3xl mx-auto text-xl leading-9 mt-8">

        SkyMart is a next-generation e-commerce platform
        built to make online shopping fast, secure,
        affordable and enjoyable for everyone.

      </p>

      {/* Stats */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

        {stats.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="bg-[#111111] border border-zinc-700 rounded-3xl p-8 text-center hover:border-lime-400 transition"
            >

              <div className="flex justify-center">

                <div className="w-14 h-14 rounded-2xl bg-lime-400/10 flex justify-center items-center">

                  <Icon
                    className="text-lime-400"
                    size={28}
                  />

                </div>

              </div>

              <h1 className="text-5xl font-bold mt-6">

                {item.value}

              </h1>

              <p className="text-gray-400 mt-3">

                {item.title}

              </p>

            </div>

          );

        })}

      </div>

    </section>
  )
}

export default About1

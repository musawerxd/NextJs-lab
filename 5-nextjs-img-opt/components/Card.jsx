import React from 'react';
import Image from 'next/image';
const teamMembers = [
    {
        name: "Alex Rivera",
        role: "Lead Systems Architect",
        image: "/me.jpg"
    },
    {
        name: "Sarah Chen",
        role: "Senior Full-Stack Developer",
        image: "/me.jpg"
    },
    {
        name: "Marcus Thorne",
        role: "UI/UX Engineer",
        image: "/me.jpg"
    }
];

function Card() {
    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-center text-white py-10 uppercase tracking-tight">
                    Our Team
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl border border-gray-200  transition-transform duration-300 hover:-translate-y-2"
                        >
                            <Image
                                src={member.image}
                                alt="my image"
                                width={138}
                                height={138}
                                // fill={true}
                                className='rounded-full'
                                priority={false}
                                placeholder='blur'
                                loading='lazy'
                                blurDataURL={member.image}
                            />
                            {/* <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
                            /> */}
                            <h2 className="text-xl font-semibold text-gray-800">
                                {member.name}
                            </h2>
                            <p className="text-blue-600 font-medium text-sm mt-1">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Card;
'use client';

import Image from 'next/image';

export default function About({ portraitImage }: { portraitImage: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
      <div className="w-full md:w-5/12">
        {portraitImage && (
          <div className="relative w-full aspect-[4/5]">
            <Image
              src={portraitImage}
              alt="Antonio Marquez"
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
      <div className="w-full md:w-7/12">
        <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug tracking-wide text-gray-900">
          Based in South Lake Tahoe, Antonio captures cinematic landscapes, portraits, and visual stories inspired by atmosphere, movement, and emotion.
        </p>
      </div>
    </div>
  );
}

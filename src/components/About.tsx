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
      <div className="w-full md:w-7/12 space-y-6">
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide text-gray-900">
          Born and raised in South Lake Tahoe, Antonio is a Mexican-American landscape and portrait film photographer based in Los Angeles.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide text-gray-800">
          His work explores the interconnectedness between nature and humanity.
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed tracking-wide text-gray-800">
          He is available for commercial and editorial commissions.
        </p>
      </div>
    </div>
  );
}

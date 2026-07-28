import { PortableText as PortableTextComponent } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/image'

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <figure className="my-10">
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-sm bg-gray-100">
            <Image
              src={urlFor(value).width(1200).url()}
              alt={value.alt || 'Blog Image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-3 text-center text-xs tracking-wider uppercase text-gray-500 font-light">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-light tracking-wide mt-10 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-light tracking-wide mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-light tracking-wide mt-6 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-6 text-gray-700 leading-relaxed font-light text-base md:text-lg">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-black pl-6 my-8 italic text-gray-800 text-lg font-serif">
        {children}
      </blockquote>
    ),
  },
}

export default function PortableText({ value }: { value: any }) {
  return <PortableTextComponent value={value} components={components} />
}

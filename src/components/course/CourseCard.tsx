"use client"

import Link from "next/link"
import Image from "next/image"

export interface CourseCardProps {
  id: string | number
  title: string
  description?: string
  href: string
  imageUrl: string
  ctaLabel?: string
}

export default function CourseCard({
  id,
  title,
  description,
  href,
  imageUrl,
  ctaLabel = "Learn",
}: CourseCardProps) {
  // Handle image URL
  const getImageUrl = (url: string) => {
    if (!url) return '/placeholder-course.jpg' // You should add a placeholder image in your public folder
    if (url.startsWith('http')) return url
    return `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}${url}`
  }

  return (
    <Link href={href}>
      <div className="relative border-[#232323] aspect-[16/9] mt-1 rounded-[5px] overflow-hidden shadow-md group transform transition-transform duration-300 ease-in-out cursor-pointer">
        <div className="relative w-full h-full">
          <Image
            src={getImageUrl(imageUrl)}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            quality={75}
            onError={(e) => {
              // Fallback to placeholder on error
              const target = e.target as HTMLImageElement
              target.src = '/placeholder-course.jpg'
            }}
          />
        </div>

        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10" />

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent z-20" />

        <div className="absolute inset-x-0 bottom-0 p-5 flex justify-between items-end z-30">
          <div className="w-[70%] transition-transform duration-500 ease-in-out group-hover:-translate-y-3">
            <h3 className="text-white text-lg font-bold">{title}</h3>

            <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 translate-y-1 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-gray-300 mt-1">{description}</p>
            </div>
          </div>

          <div className="whitespace-nowrap px-3 py-1 bg-white/10 text-white rounded hover:bg-white/20 transition-colors duration-300 ease-in-out text-xs">
            {ctaLabel}
          </div>
        </div>
      </div>
    </Link>
  )
}

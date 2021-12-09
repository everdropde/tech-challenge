import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import type { FC, HTMLAttributes } from 'react'

const PATH = '/socials'
const LOGOS = ['facebook.png', 'instagram.png', 'linkedin.png']
const LINKS = [
  'https://www.facebook.com/everdrop.de/',
  'https://www.instagram.com/everdrop/',
  'https://www.linkedin.com/company/everdrop/',
]

const Socials: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={cn(className, 'flex gap-4 w-full')}>
      {LOGOS.map((src, idx) => (
        <Link key={src} href={LINKS[idx]}>
          <a target="_blank">
            <Image
              alt={src}
              width={40}
              height={40}
              quality={85}
              layout="fixed"
              src={`${PATH}/${src}`}
            />
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Socials

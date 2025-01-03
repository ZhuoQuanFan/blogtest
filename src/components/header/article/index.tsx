import { clsx } from 'clsx'

import Link from 'next/link'

// import {useEffect} from "react";

import { FontToggle } from './font-toggle'
import { ThemeToggle } from './theme-toggle'

interface HeaderProps {
  sticky?: boolean
}

export const Header = (props: HeaderProps) => {
  const { sticky } = props
  return (
    <header
      className={clsx(
        'grid w-full grid-cols-[1fr_minmax(auto,110ch)_1fr] items-center gap-4 border-b bg-surface px-6 py-5 md:gap-8 lg:px-16',
        sticky && 'sticky top-0 z-10 bg-white/5 backdrop-blur dark:bg-black/5',
      )}
    >
      <script
        dangerouslySetInnerHTML={{
          __html: `
              MathJax = {
                tex: {
                  inlineMath: [['$', '$'], ['\\(', '\\)']],
                  displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
                },
                svg: {
                  fontCache: 'global'
                }
              };
            `,
        }}
      />
      <script
        async
        id='MathJax-Script'
        src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js'
      />
      <Link className='justify-self-start' href='/'>
        <h1 className='text-xl font-bold tracking-tighter md:text-2xl'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Jason's Blog
        </h1>
      </Link>
      <nav className='flex gap-8 max-sm:text-sm'>
        <Link className='font-semibold' href='/'>
          Home
        </Link>
        <Link className='font-semibold' href='/posts/all'>
          Posts
        </Link>
      </nav>
      <div className='flex items-center justify-end gap-2'>
        <FontToggle />
        <ThemeToggle />
      </div>
    </header>
  )
}

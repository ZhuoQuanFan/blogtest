import { IconTerminal } from '@tabler/icons-react'
import { tw } from 'tw-styled/merge'

import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Block } from '@/components/blocks/block'

const ResumeText = dynamic(
  () => import('./text').then(module => module.ResumeText),
  {
    loading: () => <span>Resume</span>,
  },
)

export const Dot = tw.i`block size-3 rounded-full`

export const Resume = () => (
  <Block
    className='overflow-clip bg-[#282935] !p-0 outline-offset-4 transition-transform hover:scale-105 dark:bg-surface-1'
    data-type='about'
    tabIndex={0}
  >
    <span className='absolute inset-x-0 top-0 flex gap-2 border-b-black bg-slate-700 px-6 py-3 dark:bg-surface-2'>
      <Dot className='bg-red-500' />
      <Dot className='bg-yellow-400' />
      <Dot className='bg-green-500' />
    </span>
    <Link
      aria-label='Go to resume page'
      className='flex size-full items-center justify-center text-lg text-gray-200 md:text-2xl'
      href='/resume'
    >
      <IconTerminal className='mr-2 size-4 text-green-400 md:size-6' />
      <ResumeText />
    </Link>
  </Block>
)

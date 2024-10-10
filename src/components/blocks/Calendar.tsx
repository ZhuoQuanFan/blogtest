import { Calendar } from 'antd'

import React from 'react'

import { Block } from '@/components/blocks/block'
import {clsx} from "clsx";


export const CalendarBlock = () => {

  return (
    <Block
      className='flex items-stretch justify-stretch overflow-clip  bg-surface outline-offset-4 max-md:col-span-2'
      data-type='posts'
    >
      <Calendar fullscreen={false} />
    </Block>
  )
}

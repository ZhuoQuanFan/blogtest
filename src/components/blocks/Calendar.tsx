import { Calendar } from 'antd'

// import React from 'react'

import { Block } from '@/components/blocks/block'

export const CalendarBlock = () => {
  return (
    <Block
      className='flex items-stretch justify-stretch overflow-clip  bg-surface outline-offset-4 max-md:col-span-2 max-md:row-span-2'
      data-type='calendar'
    >
      <div>
        <Calendar fullscreen={false} />
      </div>
    </Block>
  )
}

export const BiggerCalendar = () => {
  return (
    <Block
      className='col-span-2 flex flex-col overflow-clip  from-amber-50 to-surface dark:from-surface-1 max-lg:row-span-2 sm:col-span-3 md:col-span-2 lg:col-span-4'
      data-type='calendar-small'
    >
      <Calendar />
    </Block>
  )
}

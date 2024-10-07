import { Calendar, ConfigProvider } from 'antd'

import { Block } from '@/components/blocks/block'

export const CalendarBlock = () => {
  return (
    <Block
      className='flex items-stretch justify-stretch overflow-clip  bg-surface outline-offset-4 max-md:col-span-2'
      data-type='posts'
    >
      <ConfigProvider
        theme={{
          components: {
            Calendar: {
              /* 这里是你的组件 token */
              fullPanelBg: '#000000',
            },
          },
        }}
      ></ConfigProvider>
      <Calendar fullscreen={false} />
    </Block>
  )
}

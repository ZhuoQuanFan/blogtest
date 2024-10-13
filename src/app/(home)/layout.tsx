// import { Cal } from '@/components/blocks/Calendar'
import { ConfigProvider } from 'antd'

import { CalendarBlock } from '@/components/blocks/Calendar'
// import {BiggerCalendar} from "@/components/blocks/BiggerCalendar";
import { Avatar } from '@/components/blocks/avatar'
import { Bio } from '@/components/blocks/bio'
import { Csdn } from '@/components/blocks/csdn'
// import { Font } from '@/components/blocks/font'
import { Github } from '@/components/blocks/github'
// import { Juejin } from '@/components/blocks/juejin'
import { Pinned } from '@/components/blocks/pinned'
import { Posts } from '@/components/blocks/posts'
import { Resume } from '@/components/blocks/resume'
import { Skills } from '@/components/blocks/skills'
// import { Block } from '@/components/blocks/block'
import { Tags } from '@/components/blocks/tags'
import { ThemeToggle } from '@/components/blocks/theme-toggle'
import { Grid } from '@/components/grid'
import { Header } from '@/components/header'

// // import {today, getLocalTimeZone} from "@internationalized/date";
// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn'
// dayjs.locale('zh-cn')

export default function Layout() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Calendar: {
            /* 这里是你的组件 token */
            fullBg: 'rgba(0, 0, 0, 0.)',
            fullPanelBg: 'rgba(0, 0, 0, 0)',
            itemActiveBg: 'rgba(0, 0, 0, 0)',
            monthControlWidth: 17,
            yearControlWidth: 20,
          },
        },
        token: {
          /* 这里是你的 token */
          colorBgContainer: 'rgba(0, 0, 0, 0)',
          colorBorder: '#000000',
          colorFill: '#000000',
          colorFillSecondary: '#000000',
          colorPrimary: 'rgba(0, 0, 0, 0)',
          colorSplit: 'rgba(0, 0, 0, 0)',
          paddingSM: 6,
          paddingXS: 4,
          screenXS: 30,
        },
      }}
    >
      <>
        <Header />
        <Grid>
          <Bio />
          <Avatar />
          <Skills />
          <Pinned />
          {/*<Font />*/}
          {/*<Cal />*/}
          <CalendarBlock />
          <Resume />
          <ThemeToggle />
          <Tags />
          <Posts />
          <Github />
          <Csdn />
          {/*<BiggerCalendar />*/}
          {/*<Juejin />*/}
        </Grid>
        {/*<BiggerCalendar />*/}
      </>
    </ConfigProvider>
  )
}

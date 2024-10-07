import { Avatar } from '@/components/blocks/avatar'
import { Bio } from '@/components/blocks/bio'
// import { Font } from '@/components/blocks/font'
import { Github } from '@/components/blocks/github'
// import { Juejin } from '@/components/blocks/juejin'
import { Pinned } from '@/components/blocks/pinned'
import { Posts } from '@/components/blocks/posts'
import { Resume } from '@/components/blocks/resume'
import { Skills } from '@/components/blocks/skills'
import { Block } from '@/components/blocks/block'
import { Tags } from '@/components/blocks/tags'
import { ThemeToggle } from '@/components/blocks/theme-toggle'
import { Grid } from '@/components/grid'
import { Header } from '@/components/header'
import { Csdn } from '@/components/blocks/csdn'
// import { Cal } from '@/components/blocks/Calendar'
import { CalendarBlock} from '@/components/blocks/Calendar';

// // import {today, getLocalTimeZone} from "@internationalized/date";
// import dayjs from 'dayjs'
// import 'dayjs/locale/zh-cn'
// dayjs.locale('zh-cn')

export default function Layout() {
  return (
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
        {/*<Juejin />*/}

      </Grid>

    </>

  )
}

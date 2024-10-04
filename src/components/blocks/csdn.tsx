import { Block } from '@/components/blocks/block'
import { ExternalLink } from '@/components/external-link'

export const Csdn = () => (
    <Block
        className='group flex items-center justify-center bg-gradient-to-b from-blue-200 to-white text-black dark:from-blue-300/80 dark:to-white/70'
        data-type='about'
    >
      {/*<svg*/}
      {/*    className='size-24 dark:grayscale-[20%] xl:size-32'*/}
      {/*    height='1em'*/}
      {/*    viewBox='0 0 38 38'*/}
      {/*    width='1em'*/}
      {/*    xmlns='http://www.w3.org/2000/svg'*/}
      {/*>*/}
      {/*  <path*/}
      {/*      d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z"*/}
      {/*      fill="#CE000D"*/}
      {/*      fillRule='evenodd'>*/}
      {/*  </path>*/}
      {/*</svg>*/}
      <svg className="icon" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="4282"
           width="1em" height="1em">
        <path
            d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z"
            fill="#CE000D" p-id="4283">

        </path>
      </svg>
      <ExternalLink href='https://blog.csdn.net/qq_41701654' title='CSDN'/>
    </Block>
)

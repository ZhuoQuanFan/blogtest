import { Header } from '@/components/header/article'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-unwanted-polyfillio */}
      <script async src='https://polyfill.io/v3/polyfill.min.js?features=es6' />
      <script
        async
        id='MathJax-script'
        src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
      />
      <script>
        {`
              MathJax = {
                tex: {
                  inlineMath: [['$', '$'], ['\\(', '\\)']]
                },
                svg: {
                  fontCache: 'global'
                }
              };
            `}
      </script>

      {/*<script*/}
      {/*  async*/}
      {/*  src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js'*/}
      {/*/>*/}
      <Header />

      {children}
    </>
  )
}

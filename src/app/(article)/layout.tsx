import { Header } from '@/components/header/article'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script>
        {`
              MathJax = {
                tex: {
                  inlineMath: [['$', '$'], ['\\(', '\\)']],
                  displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']]
                },
                svg: {
                  fontCache: 'global'
                }
              };
            `}
      </script>
      <script
        async
        src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js'
      />

      {/*<script*/}
      {/*  async*/}
      {/*  src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js'*/}
      {/*/>*/}
      <Header />

      {children}
    </>
  )
}

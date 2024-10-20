import { Header } from '@/components/header/article'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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

import { Header } from '@/components/header/article'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        async
        src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-AMS_HTML'
      />
      <Header />

      {children}
    </>
  )
}

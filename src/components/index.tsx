
import Footer from './layouts/footer/Footer'
import Header from './layouts/header'
type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <section>
        {children} {/* Render the children here */}
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Layout

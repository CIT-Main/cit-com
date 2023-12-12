
import Footer from "./layouts/footer"
import Nav from "./layouts/header/Nav"

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />

      <section>
        <h1>Header</h1>
        {children} {/* Render the children here */}
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Layout;
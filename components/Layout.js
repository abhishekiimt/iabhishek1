import Navabr from '../components/Navbar'
import Footer from './Footer'

const Layout = ({children }) => {
    return (
        <div>
        <Navabr />
        {children}
        <Footer />
        </div>
    )
}

export default Layout
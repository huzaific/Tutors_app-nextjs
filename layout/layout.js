import Footer from "./footer"
import Header from "./header"
import { ToastContainer } from 'react-toastify'

const Layout = (props) => {
    return ( 
        <>
        <div className="wrapper">
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
       
            
        <Header />
        {
            props.children
        }
        <Footer />
        </div>
        </>
     );
}
 
export default Layout;

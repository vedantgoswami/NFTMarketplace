import '../styles/globals.css'

import {NavBar, Footer}  from '../components/componentindex'
// import {Footer} from '../components/componentindex'
const MyApp=({ Component, pageProps })=> (
   <div>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
   </div>
)

export default MyApp

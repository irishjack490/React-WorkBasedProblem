import Header from './Header'
import Main from './Main'
import Footer from './Footer'



export default function Nav ({theme}){
    return (
        <div>
            <Footer theme={theme}/>
            <Header />
            <Main theme={theme}/>
        </div>
    )

}
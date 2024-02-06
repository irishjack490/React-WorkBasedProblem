import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



export default function Nav (){
    return (
        <div>
            <Footer theme={theme}/>
            <Header />
            <Main theme={theme}/>
        </div>
    )

}
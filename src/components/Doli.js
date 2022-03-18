import "../index.css";
import "./components.css";
import {Header} from './Header';
import {Main} from './Main';
import { Title } from "./Title";
import { Tattoos } from "./Tattoos";


export function Doli(){
    return(
        <div>
            <Header />
            <Main title={<Title/>} content={<Tattoos/>}/>
      {/* <Footer /> */}
        </div>
    )
}
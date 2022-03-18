import "../index.css";
import "./components.css";
import {Header} from './Header';
import {Main} from './Main';
import { Title } from "./Title";


export function Doli(){
    return(
        <div>
            <Header />
            <Main title={<Title/>} content="ooooo"/>
      {/* <Footer /> */}
        </div>
    )
}
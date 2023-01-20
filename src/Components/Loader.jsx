import { Image } from "@chakra-ui/react";
import { Load } from "./Style";
import logo from "../assets/Digital.png";

const Loader = () => {
    return (
        <div>
        <Load>
           <Image src={logo}/>
        </Load>
        </div>
    );
};

export default Loader;
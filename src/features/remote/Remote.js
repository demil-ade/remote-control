import {useSelector} from "react-redux";
import Numactions from "./Numactions";
import Poweraction from "./Poweraction";
import Volactions from "./Volactions";

const Remote = () => {
    const count = useSelector((state) => state.channel.count);
    const power = useSelector((state) => state.turn.power);
    const vol = useSelector((state) => state.volume.vol);
    

   return(
        <div className="all">
            <div className="lists">
                <p>Power: {power}</p>
                <p>Volume: {vol}</p>
                <p>Channel: {count}</p>
            </div>
            
            <Poweraction/>

            <Volactions/>
            
            <Numactions/>
            
        </div>
    );
}

export default Remote
import Image from "next/image";
import img from "@/assets/js.jpg";


const Albumpage = () => {
    return (
        <div>
            <h1>Image components</h1>
            <Image src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg" width={500} height={500} 
             alt="next logo"/>
            <h1>Image components 2</h1>
            <Image src={img} width={500} height={500} 
             alt="next logo"/>

            <h1>Image tag</h1>
            <img src="https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-Fargo-North-Dakota.jpg" 
            width="500px"
             height= "500px"
             alt="next logo"/>
        </div>
    );
};

export default Albumpage;
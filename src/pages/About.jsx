import { useState, useEffect } from "react";

const AboutPage = () => {

    const [name, setName] = useState("Victor");

    useEffect(()=>{
        console.log("useEffect ran");
    }, []);

    return (
        <div>
            <div className="container my-3">
                <p>Hello { name } </p>
                <button onClick={()=>setName("Simiyu")}>Change Name</button>
            </div>
        </div>
    );
}

export default AboutPage;
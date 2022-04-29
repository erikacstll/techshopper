import React from 'react';
import { Link } from "react-router-dom";
const navbar = () => {
    return ( 
        <div >
            <li>
            <Link to = "/gaming pcs"> Gaming PCs </Link> </li> 
            <li>
            <Link to = "/keyboards" > Keyboards </Link> </li> 
            <li>
            <Link to = "/monitors" > Monitors </Link> 
            </li> 

    </div>
    );
}
export default navbar;

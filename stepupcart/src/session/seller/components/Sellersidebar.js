import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({children}) {

    const sidebaritems = [
        {
            path : "/sellerdashboard",
            name : "Dashboard"
        },
        {
            path : "/products",
            name : "Product's",
        },
        {
            name : "Order's",
        }
]
  return (
    <div className='container'>
        <div className='sidebar'>
            
           {
            sidebaritems.map((item , index) => (
                <Link to = {item.path} 
                key={index}
                className="link"
                activeClassName = "active"
                >
                    <div className='link-text'> {item.name} </div>
                </Link>
            ))
           }
          
        </div>
           {/* <main>{children}</main> */}
    </div>
  )
}

export default Sidebar;
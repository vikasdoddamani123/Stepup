import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({children}) {

    const sidebaritems = [
        {
            path : "/admindashboard/",
            name : "Dashboard"
        },
        {
            name : "Employee's"
        },
        {
            path : "/seller/Display",
            name : "Seller"
        },
        {
            name : "Product's"
        },
        {
            
            name : "Quatation Request"
        },
        {
            name : "Order's"
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
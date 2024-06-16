"use client"

import styles from "./Links.module.css"
import NavLink from "./navLink/navLink"
import { useState } from "react"

const links=
    [
        {
            title:"GTA VICE CITY",
            path:"/gtavc"
        },
        {
            title:"GTA 3",
            path:"/gta3",
        },
        {
            title:"GTA SAN ANDREAS",
            path:"/",
        },
        {
            title:"GTA IV",
            path:"/gta4",
        },
        {
            title:"GTA V",
            path:"/gta5",
        },
    ]

const Links = () => {
    const [open, setOpen] = useState(false)

    return(
        <div className={styles.container}>
            <div className={styles.Links}>
                {links.map((link=>(
                    <NavLink item={link} key={link.title} />
                )))}
                {/* Jika sudah login maka munculkan tombol logout ;
                Jika Admin maka munculkan tombol Admin dan Logout
                */}
            </div>
            <button className={styles.MobileMenu} onClick={()=>setOpen((prev)=>!prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link)=>(
                        <NavLink item={link} key={link.title}/>
                    ))}
                </div>
            }
        </div>
        
    )
}
export default Links
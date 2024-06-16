import Links from "./links/Links"

const Navbar = () =>{
    return (
        <div className="min-w-full bg-[#001d52] flex items-center w-full justify-between h-[100px] pr-[52px] pl-[52px]">
            <div className=" text-white text-2xl font-extrabold">
                GTA CHEATS DATABASE
            </div>
            <div className="text-white text-md mr-[52px]">
                <Links/>
            </div>
            <div className=" ml-11 mr-5    ">
               
            </div>
        </div>
    )
}
export default Navbar
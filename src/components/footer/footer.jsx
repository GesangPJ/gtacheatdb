import Link from "next/link"
import { GoGitPullRequest } from "react-icons/go"

const Footer = () =>{
    const date = new Date()
    const tahun = date.getFullYear()


    return (
        <div className="min-w-full bg-[#001d52] flex items-center w-full justify-between min-h-[80px] pl-[52px] pr-[52px]">
            <div className="text-white font-bold text-md">
                &copy;{tahun} GESANG TECHNOLOGY
            </div>
            <div>
               <Link className="text-white" href='https://github.com/GesangPJ/gtacheatdb'><GoGitPullRequest /></Link>
            </div>
        </div>

    )
}
export default Footer
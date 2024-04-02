import Link from "next/link"
import './topo.css'

export default function Topo(){
    return(
        <header className="Topo  ">
            <div className="flex justify-between">
                <div className="flex justify-between w-[100%]  ">
                   <h1 className="ml-[20px] text-[40px] ">Elisson <span  className="text-red-500 font-bold">D. Sousa</span></h1>

                   <nav className="w-[600px] flex  justify-around items-center 	">
                     <ul className=" font-bold flex justify-around flex-wrap w-[100%] text-[23px]  ">
                        <li><Link className="hover:text-red-500" href="">Home</Link></li>
                        <li><Link className="hover:text-red-500" href="">Tecnologias</Link></li>
                        <li><Link className="hover:text-red-500" href="">Projetos</Link></li>
                        <li><Link className="hover:text-red-500" href="">Contato</Link></li>
                       
                     </ul>
                   </nav>
                </div>
            </div>

            <div className="flex w-[100%]  h-[400px] items-center justify-center">
                <div className="flex justify-center w-[100%]">
                <h2 className=" flex justify-center ml-[50px w-[1000px] text-[80px] font-bold">Desenvolvedor  <span className="text-red-500 ml-[20px]">   Front End</span> </h2>
                </div>
                
            </div>

        </header>
    )
}
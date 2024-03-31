import Link from "next/link"

export default function Topo(){
    return(
        <header className="bg-[#2B2B2B] h-[500px] flex flex-col text-white   ">
            <div className="flex justify-between">
                <div className="flex justify-between w-[100%]  ">
                   <h1 className="ml-[20px] text-[40px] ">Elisson <span  className="text-red-500 font-bold">D. Sousa</span></h1>

                   <nav className="w-[600px] flex  justify-around items-center 	">
                     <ul className=" font-bold flex justify-around w-[100%] text-[23px]  ">
                        <li><Link className="hover:text-red-500" href="">Home</Link></li>
                        <li><Link className="hover:text-red-500" href="">Tecnologias</Link></li>
                        <li><Link className="hover:text-red-500" href="">Projetos</Link></li>
                        <li><Link className="hover:text-red-500" href="">Sobre mim</Link></li>
                       
                     </ul>
                   </nav>
                </div>
            </div>

            <div className="flex  h-[100%] items-center justify-between ">
                <div className="flex justify-center w-[700px]">
                <h2 className=" ml-[50px w-[300px] text-[60px] font-bold">Desenvolvedor <span className="text-red-500">Front end</span> </h2>
                </div>
                

                <div className="flex w-[500px]  items-center h-[100%]  ">
                    <img className="   w-[300px]" src="./tecnologias.jpg" alt="" />
                </div>
            </div>

        </header>
    )
}
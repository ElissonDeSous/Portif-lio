import Perfil from './img/eu.jpg'

export default function Sobre(){
     return(
        <div className="  h-[500px] flex justify-between flex-wrap">
            <div className=" h-[500px] w-[700px] flex flex-col  items-center">
                <h3 className="flex justify-center font-bold text-[30px] h-[100px] items-center  ">Sobre mim</h3>
                <p className="w-[600px]">Meu nome é Elisson Sousa dos Santos , tenho 23 anos sou apaixonado por Tecnologia, tenho conhecimentos em <span className="text-red-500 font-bold">HTML</span> e <span className="text-red-500 font-bold">CSS</span>, <span className="text-red-500 font-bold">Java Script</span>, <span className="text-red-500 font-bold">ReactJS</span>, <span className="text-red-500 font-bold">NextJS</span> faço curso de engenharia de software na Unicesumar, sou formado em alguns cursos na udemy na parte do front end e estou estudando back end com nodeJS.</p>
            </div>

            <div className="flex justify-center items-center h-[500px]  w-[600px]">
                   <img src= "./eu.jpg" className='rounded-full	border-solid border-2 border-red-600' width="300px" alt="IMAGEM" />
            </div>
        </div>
     )
}
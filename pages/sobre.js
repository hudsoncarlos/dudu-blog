import Link from 'next/link';

function Title(props){
    return (
        <h1 style={{color: props.color}}>{props.children}</h1>
    )
}

 export default function Sobre(){
     return(
         <div>
             <header>
                 <Title color="red">Página Sobre</Title>
                 <img src="..."/>
             </header>

             <Link href="/">
                <a>Home</a>
             </Link>
         </div>
     )
 }
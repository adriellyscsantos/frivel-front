import React from "react";
import "./styles.css";

const Header = () => {

    const handleClick = () =>{
        alert('CLICADO')
    }
  return (
    <header>

        <div className='header'>
       
       GERENCIANDO SUAS FINANÇAS
       <button onClick={handleClick}> Clique aqui</button>
     
        </div>    
    </header>
  );
};

export default Header;

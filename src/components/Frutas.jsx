// import React from "react"; Cuando se usa React.Fragment add this import, if you are using only the brackets, then that's not needed.

const Frutas = () => {
    const frutas = ["🍏","🍓","🍌","🍒"];

    return (
        <> 
            <ul>
                {frutas.map((fruta, index)=>(
                  <li key={fruta}>
                      {index + 1 } - {fruta}
                  </li>  
                ))}
            </ul>
            <p>Lorem, ipsum.</p>
        </>
    )
}

export default Frutas

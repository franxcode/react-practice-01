import { useState } from "react"

const FormControlled = () => {


    const [todo, setTodo] = useState({
        todoName:"",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const {todoName, todoDescripcion} = todo

        if (!todoName.trim() || !todoDescripcion.trim()) {
            setError(true)
            return;
        }
        setError(false)

        setTodo({
            todoName:"",
            todoDescripcion: "",
            todoEstado: "pendiente",
            todoCheck: false,
        })
    }

    const handleChange = e => {
        // console.log(e.target.value);
        // console.log(e.target.name);
        const {name, value, checked, type} = e.target;
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        })
        // setTodo({
            // ...todo,
            // [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
            // e = setTodo({...todo, todoName: e.target.value})
        // })
        // Otra opcion.
        // setTodo((prev)=>({
        //     ...prev,
        //     [e.target.name]: e.target.value
        // }))
    }

    const PintarError = () => (
        <div className="alert alert-danger">Campos Obligatorios.</div>
    )
    return (
        <>
            <h2>Formulario Controlado</h2>

            {
                error ? <PintarError/> : null
            }
            {/* Otra opcion */}
            {/* {error && <PintarError />} */}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Ingrese Todo"
                name="todoName"
                className="form-control mb-2" 
                onChange={handleChange}
                value={todo.todoName}
              />

              <textarea
                name="todoDescripcion"
                placeholder="Ingrese descripcion del todo"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoDescripcion}
                />

              <select
                    name="todoEstado"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoEstado}
              >                  
                  <option value="pendiente">Pendiente</option>
                  <option value="completada">Completada</option>
              </select>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="todoCheck"
                  onChange={handleChange}
                  checked={todo.todoCheck}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >                
                Dar prioridad
                </label>
                </div>
              <button type="submit" className="btn btn-primary">Agregar</button>
          </form>
        </>
    )
}

export default FormControlled

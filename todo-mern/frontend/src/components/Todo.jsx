

export function Todos({todos}){


    return(
        <div style={{padding: 10, margin: 10}}>
            {
            todos.map((todo)=>{
                return (
                <div>
                <h3>{todo.title}</h3>
                <h3>{todo.des}</h3>
                <button>{todo.completed == true ? "completed" : "not completed"}</button>
                </div>
             )
            })
            
            } 
        </div>
    )
}
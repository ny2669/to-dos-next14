const baseUrl = 'http://localhost:3001'

export const getData = async () => {

    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' })
    const todos = await res.json()

    return todos
  
}



export const getdotos = async (todo) => {


    const res = await fetch(`${baseUrl}/tasks`, {

        method: 'POST',
        headers:{

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(todo)
    }, 
    )

    const newtodos = await res.json()

    return newtodos
}



export const editToDos = async (todo) => {

 

    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {

        method: 'PUT',
        headers:{

            'Content-Type': 'application/json'
        },

        body: JSON.stringify(todo)
    }, 
    )

    const edittodos = await res.json()

    return edittodos
}

export const deleteToDos = async (id) => {

 

 await fetch(`${baseUrl}/tasks/${id}`, {

        method: 'DELETE',
      
    }, 
    )

   
}
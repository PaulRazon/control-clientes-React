import { Form, redirect, useNavigate } from "react-router-dom"
import { eliminarCliente } from "../data/clientes"

export async function action({params}){
    await eliminarCliente(params.clienteId)
    return redirect('/')
}
function Cliente({cliente}) {

    const navigate = useNavigate()//PERMITE USAR LA NAVEGACION DE PAGINAS
  const {nombre,empresa,email,telefono,id} = cliente
  return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td className="p-6">
                <p className="text-gray-600"><span className="text-gray-800">Email:</span>{email}</p>
                <p className="text-gray-600"><span className="text-gray-800">Telefono:</span>{telefono}</p>
            </td>
            <td className="p-6 flex gap-20">
                <button 
                    onClick={()=>navigate(`/clientes/${id}/editar`)}//accediendo a un id especifico
                    type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">
                    Editar
                </button>
                
                <Form
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(e)=>{
                        if(!confirm('¿Deseas eliminar este Registro?')){
                            e.preventDefault()
                        }
                    }}
                    >
                    
                <button  type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
                    Eliminar
                </button>
                </Form>
            </td>
        </tr>
  )
}

export default Cliente

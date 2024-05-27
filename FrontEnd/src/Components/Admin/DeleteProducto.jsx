import { useEffect, useState } from "react";
import { fetchProd } from "../../Servicios/ServiciosAPI";
import axios from "axios";
import { API_URL } from "../../variables";

export const DeleteProducto = () => {

    const apiUrl = API_URL

    const [productos, setProductos] = useState([])
    const [codigo, setCodigo] = useState([])
    const [elejido, setElejido] = useState({ codigo: 0,marca: '', nombre: ''})
    const [errorID, setErrorID] = useState('');

    const handleChangeCod = (e) => {
        const { value } = e.target;
        setCodigo(value);
    };

    const deletear = async () => {
        try {
          await axios.delete(apiUrl + '/delete', { data: { codigo: codigo } });
          console.log('Eliminado con Éxito');
          navigate("/administration");
        } catch (error) {
          if (error.response && error.response.status === 400) {
            return; // No hagas nada especial si el servidor devuelve un error 400
          }
          // Maneja otros errores aquí si es necesario
          console.error('Error al eliminar:', error);
        }
      };
      

    const Clean = (e) => {
        e.preventDefault()
        setElejido({ codigo: 0, subcat: 0, marca: '', nombre: '', precio: 0 })
        setCodigo(0)
    }

    const buscar = (e) => {
        e.preventDefault();
        setErrorID('');
    
        const productoEncontrado = productos.find((prod) => prod.codigo == codigo);
    
        if (!productoEncontrado || JSON.stringify(productoEncontrado) === JSON.stringify(elejido)) {
            setErrorID('Este código no existe');
            setElejido({ codigo: 0, subcat: 0, marca: '', nombre: '', precio: 0 })
            setCodigo(0)
            return;
        }
    
        setElejido(productoEncontrado);
        console.log(productoEncontrado);
    
    };
    

    useEffect(() => {

    const fetchProds = async () => {
        const productosData = await fetchProd();
        setProductos(productosData)
    }

    fetchProds();
    }, [])

    useEffect(()=> {
        console.log(elejido)
    }, [elejido])


  return (
    <div id='agregar'>
      <form action="" id='formadd'>
        <h1>Modificar Producto</h1>
        <table id='tableadd'>

          <tbody>
            <tr>
              <td>Codigo</td>
              <td><input type="text" maxLength="9" name='codigo' onChange={handleChangeCod} /></td>
            </tr>
          </tbody>
        </table>

        <div id='botones'>
          <button onClick={buscar}>Buscar</button>
          <button onClick={Clean}>Limpiar</button>
        </div>

        <section id='errors'>
            {errorID && <p>{errorID}</p>}
        </section>

        <h2>{elejido.marca} - {elejido.nombre}</h2>

        <div id='botones'>
          <button onClick={deletear}>Eliminar</button>
        </div>
        
      </form>
    </div>
  )
}

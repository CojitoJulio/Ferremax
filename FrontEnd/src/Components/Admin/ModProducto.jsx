import { useEffect, useState } from "react";
import { fetchCate, fetchProd } from "../../Servicios/ServiciosAPI";
import axios from "axios";
import { API_URL } from "../../variables";
import { useNavigate } from "react-router-dom";

export const ModProducto = () => {

  const [productos, setProductos] = useState([])
  const [codigo, setCodigo] = useState([])
  const [elejido, setElejido] = useState({ codigo: 0, subcat: {}, marca: '', nombre: '', precio: 0 })
  const [categorias, setCategorias] = useState([])
  const [errorID, setErrorID] = useState('');
  const apiUrl = API_URL

  const navigate = useNavigate();

  const handleChangeCod = (e) => {
    const { value } = e.target;
    setCodigo(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setElejido((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const actualizar = async () => {

    const meromero = { codigo: elejido.codigo, subcat: elejido.subcat_id, marca: elejido.marca, nombre: elejido.nombre, precio: elejido.precio }

    try {
      await axios.put(apiUrl + "/mod", meromero)
      console.log('Modificado con Exito')
      navigate("/administration")

    } catch (e) {
      if (e.response.status == 400) {
        return
      }
    }
  }

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
    const fetchCateg = async () => {
      const categoriasData = await fetchCate();
      setCategorias(categoriasData)
    }

    const fetchProds = async () => {
      const productosData = await fetchProd();
      setProductos(productosData)
    }

    fetchProds();
    fetchCateg();
  }, [])

  useEffect(() => {
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

        <table id='tableadd'>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td><input type="text" name='nombre' value={elejido.nombre} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Marca</td>
              <td><input type="text" name='marca' value={elejido.marca} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Categoria</td>
              <td>
                <select name="subcat_id" value={elejido.subcat.subcat_id} onChange={handleChange}>
                  {categorias.map((cate) =>
                    <option key={cate.subcat_id} value={cate.subcat_id}>{cate.subcat}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td>Precio</td>
              <td><input type="text" placeholder='$' name='precio' value={elejido.precio} onChange={handleChange} /></td>
            </tr>
          </tbody>
        </table>

        <div id='botones'>
          <button onClick={actualizar}>Actualizar</button>
        </div>

      </form>
    </div>
  )
}

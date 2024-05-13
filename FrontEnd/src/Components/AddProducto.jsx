import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { fetchCate, fetchSucu } from '../Servicios/ServiciosAPI'

export const AddProducto = () => {

  const [sucursales, setSucursales] = useState([])
  const [categorias, setCategorias] = useState([])


  // Datos Formulario
  const id = useRef()
  const nombre = useRef()
  const marca = useRef()
  const categoria = useRef()
  const precio = useRef()
  const refs = {};

  const enviar = (e) => {
    e.preventDefault();

    let producto = {
      "codigo": id.current.value,
      "subcat": categoria.current.value,
      "marca": marca.current.value,
      "nombre": nombre.current.value,
      "precio": precio.current.value,
      "stock": []
    }

    const valores = {};
    Object.keys(refs).forEach((key) => {
      valores[key] = refs[key].value;
      producto.stock.push(refs[key].value)
    });

    console.log(producto)
    postear(producto);
  };

  const postear = async (producto) => {
    try {
      await axios.post("http://localhost:3000/api/agregar", producto)
      console.log('Agregado con Exito')

    } catch (e) {
      if (e.response.status == 400) {
        console.log('error 400 po papito')
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const sucursalesData = await fetchSucu();
      setSucursales(sucursalesData)
    }

    const fetchCateg = async () => {
      const categoriasData = await fetchCate();
      setCategorias(categoriasData)
    }

    fetchData();
    fetchCateg();
  }, [])

  return (
    <div id='agregar'>
      <form action="" id='formadd'>
        <h1>Agregar Producto</h1>
        <table id='tableadd'>
          <tbody>
            <tr>
              <td>Codigo</td>
              <td><input type="text" ref={id} /></td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td><input type="text" ref={nombre} /></td>
            </tr>
            <tr>
              <td>Marca</td>
              <td><input type="text" ref={marca} /></td>
            </tr>
            <tr>
              <td>Categoria</td>
              <td>
                <select name="categoria" ref={categoria}>
                  {categorias.map((cate) =>
                    <option key={cate.subcat_id} value={cate.subcat_id}>{cate.subcat}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td>Precio</td>
              <td><input type="text" placeholder='$' ref={precio} /></td>
            </tr>
          </tbody>
        </table>
        <h1>Stock</h1>
        <table id='tablesuc'>
          <tbody>
            <tr>
              <td id='titulosstock'>Sucursal</td>
              <td id='titulosstock'>Stock</td>
            </tr>
            {sucursales.map((sucursal) =>
              <tr key={sucursal.sucursal_id}>
                <td>{sucursal.nombre}</td>
                <td><input type="text" ref={(ref) => refs[sucursal.sucursal_id] = ref} /></td>
              </tr>
            )}
          </tbody>
        </table>
        <div id='botones'>
          <button type='' onClick={enviar} >Agregar</button>
          <button>Limpiar</button>
        </div>
      </form>
    </div>
  )
}

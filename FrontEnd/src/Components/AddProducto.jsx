import { useEffect, useState } from 'react'

export const AddProducto = () => {

  const [sucursales, setSucursales] = useState([])
  const [categorias, setCategorias] = useState([])

  const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/sucursales');
      const sucurbd = await response.json()
      setSucursales(sucurbd);
  }

  const fetchCate = async () => {
    const response = await fetch('http://localhost:3000/api/categorias');
    const catedb = await response.json()
    setCategorias(catedb);
}

  useEffect(() => {
      fetchData();
      fetchCate();
  }, [])

  return (
    <div id='agregar'>
      <form action="" id='formadd'>
        <h1>Agregar Producto</h1>
        <table id='tableadd'>
          <tr>
            <td>Codigo</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Nombre</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Marca</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Categoria</td>
            <td>
              <select name="categoria">
                {categorias.map((cate) =>
                <option value={cate.subcat_id}>{cate.subcat}</option> )}
              </select>
            </td>
          </tr>
          <tr>
            <td>Precio</td>
            <td><input type="text" placeholder='$' /></td>
          </tr>
        </table>
        <h1>Stock</h1>
        <table id='tablesuc'>
          <tr>
            <td id='titulosstock'>Sucursal</td>
            <td id='titulosstock'>Stock</td>
          </tr>
          {sucursales.map((sucursal) => 
            <tr>
                <td>{sucursal.nombre}</td>
                <td><input type="text" /></td>
            </tr>
          )}
        </table>
        <div id='botones'>
          <button type='submit'>Agregar</button>
          <button>Limpiar</button>
        </div>
      </form>
    </div>
  )
}

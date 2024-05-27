import axios from 'axios'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { fetchCate, fetchProd, fetchSucu } from '../../Servicios/ServiciosAPI'

export const AddProducto = () => {

  const [sucursales, setSucursales] = useState([])
  const [categorias, setCategorias] = useState([])
  const [productos, setProductos] = useState([])
  const [errors, setErrors] = useState({});
  const [errorID, setErrorID] = useState('');
  const navigate = useNavigate();

  const [datosForm, setDatosForm] = useState({ codigo: 0, subcat: 0, marca: '', nombre: '', precio: 0, stock: [] })

  // Validaciones

  const schema = z.object({
    nombre: z.string().min(1, 'El nombre es requerido'),
    codigo: z.number({
      invalid_type_error: "EL Codigo debe ser un número",
    }).min(1, 'El codigo es requerido'),
    marca: z.string().min(1, 'La Marca es requerida'),
    precio: z.number({
      invalid_type_error: "El precio debe ser un número"
    }).min(1, 'El precio es requerido')
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const enviar = (e) => {
    e.preventDefault();
    setErrorID('')

    let newErrorID = '';
    // Verificar el código existente
    productos.forEach((prod) => {
      if (datosForm.codigo == prod.codigo) {
        newErrorID = 'Este código ya existe';
      }
    });

    if (newErrorID) {
      setErrorID(newErrorID);
      return;
    }

    try {
      const parsedData = schema.parse({
        ...datosForm,
        codigo: Number(datosForm.codigo),
        nombre: String(datosForm.nombre),
        marca: String(datosForm.marca),
        precio: Number(datosForm.precio)
      });

      console.log(parsedData)

      const stockes = AddStock()

      const UpdatedData = ({ ...datosForm, stock: stockes })
      if (!errorID) {
        postear(UpdatedData);
        setErrors({})
      }

    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((error) => {
          fieldErrors[error.path[0]] = error.message;
        });
        setErrors(fieldErrors);
        console.log(fieldErrors)
        return
      }
    }
  };

  const refs = {};

  const AddStock = () => {
    const stockes = [];
    Object.keys(refs).forEach((key) => {
      if (refs[key].value == '') {
        refs[key].value = 0
      }
      stockes.push(refs[key].value)
    });
    return stockes
  }

  const postear = async (producto) => {

    try {
      await axios.post("http://localhost:3000/api/agregar", producto)
      console.log('Agregado con Exito')
      navigate("/administration")

    } catch (e) {
      if (e.response.status == 400) {
        return
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

    const fetchProds = async () => {
      const productosData = await fetchProd();
      setProductos(productosData)
    }

    fetchData();
    fetchCateg();
    fetchProds();
  }, [])

  // onChange={(e) => { setDatosForm({...datosForm, nombre: e.target.value})}}

  return (
    <div id='agregar'>
      <form action="" id='formadd'>
        <h1>Agregar Producto</h1>
        <table id='tableadd'>
          <tbody>
            <tr>
              <td>Codigo</td>
              <td><input type="text" maxLength="9" name='codigo' value={setDatosForm.codigo} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td><input type="text" name='nombre' value={setDatosForm.nombre} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Marca</td>
              <td><input type="text" name='marca' value={setDatosForm.marca} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td>Categoria</td>
              <td>
                <select name="subcat" value={setDatosForm.subcat} onChange={handleChange}>
                  {categorias.map((cate) =>
                    <option key={cate.subcat_id} value={cate.subcat_id}>{cate.subcat}</option>)}
                </select>
              </td>
            </tr>
            <tr>
              <td>Precio</td>
              <td><input type="text" placeholder='$' name='precio' value={setDatosForm.precio} onChange={handleChange} /></td>
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
        <section id='errors'>
          {errorID && <p>{errorID}</p>}
          {errors.codigo && <p>{errors.codigo}</p>}
          {errors.nombre && <p>{errors.nombre}</p>}
          {errors.marca && <p>{errors.marca}</p>}
          {errors.precio && <p>{errors.precio}</p>}
        </section>
        <div id='botones'>
          <button type='' onClick={enviar} >Agregar</button>
          <button>Limpiar</button>
        </div>
        <small>Si el campo de stock está vacío, este se dejará como 0</small>
      </form>
    </div>
  )
}

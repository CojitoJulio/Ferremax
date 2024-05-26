export const fetchSucu = async () => {
    const response = await fetch('http://localhost:3000/api/sucursales');
    const sucurbd = await response.json()
    return sucurbd
}

export const fetchCate = async () => {
    const response = await fetch('http://localhost:3000/api/categorias');
    const catedb = await response.json()
    return catedb;
}

export const fetchProd = async () => {
    const response = await fetch('http://localhost:3000/api');
    const productos = await response.json()
    return productos;
}

export const fecthPromos = async () => {
    const response = await fetch('http://localhost:3000/api/promos');
    const promos = await response.json()
    return promos;
}
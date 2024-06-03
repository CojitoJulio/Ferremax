import { API_URL } from "../variables";

const apiUrl = API_URL

export const fetchSucu = async () => {
    const response = await fetch(apiUrl + '/sucursales');
    const sucurbd = await response.json()
    return sucurbd
}

export const fetchCate = async () => {
    const response = await fetch(apiUrl + '/categorias');
    const catedb = await response.json()
    return catedb;
}

export const fetchProd = async () => {
    const response = await fetch(apiUrl + '/');
    const productos = await response.json()
    return productos;
}

export const fecthPromos = async () => {
    const response = await fetch(apiUrl + '/promos');
    const promos = await response.json()
    return promos;
}

export const fetchDolar = async () => {
    const response = await fetch(apiUrl + '/dolar');
    const dolarsito = await response.json()
    return dolarsito

}
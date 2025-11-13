'use server'

import { db } from '@/lib/db'

// Productos

// BASE DE DATOS

export async function obtenerProductosDB(query) {
    const sql = 'select * from `productos` where nombre like ?';
    const values = [`%${query}%`]
    // const values = ['%teclado%']
    const [productos] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return productos
}


export async function obtenerProductoDB(id) {
    const sql = 'select * from productos where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}





// API


export async function obtenerProductosAPI(query) {
    const response = await fetch('http://localhost:3001/productos')
    const productos = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return productos.filter(a => a.nombre.toLowerCase().includes(query))
}



export async function obtenerProductoAPI(id) {
    const response = await fetch('http://localhost:3001/productos/' + id)
    if (!response.ok) return null
    const producto = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return producto
}


// Clientes

// BASE DE DATOS

export async function obtenerClientesDB(query) {
    const sql = 'select * from `clientes` where nombre like ?';
    const values = [`%${query}%`]
    // const values = ['%teclado%']
    const [clientes] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return clientes
}


export async function obtenerClienteDB(id) {
    const sql = 'select * from clientes where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}





// API


export async function obtenerClientesAPI(query) {
    const response = await fetch('http://localhost:3001/clientes')
    const clientes = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return clientes.filter(a => a.nombre.toLowerCase().includes(query))
}



export async function obtenerClienteAPI(id) {
    const response = await fetch('http://localhost:3001/clientes/' + id)
    if (!response.ok) return null
    const cliente = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return cliente
}



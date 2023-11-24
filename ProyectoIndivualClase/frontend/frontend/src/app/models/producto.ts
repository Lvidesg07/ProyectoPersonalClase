export interface Producto{
    id?: number;
    descripcion: string;
    precio: number;
    stock: number;
}

export interface Distribucion{
    id?: number;
    cantidad_producto: number;
    producto_id:number;
    proveedor_id:number;
}
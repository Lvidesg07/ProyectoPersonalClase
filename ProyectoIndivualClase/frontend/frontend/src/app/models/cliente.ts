export interface Cliente {
    id?: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    telefono: string;
}

export interface Compra {
    id?: number;
    cliente_id: number;
    producto_id: number;
    fecha: Date;
}
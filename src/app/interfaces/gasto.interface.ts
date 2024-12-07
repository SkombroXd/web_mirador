export interface Gasto {
    id_gastos: number;
    fecha_emision: Date;
    monto_gasto: number;
    fecha_pago?: Date;
    total_pago: number;
    pago: boolean;
    id_depa: number;
    numero_depto?: number; // Este campo vendrá del join con la tabla departamento
} 
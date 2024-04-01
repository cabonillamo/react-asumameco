export interface Event {
  id: number;
  nombre: string;
  direccion: string;
  fecha: string;
  fechaCreacion: string;
  descripcion?: string;
  imagen: string;
  eventoAsociados: [];
}
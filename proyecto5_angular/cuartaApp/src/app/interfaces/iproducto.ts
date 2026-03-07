export interface IProducto {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description?: IProductoDescription;
  origen?: IProductoOrigen;
}

export interface IProductoDescription {
  text: string;
  slug: string;
}

export interface IProductoOrigen {
  country: string;
  city: string;
  cp: number;
}

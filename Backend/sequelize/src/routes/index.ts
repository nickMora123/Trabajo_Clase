import { ClienteRoutes } from './Cliente';
import { Product_ventaRoutes } from './Product_venta';
import { ProductoRoutes } from './Producto';
import { Tipo_ProductoRoutes } from './Tipo_producto';
import { VentaRoutes } from './venta';


export class Routes {
    public ClienteRoutes: ClienteRoutes = new ClienteRoutes();
    public Product_ventaRoutes: Product_ventaRoutes = new Product_ventaRoutes(); 
    public ProductoRoutes: ProductoRoutes = new ProductoRoutes();
    public Tipo_productoRoutes: Tipo_ProductoRoutes = new Tipo_ProductoRoutes();
    public VentaRoutes: VentaRoutes = new VentaRoutes();
}

import { Model, DataTypes } from "sequelize";
import { database } from "../ThreeGroup/db";
import { Producto } from "./Producto";

export class Product_venta extends Model {
  public cantidad!: string;
  public precio!: string;
  public total!: string;
  public ValorUnit!: string;
}

export interface Product_ventaI {
    cantidad: string;
    precio: string;
    total: string;
    ValorUnit: string;
}

Product_venta.init(
  {

    cantidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
     precio: {
        type: DataTypes.STRING,
        allowNull: false
      },
    total: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
    ValorUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    tableName: "Product_ventas",
    sequelize: database,
    timestamps: true
  }
);


Product_venta.hasMany(Producto)

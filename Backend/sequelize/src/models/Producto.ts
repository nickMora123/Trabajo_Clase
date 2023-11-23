import { Model, DataTypes } from "sequelize";
import { database } from "../ThreeGroup/db";
import { Venta } from "./Venta";
import { Product_venta } from "./Product_venta";

export class Producto extends Model {
  public nombre!: string;
  public marca!: string;
  public precio!: string;
  public stockMin!: string;
  public cantidad!: string;
}

export interface ProductoI {
    nombre: string;
    marca: string;
    precio: string;
    stockMin: string;
    cantidad: string;
}

Producto.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
    precio: {
        type: DataTypes.STRING,
        allowNull: false
      },
    stockMin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    cantidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    tableName: "Productos",
    sequelize: database,
    timestamps: false
  }
);


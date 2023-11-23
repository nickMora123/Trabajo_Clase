import { Model, DataTypes } from "sequelize";
import { database } from "../ThreeGroup/db";
import { Product_venta } from "./Product_venta";

export class Venta extends Model {
  public fecha!: string;
  public subtotal!: string;
  public impuestos!: string;
  public descuentos!: string;
  public total!: string;
  public estado!: string;

}

export interface VentaI {
    fecha: string;
    subtotal: string;
    impuestos: string;
    descuentos: string;
    total: string;
    estado: string;
  }

Venta.init(
  {
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
      },
    subtotal: {
        type: DataTypes.STRING,
        allowNull: false
      },
    impuestos: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    descuentos: {
        type: DataTypes.STRING,
        allowNull: false
      },
    total: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.ENUM('activo','inactivo'),
        allowNull: false
      } 
  },
  {
    tableName: "Ventas",
    sequelize: database,
    timestamps: false
  }
);


Venta.hasMany(Product_venta)
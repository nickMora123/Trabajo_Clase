import { Model, DataTypes } from "sequelize";
import { database } from "../ThreeGroup/db";
import { Producto } from "./Producto";

export class Tipo_Producto extends Model {
  public name!: string;
}

export interface Tipo_ProductoI {
    name: string;
}

Tipo_Producto.init(
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    tableName: "Tipo_Producto",
    sequelize: database,
    timestamps: true
  }
);

Tipo_Producto.hasMany(Producto)
Producto.belongsTo(Tipo_Producto)
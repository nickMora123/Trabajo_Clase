import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Tipo_Producto, Tipo_ProductoI } from '../models/Tipo_producto';

export class Tipo_ProductoController {
    
    public async getAllTipo_Producto(req: Request, res:Response){
        try {
            const tipo_producto: Tipo_ProductoI[] = await Tipo_Producto.findAll( ) // select * from tipo_productos;
            res.status(200).json({tipo_producto})
        } catch (error) {

        }
    }

    public async update(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            name
        }= req.body

        try {
            let body:Tipo_ProductoI = {
            name
            } 

            const tipo_productoExist: Tipo_ProductoI | null = await Tipo_Producto.findByPk(pk);
          

            if(!tipo_productoExist) return res.status(500).json({msg:"El Tipo_Producto No existe"})
            await Tipo_Producto.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk

        } catch (error) {

        }
        const tipo_producto: Tipo_ProductoI | null = await Tipo_Producto.findByPk(pk);
        if(tipo_producto) return res.status(200).json({tipo_producto})

    }

    public async create(req: Request, res:Response)
        {
            try {
                let tipo_producto: Tipo_ProductoI = req.body;
                const dataTipo_Producto: Tipo_ProductoI = await Tipo_Producto.create({ ...tipo_producto });
                res.status(200).json({ dataTipo_Producto });
            } catch (error) {
                console.error('Error al crear el tipo_producto:', error);
                res.status(500).json({ message: 'Hubo un problema al crear el tipo_producto.' });
              }
    
        }
        public async getOneTipo_Producto(req: Request, res:Response){
            const { id: idParam } = req.params
    
            try {
                const tipo_producto:Tipo_ProductoI | null = await Tipo_Producto.findOne(
                    {
                        where: { 
                            id: idParam,
                        }
                    }
                )
                if (tipo_producto){
                    res.status(200).json(tipo_producto)
                } else return  res.status(300).json({msg: "El Tipo_Producto no existe"})
    
            } catch (error) {
                res.status(500).json({msg: "Error Internal"})
            }
        }

        public async delete(req: Request, res:Response){
            const { id:pk } = req.params;
    
    
            try {
                const tipo_productoExist: Tipo_ProductoI | null = await Tipo_Producto.findByPk(pk);
                if(!tipo_productoExist) return res.status(500).json({msg:"El Tipo_Producto No existe"})
                await Tipo_Producto.destroy(
                    {
                        where: {id: pk}
                    }
                )
                res.status(200).json({msg:"Tipo_Producto Eliminado"})
            } catch (error) {
    
            }
    
        } 

     
    

}

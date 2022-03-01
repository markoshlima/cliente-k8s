import { Request, Response, NextFunction } from 'express';

const ClienteService = require('../service/ClienteService.ts');

const getClientes = async (req: Request, res: Response, next: NextFunction) => {
    const service = new ClienteService()
    return res.status(200).json(service.getClientes());
};

const getCliente = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    const service = new ClienteService()
    return res.status(200).json(service.getCliente(id));
}; 


export default { getClientes, getCliente };
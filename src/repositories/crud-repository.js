const { StatusCodes } = require("http-status-codes");
const { Logger } = require("../config");
const AppError = require("../utils/errors/app-error");

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
       
            const response = await this.model.create(data);
            // console.log(response);
            return response;
       
    }


    async destroy(data){
        // try {
        //     const response = await this.model.destroy({
        //         where: {
        //             id: data
        //         }
        //     });
        //     return response;
        // } catch (error) {
        //     Logger.error('Something went wrong in the crud repo:destroy');
        //     throw error;
        // }

        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async get(data){
        // try {
        //     const response = await this.model.findByPK(data);
        //     return response;
        // } catch (error) {
        //     Logger.error('Something went wrong in the crud repo:get');
        //     throw error;
        // }

        const response = await this.model.findByPk(data);
        if(!response) {
            throw new AppError('Not able to find the resource', StatusCodes.NOT_FOUND);
        }

        // if(response.data==null)
        // throw new AppError('Not able to fund the resource', StatusCodes.NOT_FOUND);

        return response;
    }

    async getAll(){
        // try {
        //     const response = await this.model.findAll();
        //     return response;
        // } catch (error) {
        //     Logger.error('Something went wrong in the crud repo:getAll');
        //     throw error;
        // }

        const response = await this.model.findAll();
            return response;
    }

    async update(id,data){
        // try {
        //     const response = await this.model.update(data, {
        //         where: {
        //             id: id
        //         }
        //     })
        //     return response;
        // } catch (error) {
        //     Logger.error('Something went wrong in the crud repo:update');
        //     throw error;
        // }

        const response = await this.model.update(data, {
            where: {
                id: id
            }
        })
        return response;
    }


    
}

module.exports=CrudRepository;
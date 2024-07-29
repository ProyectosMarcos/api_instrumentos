import { Router } from "express";
import { instrumentController } from "../controllers/instrumentController.js";
import { schemaValidator } from "../middlewares/validations.js";
import { bodyInstrumentSchema, updateInstrumentSchema } from '../schemas/instrumentsSchemas.js'


export const instrumentsRouter = () => {
    const instrumentsRouter = Router()
    const { getInstruments, createInstrument, getInstrumentbyId, updateInstrumentbyId, deleteInstrumentbyId } = instrumentController()

    instrumentsRouter.route('/instruments')
        .get(getInstruments)
        .post(schemaValidator(bodyInstrumentSchema), createInstrument)


    instrumentsRouter.route('/instruments/:id')
        .get(getInstrumentbyId)
        .patch(schemaValidator(updateInstrumentSchema), updateInstrumentbyId)
        .delete(deleteInstrumentbyId)
    return instrumentsRouter
}




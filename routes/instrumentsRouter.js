import { Router } from "express";
import { instrumentController } from "../controllers/instrumentController.js";


export const instrumentsRouter = () => {
    const instrumentsRouter = Router()
    const { getInstruments, createInstrument, getInstrumentbyId, updateInstrumentbyId, deleteInstrumentbyId } = instrumentController()

    instrumentsRouter.route('/instruments')
        .get(getInstruments)
        .post(createInstrument)


    instrumentsRouter.route('/instruments/:id')
        .get(getInstrumentbyId)
        .put(updateInstrumentbyId)
        .delete(deleteInstrumentbyId)
    return instrumentsRouter
}




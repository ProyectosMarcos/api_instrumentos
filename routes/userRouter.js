import { Router } from 'express'
import { userController } from '../controllers/userController.js'

const userRouter = Router()
const { register, login, profile } = userController()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/profile/:id', profile)

export default userRouter




/* export const instrumentsRouter = () => {
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
 */
import {configureStore} from '@reduxjs/toolkit'
import Breadcrumb  from '../slices/BreadCrumb.slice'

const store = configureStore({
    reducer: {
        Breadcrumb : Breadcrumb,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
export default store
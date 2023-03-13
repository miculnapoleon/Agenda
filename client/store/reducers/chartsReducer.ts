import { AnyAction } from "@reduxjs/toolkit"
import { IChartReducer } from "./IChartReducer"

const initialState: IChartReducer = {
    lineChartData: null
}


const chartsReducer = (state=initialState, actions: AnyAction) => {
    switch(actions.type) {
        default: 
            return state
    }
}

export default chartsReducer
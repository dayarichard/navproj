import { ADD_CHECK_BOX_ELEMENTS, DELETE_CHECK_BOX_ELEMENTS, ONCHECK_ELEMENT } from "./actiontypes";



export const addCheckBox = (value)=>({
    type: ADD_CHECK_BOX_ELEMENTS,
    payload:value
})

export const deleteCheckBox = (value)=>({
    type: DELETE_CHECK_BOX_ELEMENTS,
    payload:value
})

export const onCheckElement = (value)=>({
    type: ONCHECK_ELEMENT,
    payload:value
})
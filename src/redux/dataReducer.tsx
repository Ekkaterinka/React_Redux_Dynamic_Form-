
import uuid from 'react-uuid';

import { ADD_DATA, DELETE_DATA, EDIT_DATA, FILTER_DATA } from './actions'

const initialState = {
  list:
    [
      { id: uuid(), text: 'Замена стекла', price: 21000 },
      { id: uuid(), text: 'Замена дисплея', price: 25000 },
    ],
  filter: "",
};

export default function dataListReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        list: [...state.list, action.payload]
      }

    case EDIT_DATA:
      const editedItem = { ...action.payload };
      editedItem.price = Number(editedItem.price);
      return {
        ...state, list: [...state.list.map((item) => item.id === editedItem.id ? editedItem : item)]
      }

    case DELETE_DATA:
      return {
        ...state,
        list: state.list.filter((i) => i.id !== action.payload.id)
      }

    case FILTER_DATA:
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state;
  }
}

import { ADD_DATA, DELETE_DATA, EDIT_DATA, FILTER_DATA } from './actions'
export function addData(id: string, text: string, price: any) {
  return { type: ADD_DATA, payload: { id, text, price }   };
}
export function deleteData(id: string) {
  return { type: DELETE_DATA, payload: { id } };
}

export function editData(id: string, text: string, price: any) {
  return { type: EDIT_DATA, payload: { id, text, price } };
}

export function filterData(value: any) {
  return { type: FILTER_DATA, payload: { value} };
}


import { useSelector, useDispatch } from 'react-redux';
import { addData, deleteData, editData } from '../redux/ActionCreators'
import { FILTER_DATA } from '../redux/actions'
import { useState } from 'react';
import uuid from 'react-uuid';


export default function DataAdd() {
  const list = useSelector((state: any) => state.dataAdd.list);
  const filter = useSelector((state: any) => state.dataAdd.filter);
  const [iD, setID] = useState('');
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = uuid();
    if (iD) {
      dispatch(editData(iD, text, price));
    } else {
      dispatch(addData(id, text, price));
    }
    console.log(iD)
    setText(''),
      setPrice('')
  };

  const handleEdit = (a: any) => {
    setText(a.text);
    setPrice(a.price),
      setID(a.id)
  };
  const handleRemove = (id: any) => {
    dispatch(deleteData(id))
    console.log(id)
  };
  const handleClear = (evt: any) => {
    evt.preventDefault();
    setText(''),
      setPrice(''),
      setID('')
  };

  const filterList = list.filter((item: any) =>
    item.text.includes(filter))

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name='text' value={text} onChange={event => setText(event.target.value)} />
        <input name='price' value={price} onChange={event => setPrice(event.target.value)} />
        <button type='submit'>Save</button>
        {iD && <button onClick={handleClear}>Cancel</button>}
      </form>
      <div>
        <input
          onChange={(e) => {
            dispatch({
              type: FILTER_DATA,
              payload: e.target.value,
            });
          }}
        />
      </div>
      <ul>
        {filterList.map((o: any) => (
          <li key={o.id}>
            {o.text} {o.price}
            <button onClick={() => handleEdit(o)}>Edit</button>
            <button onClick={() => handleRemove(o.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div >
  );


}

import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { setParent } from '../../store/features/parentSlice';
import { setGrandparent } from '../../store/features/grandparentSlice';
function Child() {
    const [values, setValues] = useState({
        grandparentText: '',
        parentColor: '',
    });
    const dispatch = useDispatch();
    const handleGo = () => {
        dispatch(setParent(values.parentColor));
        dispatch(setGrandparent(values.grandparentText));
    }
  return (
    <div
      style={{
        backgroundColor: "lemonchiffon",
        height: "100px",
      }}
    >
      <h1>Child</h1>

      <label>
        Grandparent text
        <input
          value={values.grandparentText}
          onChange={(e) =>
            setValues({ ...values, grandparentText: e.target.value })
          }
        />
      </label>
      <label>
        parent color
        <input
          value={values.parentColor}
          onChange={(e) =>
            setValues({ ...values, parentColor: e.target.value })
          }
        />
      </label>
      <button onClick={handleGo}>Go</button>
    </div>
  );
}

export default Child
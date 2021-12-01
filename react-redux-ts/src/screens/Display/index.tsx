import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';

const Display = () => {
    const amount = useSelector((state: State) => state.bank)
  
    return (
      <div>
        <h1>RESULTADO</h1>
        <span>{amount}</span>
        <Link to="/">Home</Link>
      </div>
    );
  }
  
  export default Display;
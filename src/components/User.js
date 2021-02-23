import  React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {remove, add} from "../redux/action/nameAction";

export const User = () => {
    const [user, setUser] = useState({name:''});
    const dispatch = useDispatch();
    const nameStore = useSelector( state => state.name.name);

    const NameUser = (e) => {
        setUser({name: e.target.value});
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-8">
                <div className="card border-dark mt-3 w-100">
                    <h5 className="card-header">Add user name</h5>
                    <div className="card-body">
                            <div className="form-group">
                                <input type="text"
                                       className="form-control"
                                       name="name" value={user.name}
                                       placeholder="Enter you name"
                                       onChange={NameUser}
                                />
                            </div>
                        <div className="btn-group">
                            <button className="btn btn-outline-primary" onClick={ () => dispatch(add(user.name)) }>Save</button>
                            <button className="btn btn-outline-secondary" onClick={() => dispatch(remove(user.name))}>Reset</button>
                        </div>
                    </div>
                </div>
                {
                <ul className="list-group w-100 mt-3">
                    <h3>You name is, {nameStore}</h3>
                </ul>
                }
            </div>
            </div>
        </div>
    )
}

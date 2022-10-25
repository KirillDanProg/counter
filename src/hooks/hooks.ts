import {useDispatch} from "react-redux";
import { RootState} from "../store/store";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export  const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, any, AnyAction>>()

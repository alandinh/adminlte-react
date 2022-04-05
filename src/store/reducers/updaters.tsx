/* eslint-disable no-debugger */
import {getPermissions, getRoles} from "@app/utils";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {updateUserRoles, updatePermissions} from "./user";

export default function Updater(): null {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllData = async () => {
      const dataRoles = await getRoles();
      dispatch(updateUserRoles(dataRoles));
      
      const dataPermission = await getPermissions();
      dispatch(updatePermissions(dataPermission));
    };
    getAllData();
  }, [dispatch]);

  return null;
}

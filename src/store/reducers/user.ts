/* eslint-disable prettier/prettier */
import { DataRolesUser, PermissionI } from '@app/utils/types';
import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
    dataRoles: DataRolesUser[]
    dataPermissions: PermissionI[]
}

const initialState: UserState = {
    dataRoles: [],
    dataPermissions: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserRoles: (state, { payload }) => {
            state.dataRoles = payload
        },
        updatePermissions: (state, { payload }) => {
            state.dataPermissions = payload
        },
    }
});

export const { updateUserRoles, updatePermissions } = userSlice.actions;

export default userSlice.reducer;

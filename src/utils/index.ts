/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
import { axios } from "@app/services/auth";
import { DateTime } from "luxon";
import format from "date-fns/format";
import {
    changePasswordProps,
    IPermissionRoleUser,
    UserI
    , IEditUser, INotificationTypeReq
} from "./types";

export const showTime = (time: Date | number) => {
    let datetime;
    if (time instanceof Date) {
        datetime = DateTime.fromJSDate(time);
    } else {
        datetime = DateTime.fromSeconds(time);
    }
    return datetime?.toRelative();
};

export const toFormatTime = (time: Date | number, format: string) => {
    let datetime: any;
    if (time instanceof Date) {
        datetime = DateTime.fromJSDate(time);
    } else {
        datetime = DateTime.fromSeconds(time);
    }
    return datetime?.toFormat(format);
};

export const formatTime = (time: Date | number | string) => {
    const DATE_FORMAT_WITH_DASH = "HH:mm:ss - dd-MM-yyyy";
    const date = new Date(time);
    return format(date, DATE_FORMAT_WITH_DASH);
};
export const formatTimeByDay = (time: Date | number | string) => {
    const DATE_FORMAT_WITH_DASH = "dd-MM-yyyy";
    const date = new Date(time);
    return format(date, DATE_FORMAT_WITH_DASH);
};

export const shortAddress = (address: string) => {
    if (!address) return "";
    if (address.length > 14) {
        return `${address.substr(0, 8)}...${address.substr(-6)}`;
    }
    return address;
};

// function manager list uses and roles
export const getListUsers = async (
    page: string = "1",
    pageSize: string = "10",
    sortBy: string = "createdAt%3Aasc"
) => {
    const url = `users/list?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`;
    try {
        const response = await axios.get(url);
        return response.data.docs;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getUserById = async (id: string = "") => {
    const url = `users/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const editNewUser = async (id: string = "", user: IEditUser) => {
    const url = `users/${id}`;
    const response = await axios.put(url, user);
    return response.data;
};

export const getRoles = async (
    page: string = "1",
    pageSize: string = "10",
    sortBy: string = "createdAt%3Aasc"
) => {
    const url = `roles?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`;
    try {
        const response = await axios.get(url);
        return response.data.docs;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getRoleUserById = async (id: string = "") => {
    const url = `roles/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
export const getListPlayer = async (
    page?: number,
    pageSize?: number,
    sortBy: string = "createdAt%3Aasc",
    keyword?: string
) => {
    const url = `player?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&keyword=${keyword}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getPlayerById = async (id: string = "") => {
    const url = `player/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(
            "🚀 ~ file: helpers.ts ~ line 52 ~ getListUsers ~ error",
            error
        );
    }
};

export const getPlayerStoryMode = async (
    address?: string,
    page?: number,
    pageSize?: number,
    startDate?: string,
    endDate?: string,
    keyword?: string
) => {
    const params: any = { page, pageSize, startDate, endDate, keyword }
    const response = await axios.get(`/player/${address}/game/story-mode`, { params })
    return response.data
};


export const getDataHeroes = async (
    address?: string,
    page?: number,
    pageSize?: number,
    keyword?: string
) => {
    const params: any = { page, pageSize, keyword }
    const response = await axios.get(`/player/${address}/game/nfts`, { params })
    return response.data
};

export const createNewUser = async (user: UserI) => {
    const url = `users/create`;
    const response = await axios.post(url, user);
    return response.data;
};

export const getDataItemIngame = async (
    address?: string,
    page: number = 1,
    pageSize: number = 10
) => {
    try {
        const response = await axios.get(
            `/player/${address}/game/souls?page=${page}&pageSize=${pageSize}`
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const getDataOrderHistory = async (
    address?: string,
    page: number = 1,
    pageSize?: number,
    keyword?: string,
) => {
    const params: any = { page, pageSize, keyword }
    const response = await axios.get(`/player/${address}/game/nfts/`, { params })
    const data: any = await response
    return data
};
export const getDataClaimHistory = async (
    address?: string,
    page: number = 1,
    pageSize: number = 10
) => {
    try {
        const response = await axios.get(
            `/player/${address}/game/mxy-history?page=${page}&pageSize=${pageSize}`
        );
        return response.data;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const deleteUser = async (idUser: string) => {
    const url = `users/${idUser}`;
    const response = await axios.delete(url);
    return response.data;
};

export const resetPassword = async (idUser: string, password: string) => {
    const url = `users/reset-password/${idUser}`;
    const response = await axios.put(url, { newPassword: password });
    return response.data;
};

export const getDataProfile = async () => {
    const url = `me/profile`;
    const response = await axios.get(url);
    return response.data;
};

export const editDataProfile = async (user: IEditUser) => {
    const url = `me/update-profile`;
    const response = await axios.put(url, user);
    return response.data;
};

export const changePassword = async (password: changePasswordProps) => {
    const url = `me/change-password`;
    const response = await axios.put(url, password);
    return response.data;
};

export const getPermissions = async () => {
    const url = `permissions`;
    const response = await axios.get(url);
    return response.data;
};

export const createNewRole = async (newRole: IPermissionRoleUser) => {
    const url = `roles`;
    const response = await axios.post(url, newRole);
    return response.data;
};
export const updateRole = async (newRole: IPermissionRoleUser, id: string) => {
    const url = `roles/${id}`;
    const response = await axios.put(url, newRole);
    return response.data;
};

export const deleteRoleUser = async (idUser: string) => {
    const url = `roles/${idUser}`;
    const response = await axios.delete(url);
    return response.data;
};

export const getNotifications = async (
    page: string = "1",
    pageSize: string = "10",
    fromDate: string = "2022-03-22T11%3A17%3A26.755Z",
    toDate: string = "2022-03-23T11%3A17%3A26.762Z",
    sortBy: string = "createdAt%3Aasc"
) => {
    const url = `notifications?page=${page}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}&sortBy=${sortBy}`;
    const response = await axios.get(url);
    return response.data.docs;
};

export const getDetailNotification = async (id: string) => {
    const url = `notifications/${id}`;
    const response = await axios.get(url);
    return response.data;
};
export const getNotificationTypes = async (
    page: string = "1",
    pageSize: string = "10",
    sortBy: string = "createdAt%3Aasc"
) => {
    const url = `notification-types?page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`;
    const response = await axios.get(url);
    return response.data.docs;
}
export const getDetailNotificationType = async (id: string) => {
    const url = `notification-types/${id}`;
    const response = await axios.get(url);
    return response.data;
};
export const deleteNotificationType = async (id: string) => {
    const url = `notification-types/${id}`;
    const response = await axios.delete(url);
    return response.data;
};
export const createNewNotificationType = async (notificationType: INotificationTypeReq) => {
    const url = `notification-types`;
    const response = await axios.post(url, notificationType);
    return response.data;
};
export const updateNotificationType = async (notificationType: INotificationTypeReq, id: string) => {
    const url = `notification-types/${id}`;
    const response = await axios.put(url, notificationType);
    return response.data;
};



import { FormValues, AllUsersFromDb } from '../types/types'
import api from '../utils'
let baseURL: string = '/user'

export const create = async (data: FormValues) => {
    let res = api.post(baseURL, data)
        .then(response => {
            return response.data
        }).catch(error => { throw new Error(error) })

    return res;

}

export const getUsers = async () => {
    try {
        let allusers = await api.get(baseURL)
        let res = allusers.data as AllUsersFromDb;
        return res;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getSingleUserFromDb = async (id: string) => {
    try {
        const singleUser = await api.get(`${baseURL}/${id}`)
        const res = singleUser.data as FormValues;
        return res
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateUserFromDB = async (id: string, data: FormValues) => {
    try {
        const updateUser = await api.put(`${baseURL}/${id}`, data)
        const res = updateUser.data as FormValues;
        return res;
    } catch (error: any) {
        throw new Error(error)

    }
}

export const deleteSingleUser = async (id: string) => {
    try {
        const deleteUser = await api.delete(`${baseURL}/${id}`)
        return deleteUser
    } catch (error: any) {
        throw new Error(error)
    }

}
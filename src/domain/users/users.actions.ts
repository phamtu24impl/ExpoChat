import type { User } from '../../types/local'
const types = {
    SET_USERS: 'AUTH.SET_USERS',
}

const setUsers = (payload: User[]) => ({
    type: types.SET_USERS,
    payload,
})

const authActions = {
    types,
    setUsers
}

export default authActions

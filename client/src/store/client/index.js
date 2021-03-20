import axios from 'axios'
import {createEffect, createEvent, createStore, forward, sample} from 'effector'

export const login = createEvent('login')

export const loginFx = createEffect(async ({email, password}) => {
    const result = await axios.post('http://localhost:3001/api/admin/login', {email, password})
    return result.data.token
})



export const $loginError = createStore(null)
    .on(loginFx.fail, (_, { error }) => {
        console.error(error)
        return error.message
    })
    .reset(login)

export const logout = createEvent('logout')

export const $token = createStore(null)
    .on(loginFx.done, (_, { result: token }) => token)
    .reset(logout)

export const $isAuth = $token.map(token => token !== null)

forward({
    from: login,
    to: loginFx
})

export const checkAdmin = createEvent('checkAdmin')

const checkAdminFx = createEffect({
    handler: async (token, ...restargs) => {
        console.log(token, restargs)
        const result = await axios({
            method: 'get',
            url: 'http://localhost:3001/api/admin/isAdmin',
            headers: {
                'Authorization': token
            }
        })
        return result.data.code === 'ok'
    }
})

sample({
    source: $token,
    clock: checkAdmin,
    target: checkAdminFx
})

$token.watch(x => console.log('token', x))
$isAuth.watch(x => console.log('isAuth', x))
checkAdminFx.done.watch(_ => console.log('cool is admin check'))
checkAdminFx.fail.watch(_ => console.log('fail is admin check'))
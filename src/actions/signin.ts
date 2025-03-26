'use server'

import { cookies } from 'next/headers'
import api from '@/server/api'
import sessionsResponse from '@/interfaces/DTOs/sessionResponse'

async function logIn(email: string, password: string) {
  const cookiesStore = cookies()
  try {
    const response = await api.post<sessionsResponse>('/sessions', {
      email,
      password,
    })

    cookiesStore.set('token', response.data.token)
    cookiesStore.set('user', JSON.stringify(response.data.user))

    return ''
  } catch (error) {
    return 'Houve um erro! Verifique seu login e senha!'
  }
}

export default logIn
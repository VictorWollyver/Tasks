export const API_URL = 'http://localhost:3000'

import axios from 'axios'

export const api = axios.create({ baseURL: API_URL })

export function UPDATE_TASK(body) {
  return {
    url: `${API_URL}/tasks/update`,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}

export function GET_TASKS() {
  return {
    url: `/tasks`,
    options: {
      method: "GET",
    }
  }
}

export function DELETE_TASK(body) {
  return {
    url: `${API_URL}/tasks/delete`,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}


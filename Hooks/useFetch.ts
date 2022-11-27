
import React from 'react'
import { api } from '../src/api';

const useFetch = () => {
  const [dataJson, setDataJson] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (method: string, url: string, data?: any) => {
    let response
    let json

    try {
      setError('')
      setLoading(true)
      response = await api({ method, url, data, headers: {Authorization: 'Bearer ' + window.localStorage.token } })
      json = await response.data
      if (!response.statusText) throw new Error()
    } catch (err: any) {
      setError(err.response.data.message)
      json = null
    } finally {
      setLoading(false)
      setDataJson(json)
      return { response, json }
    }

  }, []) 

  return { dataJson, request, loading, error, setDataJson }
}

export default useFetch
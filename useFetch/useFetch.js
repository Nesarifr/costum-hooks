import { useEffect, useState } from "react"

export const useFetch = (url=1) => {

    const [state, setState] = useState({
        data: null,
        isLoading: false,
        error: null
    })

    const getFetch = async (url) => {
        setState({ data: null, isLoading: true, error: null })


        const resp = await fetch(url)
        const data = await resp.json()
        setState({ data: data, isLoading: false, error: null })
    }

    useEffect(() => {
        getFetch(url)
    }, [url])

    return state
}
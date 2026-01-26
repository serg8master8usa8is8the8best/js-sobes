import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!url) return
        let cancelled = false

        ;(async () => {
            try {
                setLoading(true)
                const res = await fetch(url)
                if (!res.ok) throw new Error(res.statusText)
                const json = await res.json()
                if (!cancelled) setData(json)
            } catch (e) {
                if (!cancelled) setError(e)
            } finally {
                if (!cancelled) setLoading(false)
            }
        })()

        return () => {
            cancelled = true
        }
    }, [url])

    return { data, error, loading }
}

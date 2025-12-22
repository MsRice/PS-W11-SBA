import{ useEffect, useState } from 'react';  
  
export function useFetch(url: string){
    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState<string | null>(null)

    useEffect(() => {
        let isMounted = true

        async function fetchData() {
            try{
                setLoading(true)
                const response = await fetch(url)

                
                if(!response.ok){
                    throw new Error("Dis Broke")
                }
                
                // console.log(response )
                const result = await response.json()
                // console.log(result )

                if (isMounted){
                setData(result)
                setError(null)
                }
            } catch (err){
                if (isMounted && err instanceof Error){
                setError(err.message)
                }
            } finally{
                if (isMounted){
                setLoading(false)
                }
            }       
            }

            fetchData()

        return () =>{ isMounted = false}
    },[url])

    return { data , loading ,error}
}
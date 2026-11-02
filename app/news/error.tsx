"use client"
import ErrorUi from "@/components/ErrorUi/ErrorUi"
export default function Error({error, retry}: {
    error: unknown
    retry: () => void
}){
    return (
        <ErrorUi 
        title="OOPS! THE NEWS DID NOT LOAD"
          retry={retry}/>
    )
}
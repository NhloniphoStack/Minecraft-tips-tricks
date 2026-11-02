"use client"
import ErrorUi from "@/components/ErrorUi/ErrorUi"
export default function Error({error, retry}: {
    error: unknown
    retry: () => void
}){
    return (
        <ErrorUi 
        title="OOPS! FORM DID NOT LOAD"
          retry={retry}/>
    )
}
import { useEffect, useRef } from "react";


export function useClickOutside(callback : (event: MouseEvent) => void){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent){
            if(
                ref.current && 
                !ref.current.contains(e.target as HTMLElement)
            ){
                callback(e)
            }
        }
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [callback])
    
    return ref
}
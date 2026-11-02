"use client"
import Form from 'next/form'
import styles from './searchForm.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
export default function SearchForm({search}: {search?: string}){
    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const searchParams = useSearchParams()
    const urlSearchParams = new URLSearchParams(searchParams.toString())
    function handleSubmit(formData: FormData){
        const search = formData.get("search")?.toString().trim() || ""
        urlSearchParams.set("search", encodeURIComponent(search))
        router.push(`${pathname}?${urlSearchParams.toString()}`)
    }
    return (
        <Form action={handleSubmit}>
         <div className={styles.search_container}>
            <input
            autoComplete='off'
            defaultValue={search || ""}
            className={styles['form-input']} 
             placeholder='Search tips'
             name="search"
             
            />
         </div>
        </Form>
    )
}
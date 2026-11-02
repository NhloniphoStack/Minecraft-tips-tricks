"use client"
import Form from "next/form"
import styles from './tipForm.module.css'
import SubmissionResult from "../SubmissionResult/SubmissionResult"
import CategorySelect from "../CategorySelect/CategorySelect"
import { useState, useTransition } from "react"
import FailedSubmission from "../FailedSubmission/FailedSubmission"
import { ClipLoader } from "react-spinners"


export default function TipForm(){
      const [selected, setSelected] = useState("")
      const [isError, setIsError] = useState(false)
      const [isResults, setIsResults] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
      const [loading, setLoading] = useState(false)
      const [isPending, setTransition] = useTransition()
      console.log(isLoading)
     
   async function handleSubmit(formData: FormData){
       setIsError(false)
        const title = formData.get("title")?.toString()
        const sender = formData.get("sender")?.toString()
        const advice = formData.get("advice")?.toString()
        const category = formData.get("category")?.toString()
        const steps = formData.getAll("steps")
        
      
     setTransition(async() => {

       try{
         
         
        const res = await fetch(`/api/tips`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title, sender, advice, category, steps
          })
        })

        if(!res.ok){
          throw new Error(`Failed to submit`)
        }

        const data = await res.json()

      setIsResults(true)

        

      }catch(error){
           setIsError(true)
           
          console.log(error)
      }

     })
     

    }

   

  
    return (
        <Form action={handleSubmit}>
           {!isResults && <div className={styles["tip-form"]}>
              <label>TIP TITLE</label>
              <input 
               name="title"
               placeholder="e.g Sleep at night" required/>

              <CategorySelect select={(id) => setSelected(id)}/>
               
              <label>GAMER TAG</label>
              <input
               name="sender"
               placeholder="e.g DREAM" required/>

              <label>YOUR TIP</label>
              <textarea
              name="advice"
               placeholder="Explain it in a few short sentences" required/>
              
              <div className={styles['steps-container']}>
                <label>
                  STEPS
                </label>
                <input name="steps" placeholder="eg Gather 3 wool and planks " required/>
                <input name="steps" placeholder="eg Place the bed somewhere safe and dry " required/>
                <input name="steps" placeholder="eg Right click the bed at nights " required/>
              </div>

              <div>

              </div>
             {isError && <FailedSubmission />}
              <div className={styles['button-container']}>
                
                    <button disabled={isPending} className={styles['submit-button']}>
                      
                        {isPending ? <div className={styles['load']}><ClipLoader color="white" size={14} />SUBMITTING</div> : 'SUBMIT TIP'}
                    </button>
                    <button type="button" className={styles['cancel-button']}>
                    CANCEL
                    </button>
              </div>
             
            </div>}

        { isResults && !isError && <SubmissionResult />}
        </Form>
    )
}


 export function cleanDate(date: string | null):string{
       if(!date){
        return `Provide a date`
       }
        const clean = new Date(date)
        const cleaned = clean.toLocaleDateString('en-US', {month: "short", day: "2-digit", year: "numeric"})

        return cleaned
    }
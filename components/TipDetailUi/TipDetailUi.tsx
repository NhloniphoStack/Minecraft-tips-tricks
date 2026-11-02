import styles from './tipsGrid.module.css'
import type { Tip } from '@/types/tips'
import type { Step } from '@/types/tips'
export default function TipDetailUi({tip}: {
    tip: {
        tip: Tip[],
        steps: Step[]
    }
}){
    return (
           <div>
            {tip.steps && <p id={styles.steps_heading}>STEPS</p>}
            <ul className={styles['tips-list']}>
                {tip.steps.map((step, i) =>
                     <li key={i}>
                        
                        <div>
                            <span className={styles.box}>{i + 1}</span>
                            <span>{step.step}</span>
                        </div>
                     </li>)}
            </ul>
        </div>
    )
}
import styles from './TextImput.module.css'

export default function TextInput(props){
    return (
        <div>
            <textarea className={styles['input']} {...props}/>
        </div>
    )
}
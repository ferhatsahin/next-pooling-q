import styles from './preview.module.scss'

export default function PreviewChoiceList({ choiceList, removeChoice}){

  if(!choiceList.length) return <EmptyChoiceList/>;

  const choices = choiceList.map(({choice, id},index) => {
    return (
      <div className={styles.choice} key={id}>
        <span>{choice}</span>
        <button onClick={() => removeChoice(index)}>Delete</button>
      </div>
    )
  })

  return (  
      <div className={styles.preview}>
        {choices}
      </div>
  )
}

function EmptyChoiceList(){
  return(
    <div className={styles.noChoices}>
      <p>There are no choices</p>
    </div>
  )
}
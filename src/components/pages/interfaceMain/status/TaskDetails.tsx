export default function TaskDetails({task} : any) {
  return (
    <div className="task-details">
              <p>Description complète : {task.description}</p>
              <div className="actions">
                <button
                  onClick={() => {
                    /* Fonction Modifier */
                  }}
                >
                  Modifier
                </button>
                <button
                  onClick={() => {
                    /* Fonction Supprimer */
                  }}
                >
                  Supprimer
                </button>
                <button
                  onClick={() => {
                    /* Fonction Déplacer */
                  }}
                >
                  Déplacer
                </button>
              </div>
            </div>
  )
}

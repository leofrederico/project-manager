import ProjectForm from '../../project/ProjectForm';
import styles from './NewProject.module.css'

function NewProject(){

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie o seu Projeto para depois adicionar os serviços necessários.</p>

            <ProjectForm btnText="Criar Projecto"/>
        </div>
    )
}


export default NewProject;
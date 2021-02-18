import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import styles from '../downButton/styles.module.css';

export default function DownButton(){
    return(
        <div className={styles.icon}>
          <button><KeyboardArrowDown style={{ fontSize: 40 }}/></button>
        </div>
    )
}
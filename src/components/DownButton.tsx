import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import styles from '../../styles/components/DownButton.module.css';

export default function DownButton(){
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      behavior: 'smooth',
    });
  }

    return(
        <div className={styles.icon}>
            <button type="button" onClick={handleScroll}>
              <KeyboardArrowDown style={{ fontSize: 40, color: "white" }}/>
            </button>
        </div>
    )
}
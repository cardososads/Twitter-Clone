import { useIndex } from "../../data/hooks/pages/useIndex.page"
import Tweet from "../components/data-display/Tweet/Tweet";
import TextInput from "../components/inputs/TextInput/TextInput"
import styles from '../pages/Index.module.css'

const tweet = {
    date: 'há 5 dias',
    text: 'Meu primeiro tweet',
    user: {
        name: 'Wesley Cardoso',
        username: 'cardososads',
        picture: 'https://github.com/cardososads.png'
    }
}

export default function Index(){
    const {user} = useIndex();
    return (
      <div>
        <h1 className={styles["page-title"]}>Tweet Clone</h1>
        <div className={styles["tweet-container"]}>
          <img
            src={user.picture}
            alt={user.name}
            className={styles["avatar"]}
          />
          <TextInput />
        </div>
        <div className={styles["button-container"]}>
          <div>0 / 50</div>
          <button className={styles["post-button"]}>Tweetar</button>
        </div>
        <ul className={styles["tweet-list"]}>
          <li className={styles["tweet-list-item"]}>
            <Tweet tweet={tweet} />
          </li>
          <li className={styles["tweet-list-item"]}>
            <Tweet tweet={tweet} />
          </li>
          <li className={styles["tweet-list-item"]}>
            <Tweet tweet={tweet} />
          </li>
        </ul>
      </div>
    );
}
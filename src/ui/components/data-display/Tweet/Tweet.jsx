import styles from "./Tweet.module.css";

export default function Tweet({tweet}) {
    const {user} = tweet
  return (
    <div className={styles["tweet-container"]}>
      <img
        src={user.picture}
        alt={user.name}
        className={styles["avatar"]}
      />
      <div lassName={styles["user"]}>
        <span className={styles["user-name"]}>{user.name}</span>
        <span className={styles["user-username"]}> @{user.username}</span>
        <span className={styles["date"]}> - {tweet.date} </span>
      </div>
      <div lassName={styles["tweet-text"]}>
        {tweet.text}
      </div>
    </div>
  );
}

import styles from "@/app/ui/login/login.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
       <img
          src="/PPG-1_768.png"
          alt=""
          width={250}
          height={280}
        />
      <form action="" className={styles.form}>
        <h2>Login</h2>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage

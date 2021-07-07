import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthContext from '../context/AuthContext';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { user } = useContext(AuthContext)
  const router = useRouter();
  const isHome = router.pathname === '/';

  const goBack = (event) => {
    event.preventDefault();
    router.back();
  }
  return (
    <header className={styles.nav}>
      {!isHome && 
        <div className={styles.back}>
          <a onClick={goBack}>{"<"} Back</a>
        </div>
      }
      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>
            The E-Commerce
            </h1>
          </a>
        </Link>
      </div>
      <div className={styles.auth}>
        {
          user ? (
            <Link href="/account">
              <a>{user.email}</a>
            </Link>
          ) : (
            <Link href="/login">
              <a>Log in</a>
            </Link>
          )
        }
      </div>
    </header>
  )
}

export default Header;

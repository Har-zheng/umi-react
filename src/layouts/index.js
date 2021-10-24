import styles from './index.css';
import { ErrorBoundary, MenuBar } from '@/components'
import { useLocation } from 'umi'

function BasicLayout(props) {
  console.log(useLocation);
  const location = useLocation();
  const paths = ['/', '/order', '/user']


  return (
    <div className={styles.normal}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
      {/* {props.children} */}
    </div>
  );
}

export default BasicLayout;

import styles from './index.css';
import { ErrorBoundary, MenuBar } from '@/components'
import { useLocation } from 'umi'
import { StoreProvider  } from 'think-react-store'
import * as store from '../stores'

function BasicLayout(props) {
  console.log(useLocation);
  const location = useLocation();
  const paths = ['/', '/order', '/user']


  return (
    <StoreProvider className={styles.normal} store={ store }>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {/* <h1 className={styles.title}>Yay! Welcome to umi!</h1> */}
      <ErrorBoundary>
        {props.children}
      </ErrorBoundary>
      {/* {props.children} */}
    </StoreProvider>
  );
}

export default BasicLayout;

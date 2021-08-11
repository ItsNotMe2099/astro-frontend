import Header from 'components/layout/Header'
import Layout from 'components/layout/Layout'
import Main from 'components/Main'
import styles from './index.module.scss'

export default function Home(props) {
  return (
    <Layout>
      <Header/>
      <div className={styles.root}>
        <Main/>
      </div>
    </Layout>
  )
}


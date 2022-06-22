import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

const prefixCls = 'layout'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles[prefixCls]}>
      {children}
    </div>
  )
}


export default Layout

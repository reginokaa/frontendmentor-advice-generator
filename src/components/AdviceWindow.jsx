import React, { useState } from 'react'
import { Body } from './Body'
import { Button } from './Button'
import { Header } from './Header'
import {ReactComponent as DividerDesktop} from '../assets/pattern-divider-desktop.svg'
import {ReactComponent as DividerMobile} from '../assets/pattern-divider-mobile.svg'
import styles from './AdviceWindow.module.css'
import { DisappearedLoading } from 'react-loadingg'

export const AdviceWindow = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)

  const handleclick = async () => {
    setLoading(true)

    /* alternativa para fazer o fetch */
    // const fetchData = await fetch('https://api.adviceslip.com/advice')
    // const dataResult = await fetchData.json()

    // setData(dataResult.slip)

    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {
         setData(data.slip)
         setLoading(false)

      })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.container}>
      {!data && !loading &&
        <p className={styles.greeting}>
          press the button <br /> and get your advice <br /> for <span>free</span>
        </p>
      }
      {loading  && <DisappearedLoading />}
      {!loading && data &&
        <div>
          <Header id={data.id} />
          <Body advice={data.advice} />
        </div>
      }

      <div className={styles.divider}>
          <DividerDesktop className={styles.dividerDesktop} />
          <DividerMobile  className={styles.dividerMobile} />
      </div>
      <Button onClick={handleclick} />
    </div>
  )
}

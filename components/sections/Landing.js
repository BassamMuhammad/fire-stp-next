import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Landing.module.css'
import { YoutubeVideo } from '../utils/YoutubeVideo'

export const Landing = () => {
  return (
    <>
      <div style={{backgroundColor:'#fff'}}>
        <div className={styles.centered}>
          <div className={styles.text}>
            <h1 className={styles.h1}>Hey you! Learn digital marketing today!</h1>
            <h2 className={styles.h2}>And have a wonderful life</h2>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <YoutubeVideo src="https://www.youtube.com/embed/1gyTUHP6ne8" title="Promo video"/>
        </div>
        <div className={styles.centered}>
          <Image src="/images/devices.png" width={860} height={440}></Image>
        </div>
        <div className={styles.centered}>
          <a href='#buy' style={{textDecoration:'none', color:'inherit'}}>
            <button className='btn btn-lg btn-block btn-sbuy'>
              Go to payment
            </button>
          </a>
        </div>
      </div>

      <div>
        <div className={styles.centered}>
          <div className={styles.text}>
            <p className={styles.superP}>
              STUNNINGLESS FOR STUNNING
            </p>
            <p className={styles.pageP}>
              lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit
            </p>
            <p className={styles.superUnderlined}>
              -- SELL ONLINE COURSES --
            </p>
          </div>
        </div>

        <div className="two-columns">
          <div className={styles.centered}>
            <div style={{justifySelf:'center'}}>
              <Image src="/images/hero.jpg" width={440} height={440}></Image>
            </div>
          </div>
          <div className={styles.centered}>
            <div style={{justifySelf:'center'}}>
              <p className={styles.pageP}>
                lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.iconsBoxContainer}>
        <div className={styles.centered}>
          <h2 className={styles.text} style={{color:'aqua'}}>Stunning title</h2>
          <p className={styles.iconP}>
            lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit
          </p>
        </div>

        <div className={styles.iconsBox}>
          <div>
            <h2 className={styles.text} style={{color:'aqua'}}>And how will we do it?</h2>
            <hr className={styles.hrOne} />
          </div>
          <div className={styles.iconsBoxGrid}>
            <div className={styles.iconedboxXL}>
              <ion-icon name="funnel"></ion-icon>
            </div>
            <div>
            <p className={styles.iconP}>
              lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm
              lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm
            </p>
            </div>
            <div className={styles.iconedboxXL}>
              <ion-icon name="id-card"></ion-icon>
            </div>
            <div>
              <p className={styles.iconP}>
                lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm
                lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm
              </p>
            </div>
            <div className={styles.iconedboxXL}>
              <ion-icon name="card"></ion-icon>
            </div>
            <div>
              <p className={styles.iconP}>
                lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm
                lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm dolor et sit lorem ipusm
              </p>
            </div>
          </div>
        </div>
          <div className={styles.centered}>
          <h4 className={styles.text} style={{color:'aqua'}}>
            AND THIS IS THE REAL SECRET WHY TODAY IN OUR SUPRIVE DIGITAL MARKETING AGENCY WE ARE BILLING MORE THAN 7 ANNUAL FIGURES MANAGING AND CREATING INFOPRODUCTS
          </h4>
        </div>
      </div>

      <div id="buy">
        <div className="two-columns">
          <div className={styles.centered}>
            <div style={{justifySelf:'center'}}>
              <Image src="/images/devices.png" width={440} height={440}></Image>
            </div>
          </div>
          <div className={styles.centered}>
            <div>
              <p className={styles.offerPone}>DEAL OF THE DAY</p>
              <p className={styles.offerPtwo}>INFOPRODUCT MASTER COURSE</p>
              <div className={styles.priceGrid}>
                <span className={styles.priceOne} style={{justifySelf:'end', paddingBottom:'10px'}}>
                  <del>$497</del>
                </span>
                <span className={styles.priceTwo} style={{justifySelf:'center', paddingBottom:'10px'}}>$97</span>
                <span className={styles.discount} style={{justifySelf:'start', paddingBottom:'10px'}}>Save: $400 (80%)</span>
              </div>
              <Link href="/payment">
                <a style={{textDecoration:'none', color:'inherit'}}>
                  <button className='btn btn-lg btn-block btn-sbuy'>
                    Go to payment
                  </button>
                </a>
              </Link>
              <p style={{paddingTop:'10px', fontSize:'15px'}}>
                lorem, lorem and more lorem lorem, lorem and more lorem lorem, lorem and more lorem lorem, lorem and more lorem lorem, lorem and more lorem lorem, lorem and more lorem lorem, lorem and more lorem
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <p>&copy; 2022. Elías Cardona</p>
      </div>
    </>
  )
}
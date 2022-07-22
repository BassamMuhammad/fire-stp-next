import React, { useEffect, useState } from "react";
import { Header } from "../../components/utils/Header";
import { VideoList } from "../../components/utils/VideoList";
import styles from "../../styles/id.module.css";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import nookies from 'nookies';
import adminFirebase from '../../firebase/firebaseAdmin';

export default function Details({ userEmail }) {
  const db = adminFirebase.firestore();
  const router = useRouter();
  const [videoId, setVideoId] = useState("");
  const { id } = router.query;
  useEffect(() => {
    const getVideo = async () => {
      const coll = await db.doc(`videos/${id}`).get();
      setVideoId(coll.get("id"));
    };
    getVideo();
  }, [id]);

  const opts = {
    playerVars: {
      frameborder:0
    }
  }

  const onVideoEnd = async () => {
    await db.collection("users").doc(userEmail).collection("videos").doc(videoId).set({
      viewed: "true"
    })
  }

  return (
    <>
      <Header login="false" />
      <div className={styles.grid}>
        <div className={styles.i1}>
          <div className={styles.videoWrapper}>
            <YouTube videoId={id} opts={opts} onEnd={onVideoEnd} />
          </div>
          <div className={styles.line}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              hic officia repellat, animi voluptatum maiores dolorum expedita
              beatae architecto fugit debitis reiciendis vel fuga commodi cumque
              ipsam est nulla nesciunt, culpa adipisci fugiat perspiciatis.
              Pariatur, provident voluptates! Sunt doloremque ea saepe, expedita
              odio libero modi maxime dignissimos necessitatibus laudantium
              mollitia!
            </p>
          </div>
        </div>
        <VideoList />
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  try {
    const cookies = nookies.get(ctx)
    const token = await adminFirebase.auth().verifyIdToken(cookies.token)
    const { email } = token
    return {
      props: { userEmail: `${email}` }
    }
  } catch (err) {
    return {
      props: {}
    }
  }
}
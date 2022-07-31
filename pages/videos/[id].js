import React, { useEffect, useState } from "react";
import { Header } from "../../components/utils/Header";
import VideoList from "../../components/utils/VideoList";
import styles from "../../styles/id.module.css";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { auth, firestore } from "../../firebase/base";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function Details() {
  const router = useRouter();
  const [videoId, setVideoId] = useState("");
  const { id } = router.query;
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const checkUserEmail = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserEmail(user.email);
        }
      });
    };
    checkUserEmail();
  });

  useEffect(() => {
    const getVideo = async () => {
      const coll = await getDoc(doc(firestore, `videos/${id}`));
      setVideoId(id);
    };
    getVideo();
  }, [id]);

  const opts = {
    playerVars: {
      frameborder: 0,
    },
  };

  const onVideoEnd = async () => {
    await updateDoc(doc(firestore, `users/${userEmail}`), {
      viewed: arrayUnion(videoId),
    });
  };

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
  );
}

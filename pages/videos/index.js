import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/PremiumView.module.css";
import { Header } from "../../components/utils/Header";
import { InfoModal } from "../../components/utils/InfoModal";
import { Login } from "../../components/vitals/Login";
import { firestore, auth } from "../../firebase/base";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";

const videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      const coll = await getDocs(collection(firestore, "videos"));
      const collDocs = coll.docs;
      const data = [];
      collDocs.forEach(async (doc) => {
        data.push(doc.data());
      });
      setVideos(data);
    };
    getVideos();
  }, []);

  const logOut = async () => {
    await signOut();
    window.location.reload();
  };

  return (
    <>
      <Header login="true" />
      <InfoModal modalId="login-form" modalTitle="Access to the course">
        <Login />
      </InfoModal>
      <div className={styles.grid}>
        <div className={styles.i1}>
          <div className={styles.img}>
            <div className={styles.imgDiv}>
              <Image width={576} height={250} src="/images/poster.jpg"></Image>
            </div>
          </div>
          <h2 className="pl-3 pt-4">Course title</h2>
          <h3 className="pl-3 pb-2">Course little description</h3>
          <p className="pl-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            hic officia repellat, animi voluptatum maiores dolorum expedita
            beatae architecto fugit debitis reiciendis vel fuga commodi cumque
            ipsam est nulla nesciunt, culpa adipisci fugiat perspiciatis.
            Pariatur, provident voluptates! Sunt doloremque ea saepe, expedita
            odio libero modi maxime dignissimos necessitatibus laudantium
            mollitia!
          </p>
          <button
            type="button"
            className="btn btn-dark ml-3 mb-3"
            onClick={logOut}
          >
            Log out
          </button>
        </div>
        <div className={styles.i2}>
          <h2 className="pl-3 pb-1 pt-3">Time to study!</h2>
          <h3 className="pl-3">Some motivation phrase</h3>
          <div className="divider"></div>
          {videos.map((video) => (
            <Link href={`/videos/${video.id}`} key={video.id}>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <span className={styles.lines}>Lesson {video.title}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default videos;

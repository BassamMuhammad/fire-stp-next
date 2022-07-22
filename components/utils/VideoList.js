import React, { useEffect, useState } from "react";
import styles from "../../styles/VideoList.module.css";
import Link from "next/link";
import nookies from 'nookies';
import adminFirebase from '../../firebase/firebaseAdmin';

export default function VideoList({ userEmail }) {
  const db = adminFirebase.firestore();
  const [videos, setVideos] = useState([]);
  const [views, setViews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const coll = await db.collection("videos").get();
      const collDocs = coll.docs;
      const data = [];
      collDocs.forEach(async (doc) => {
        data.push(await doc.data());
      });
      setVideos(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const coll = await db.collection("users").doc(userEmail).collection("videos").where("viewed", "==", "true")
      const collDocs = coll.docs;
      const data = [];
      collDocs.forEach(async (doc) => {
        data.push(await doc.data());
      });
      setViews(data);
    };
    fetchData();
  }, []);

  let totalVideos = videos.length;
  let totalViews = views.length;
  let prog = (totalViews * 100) / totalVideos;

  return (
    <div className={styles.i2}>
      <div className={styles.specialLine}>
        <div className="grid">
          <h5>PROGRESO DEL CURSO</h5>
          <p> {prog}% </p>
          <progress
            className={styles.progressBar}
            style={{ width: `${prog}` }}
            max="100"
            value={`${prog}`}
          ></progress>
        </div>
      </div>
      {videos.map((video) => {
        return (
          <Link href={`/videos/${video.id}`} key={`${video.id}`}>
            <a style={{ color: "inherit", textDecoration: "none" }}>
              <div className={styles.lines}>
                Lesson {video.id}
              </div>
            </a>
          </Link>
        );
      })}
    </div>
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
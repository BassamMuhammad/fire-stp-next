import React, { useEffect, useState } from "react";
import styles from "../../styles/VideoList.module.css";
import firebase from "../../firebase/base";
import Link from "next/link";
// import { userEmail } from "../../firebase/user";
const auth = firebase.auth();
const db = firebase.firestore();

export const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [views, setViews] = useState([]);
  const currentEmail = auth.currentUser.email;

  useEffect(() => {
    const fetchData = async () => {
      const coll = await db.collection("videos").get();
      setVideos(
        coll.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const coll = await db.collection("users").doc("eliascardonarod@gmail.com").collection("videos").where("viewed", "==", "true")
      setViews(
        coll.docs.map(doc => {
          return doc.data();
        })
      );
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
  );
};
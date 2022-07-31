import React, { useEffect, useState } from "react";
import styles from "../../styles/VideoList.module.css";
import Link from "next/link";
import { firestore, auth } from "../../firebase/base";
import {
  collection,
  getDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function VideoList() {
  const [videos, setVideos] = useState([]);
  const [views, setViews] = useState([]);
  const [prog, setProg] = useState(0);
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
    const fetchData = async () => {
      const coll = await getDocs(collection(firestore, "videos"));
      const collDocs = coll.docs;
      const data = [];
      collDocs.forEach(async (doc) => {
        data.push(doc.data());
      });
      setVideos(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      onSnapshot(doc(firestore, `users/${userEmail}`), (coll) => {
        const viewed = coll.get("viewed");
        setViews(viewed);
      });
    };
    if (userEmail) fetchData();
  }, [userEmail]);

  useEffect(() => {
    setProg((views.length * 100) / videos.length);
  }, [videos, views]);

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
              <div className={styles.lines}>Lesson {video.id}</div>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

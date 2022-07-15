import React, { useState, useEffect } from "react";
import Img from "../img/gordosha.png";
import Camera from "../components/svg/Camera";
import { storage, db, auth } from "../firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
    if (img) {
      const uploadImage = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
        //   if (user.avatarPath) {
        //     await deleteObject(ref(storage, user.avatarPath));
        //   }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImage();
    }
  }, [img]);

//   const deleteImage = async () => {
//     try {
//       const confirm = window.confirm("Delete Avatar ?");
//       if (confirm) {
//         await deleteObject(ref(storage, user.avatarPath));

//         await updateDoc(doc(db, "users", auth.currentUser.uid),  {
//             avatar: "",
//             avatarPath: "",
//           })
//       }
//     } catch (err) {
//       console.log(err.message);
//     }
//   };
  return user ? (
    <div>
      <section>
        <div className="profile__container">
          <div className="img__container">
            <img src={user.avatar || Img} alt="avatar" />
            <div className="overlay">
              <div>
                <label htmlFor="photo">
                  <Camera />
                </label>
                
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="photo"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="text__container">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <hr />
            <small>Joined on: {user.createdAt.toDate().toDateString()}</small>
          </div>
        </div>
      </section>
    </div>
  ) : null;
};

export default Profile;

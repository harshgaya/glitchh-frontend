import React, { useState } from 'react';
import classes from './CreatePostUploadDialog.module.css';
import uploadImage from '../../Assets/popup_box/uploadImage.png';
import { VscAdd } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

function CreatePostUploadDialog() {

    const [totalCharacters, setTotalCharacters] = useState(0);
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);



    const onChangeHandler = (event) => {
        console.log(event.target.value);
        setTotalCharacters(event.target.value.length);

    }

    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const removeImageHandler = () => {
        console.log('remove image');
        setPicture(null);
        setImgData(null);
    }
    return (
        <div className={classes.CreatePostUploadDialog}>

            <div className={classes.createPostContents}>

                <div className={classes.createPostText}>
                    <p>Create Post</p>
                    <button>Post</button>
                </div>

                <div className={classes.boxes}>
                    <div className={classes.box1}>
                        <textarea placeholder='Write something about this..' maxLength={300} onChange={onChangeHandler}>
                        </textarea>

                        <div className={classes.totalCharacter}>{`${totalCharacters}/300`}</div>



                    </div>

                    <div className={classes.line}></div>
                    {!imgData && <div className={classes.box2}>

                        <img src={uploadImage} alt="upload-image" />
                        <p>Select images or videos to upload</p>
                        <label htmlFor="file">Upload</label>
                        <input type="file" className={classes.file} id='file' onChange={onChangePicture} accept="image/png, image/jpeg, image/jpg, image/webp" />


                    </div>}
                    {imgData &&
                        <div className={classes.selectedImages}>

                            <div className={classes.dottedBorderAddButton}>
                                <VscAdd className={classes.plusButton} />
                            </div>


                            <div className={classes.image}>
                                <img src={imgData} alt="image" />
                                <VscClose className={classes.closeBtn} onClick={removeImageHandler} />

                            </div>


                        </div>}








                </div>



            </div>


        </div >
    )
}

export default CreatePostUploadDialog
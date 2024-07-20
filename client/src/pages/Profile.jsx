import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase'

function Profile() {
  const fileRef=useRef(null)
  const {currentUser}=useSelector((state)=>state.user)
  const [file,setFile]=useState(undefined)
  console.log(file)
  const [filePerc,setFilePerc]=useState(0)

  console.log(filePerc)
  //firebase Storage
  // allow read;
  // allow write:if
  // request.resource.size<2*1024*1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  },[file])

  const handleFileUpload=(file)=>{
    const storage=getStorage(app)
    const fileName=new Date().getTime()+file.name;
    const storageRef=ref(storage,fileName)
    const uploadtask=uploadBytesResumable(storageRef,file)
    uploadtask.on('state_changed',snapshot=>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      setFilePerc(Math.round(progress))
      },error=>{
        console.log(error)
        },()=>{
          console.log('upload complete')
          getDownloadURL(uploadtask.snapshot.ref).then(url=>{
            console.log(url)
            })
            })
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" ref={fileRef} hidden accept='image/*'/>
        <img onClick={()=>fileRef.current.click()} src={currentUser.avatar} alt="" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center'/>
        <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='email'  id='email'className='border p-3 rounded-lg' />
        <input type="password" placeholder='password' id='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>Update</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-600 cursor-pointer'>Delete Account</span>
        <span className='text-red-600 cursor-pointer'>SignOut</span>
      </div>
    </div>
  )
}

export default Profile
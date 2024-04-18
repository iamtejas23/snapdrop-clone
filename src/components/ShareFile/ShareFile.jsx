// ShareFile.jsx
import React, { useState } from 'react';
import { storage } from '../../Firebase'; // Update the import statement

const ShareFile = () => {
  const [fileUrl, setFileUrl] = useState('');

  const handleShare = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child('example-file.txt');
    fileRef.getDownloadURL().then((url) => {
      setFileUrl(url);
      // Implement sharing logic here (e.g., generating a shareable link)
    }).catch((error) => {
      console.error('Error getting download URL:', error);
    });
  };

  return (
    <div>
      <button onClick={handleShare}>Share File</button>
      {fileUrl && <p>Shareable Link: {fileUrl}</p>}
    </div>
  );
};

export default ShareFile;

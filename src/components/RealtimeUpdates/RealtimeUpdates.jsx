// RealtimeUpdates.js
import React, { useState, useEffect } from 'react';
import { firestore } from '../../Firebase';

const RealtimeUpdates = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const filesRef = firestore.collection('files');
    filesRef.onSnapshot((snapshot) => {
      const updatedFiles = [];
      snapshot.forEach((doc) => {
        updatedFiles.push({ id: doc.id, ...doc.data() });
      });
      setFiles(updatedFiles);
    });
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RealtimeUpdates;

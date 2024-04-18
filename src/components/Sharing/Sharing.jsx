import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import './Sharing.css'; // Import your CSS file
import { IoIosShare } from 'react-icons/io';
import { IoMdWifi } from 'react-icons/io';

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [downloadLink, setDownloadLink] = useState(null);

  const handleFileChange = event => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('https://file.io', formData);
      setDownloadLink(response.data.link);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">P2P File Transfer</h1>
      {!downloadLink && (
        <div className="upload-container">
         
          <div className="icon-container">
          <IoIosShare size={64} />
          </div>
          <label htmlFor="file-upload" className="upload-label">
            <span className="upload-icon">+</span> Choose File
          </label>
          <input type="file" id="file-upload" onChange={handleFileChange} className="file-input" />
          {fileName && <p className="file-name">{fileName}</p>}
          <button onClick={handleFileUpload} className="upload-button"> Upload</button>

          {/* <div className="inteructions">
              <h2>Instructions:</h2>
              <p>1. Choose a file to upload.</p>
              <p>2. Click on the upload button.</p>
              <p>3. Share the download link or QR code with your friends.</p>    
          </div> */}

          <div className="disicon">
          <IoMdWifi size={64} color='#4285F4'/>
          <p>
            Share the download link or QR code with your friends.
          </p>
          </div>
          
        </div>
      )}
      {downloadLink && (
        <div className="download-section">
          <div className="downico">
          <IoMdWifi size={128} color='#4285F4' />
          </div>
          <p className="success-message">File uploaded successfully!</p>
          <p className="download-link">
            Download Link And Share: <a href={downloadLink} target="_blank" rel="noopener noreferrer">{downloadLink}</a>
          </p>
          <div className="qr-code">
            <p>Scan QR Code to download:</p>
            <QRCode value={downloadLink} />
          </div>
        </div>
      )}
    </div>
    
  );
}

export default App;

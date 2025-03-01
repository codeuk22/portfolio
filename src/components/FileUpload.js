import React, { useState, useEffect } from 'react';
import api from '../config/api';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    fetchUserFiles();
  }, []);

  const fetchUserFiles = async () => {
    try {
      const response = await api.get('/storage/user-files');
      setUserFiles(response.data.data.files);
    } catch (error) {
      console.error('Error fetching user files:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await api.post('/storage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      fetchUserFiles(); // Refresh the list of user files
    } catch (error) {
      console.error('Error uploading file:', error);
      console.error('Error response:', error.response);
      alert(`Error uploading file: ${error.message}`);
    }
  };

  const renderFileLink = (file) => {
    if (file.fileType.startsWith('image/')) {
      return <img src={file.fileUrl} alt={file.fileName} style={{maxWidth: '200px', maxHeight: '200px'}} />;
    } else if (file.fileType === 'application/pdf') {
      return (
        <div>
          <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">{file.fileName}</a>
          <p>(PDF - Click to open)</p>
        </div>
      );
    } else {
      return <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">{file.fileName}</a>;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      <h2>Your Files:</h2>
      <ul>
        {userFiles.map((file) => (
          <li key={file._id}>
            {renderFileLink(file)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
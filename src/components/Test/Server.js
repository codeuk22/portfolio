import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';
import styled from 'styled-components';
import { FiUploadCloud } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import { Button, Col, Row } from 'react-bootstrap';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${({ theme }) => theme.bg};
  min-height: 100vh;
`;

const LeftPanel = styled.div`
  width: 48%;
  background-color: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 1rem;
  overflow-y: auto;
  max-height: 80vh;
`;

const RightPanel = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadArea = styled.div`
  border: 2px dashed ${({ theme }) => theme.text_primary};
  border-radius: 20px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.card};
  }
`;

const UploadIcon = styled(FiUploadCloud)`
  font-size: 3rem;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const FileInput = styled.input`
  display: none;
`;

const FileItem = styled.div`
  background-color: ${({ theme }) => theme.bg};
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const FileName = styled.span`
  color: ${({ theme }) => theme.text_primary};
`;

const PreviewArea = styled.div`
  width: 100%;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;

const StyledButton = styled(Button)`
  margin-bottom: 1rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalPreview = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const OpenButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 1rem;
`;

const Server = () => {
  const [file, setFile] = useState(null);
  const [userFiles, setUserFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
    
  useEffect(() => {
    checkToken();
    fetchUserFiles();
  }, []);

  const checkToken = async () => {

    try {
      const res = await api.post('/auth/check-token')
      if (res?.status === 0) {
        localStorage.removeItem('token');
        navigate('/');
      }
      return res?.data
    } catch (error) {
      console.log("Error in checkToken", error)
    }

  }

  const fetchUserFiles = async () => {
    try {
      const response = await api.get('/storage/user-files');
      setUserFiles(response?.data?.data?.files);
    } catch (error) {
      console.error('Error fetching user files:', error);
      toast.error('Failed to fetch user files');
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        navigate('/');
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    handleSubmit(selectedFile);
    previewFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    handleSubmit(droppedFile);
    previewFile(droppedFile);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const handleSubmit = async (selectedFile) => {
    if (!selectedFile) {
      toast.error('Please select a file');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const token = localStorage.getItem('token');
      await api.post('/storage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      });
      toast.success('File uploaded successfully');
      fetchUserFiles();
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Failed to upload file');
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        navigate('/');
      }
    } finally {
      setIsUploading(false);
    }
  };

  const openFileModal = (file) => {
    setSelectedFile(file);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedFile(null);
  };

  return (
    <Container>
      <LeftPanel>
        <h2 style={{ color: 'white' }}>Your Files:</h2>
        {userFiles.map((file) => (
          <FileItem key={file._id} onClick={() => openFileModal(file)}>
            <FileName>{file.fileName}</FileName>
          </FileItem>
        ))}
      </LeftPanel>
      <RightPanel>
        <UploadArea
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => document.getElementById('fileInput').click()}
        >
          {isUploading ? (
            <ClipLoader color="#36D7B7" loading={isUploading} size={50} />
          ) : (
            <>
              <UploadIcon />
              <UploadText>Drag & Drop or Click to Upload</UploadText>
            </>
          )}
        </UploadArea>
        <FileInput
          id="fileInput"
          type="file"
          onChange={handleFileChange}
        />
        <PreviewArea>
          <Row>
            <Col md={4}>
              <StyledButton>Connect SSH connection</StyledButton>
              <StyledButton>Send on Mail</StyledButton>
            </Col>
            <Col md={4}>
              <StyledButton>Start Socket Server</StyledButton>
              <StyledButton>Deploy on Server</StyledButton>
            </Col>
            <Col md={4}>
              <StyledButton>Transfer on Server</StyledButton>
              <StyledButton>Scan on Virus</StyledButton>
            </Col>
          </Row>
        </PreviewArea>
      </RightPanel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="File Preview Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '20px',
            maxWidth: '80%',
            maxHeight: '80%',
          },
        }}
      >
        {selectedFile && (
          <ModalContent>
            <OpenButton onClick={() => window.open(selectedFile.fileUrl, '_blank')}>
              Open in New Tab
            </OpenButton>
            <ModalPreview>
              {selectedFile.fileUrl.match(/\.(jpeg|jpg|gif|png)$/) ? (
                <PreviewImage src={selectedFile.fileUrl} alt={selectedFile.fileName} />
              ) : (
                <iframe src={selectedFile.fileUrl} title={selectedFile.fileName} width="100%" height="100%" />
              )}
            </ModalPreview>
          </ModalContent>
        )}
      </Modal>
      <ToastContainer position="bottom-right" />
    </Container>
  );
};

export default Server;
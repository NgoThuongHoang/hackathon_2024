import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DocumentStorage = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get('/api/documents');
        setDocuments(response.data);
      } catch (error) {
        console.error("Lỗi tải tài liệu", error);
      }
    };
    fetchDocuments();
  }, []);

  const handleFileUpload = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setDocuments([...documents, response.data]);  // Cập nhật danh sách tài liệu
      alert('Tải lên tài liệu thành công!');
    } catch (error) {
      console.error("Lỗi tải lên tài liệu", error);
      alert('Tải lên tài liệu thất bại!');
    }
  };

  return (
    <div>
      <h1>Lưu trữ tài liệu</h1>
      <input type="file" onChange={handleFileUpload} />
      <h2>Danh sách tài liệu:</h2>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>
            <a href={document.url} target="_blank" rel="noopener noreferrer">
              {document.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentStorage;

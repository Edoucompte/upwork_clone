import React, { useCallback, useState } from 'react';
    import { useDropzone } from 'react-dropzone';
    import { FaUpload, FaFileAlt, FaTimesCircle } from 'react-icons/fa'; // Exemple d'icônes, installez react-icons si besoin

export default function FileInput() {
      const [uploadedFiles, setUploadedFiles] = useState([]);
      const [errorMessage, setErrorMessage] = useState('');
    
      // Callback appelé lorsque des fichiers sont acceptés (drag/drop ou sélection)
      const onDrop = useCallback((acceptedFiles, fileRejections) => {
        setErrorMessage(''); // Clear any previous errors
    
        if (fileRejections.length > 0) {
          // Gérer les fichiers rejetés (taille, type, etc.)
          const rejectionMessages = fileRejections.map(rejection => {
            const file = rejection.file;
            const errors = rejection.errors.map(err => err.message).join(', ');
            return `${file.name}: ${errors}`;
          }).join('; ');
          setErrorMessage(`Certains fichiers n'ont pas pu être ajoutés : ${rejectionMessages}`);
        }
    
        // Ajouter les fichiers acceptés à l'état existant
        // Utilisez `Object.assign` pour ajouter une URL temporaire pour l'aperçu si c'est une image
        setUploadedFiles(prevFiles => [
          ...prevFiles,
          ...acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file) // Crée une URL pour l'aperçu (images)
          }))
        ]);
      }, []);
    
      // Configuration du hook useDropzone
      const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
        onDrop,
        multiple: true, // Autorise la sélection de plusieurs fichiers
        accept: { // Spécifie les types de fichiers acceptés
          'image/jpeg': ['.jpeg', '.jpg'],
          'image/png': ['.png'],
          'application/pdf': ['.pdf'],
          'application/msword': ['.doc'],
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
          'text/plain': ['.txt']
        },
        maxSize: 5 * 1024 * 1024, // Limite la taille des fichiers à 5 Mo (en octets)
        maxFiles: 5, // Limite le nombre de fichiers à 5
      });
    
      // Nettoyer les URLs d'aperçu lorsque les composants sont démontés
      React.useEffect(() => {
        return () => uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
      }, [uploadedFiles]);
    
      // Fonction pour supprimer un fichier de la liste
      const removeFile = (fileName) => {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
      };
    
      // Liste des fichiers à afficher
      const filesList = uploadedFiles.map(file => (
        <div key={file.name} style={styles.fileItem}>
          {file.type.startsWith('image/') && (
            <img src={file.preview} style={styles.thumbnail} alt={file.name} />
          )}
          {!file.type.startsWith('image/') && (
            <FaFileAlt size={24} color="#666" style={{ marginRight: 8 }} />
          )}
          <span>{file.name} - {(file.size / 1024 / 1024).toFixed(2)} MB</span>
          <button onClick={() => removeFile(file.name)} style={styles.removeButton}>
            <FaTimesCircle color="red" />
          </button>
        </div>
      ));
    
      return (
        <div style={styles.container}>
          <h2 style={styles.heading}>Importez ou Glissez-Déposez vos fichiers</h2>
    
          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
    
          {/* Zone de drag-and-drop */}
          <div
            {...getRootProps()} // Propagateur de props pour le conteneur principal
            style={{
              ...styles.dropzone,
              ...(isDragActive ? styles.dropzoneActive : {}) // Style si un fichier est glissé
            }}
          >
            <input {...getInputProps()} /> {/* L'input file HTML caché */}
    
            <FaUpload size={48} color="#007bff" style={{ marginBottom: '10px' }} />
            {isDragActive ? (
              <p>Déposez les fichiers ici...</p>
            ) : (
              <p>Glissez-déposez des fichiers ici, ou cliquez pour sélectionner des fichiers</p>
            )}
            <em style={styles.fileTypesText}>(.jpeg, .png, .pdf, .doc, .docx, .txt jusqu'à 5 Mo, max 5 fichiers)</em>
          </div>
    
          {/* Affichage des fichiers sélectionnés */}
          {uploadedFiles.length > 0 && (
            <div style={styles.fileListContainer}>
              <h3 style={styles.subHeading}>Fichiers sélectionnés ({uploadedFiles.length}) :</h3>
              {filesList}
            </div>
          )}
    
          {/* Bouton pour simuler l'upload (à implémenter) */}
          {uploadedFiles.length > 0 && (
            <button
              onClick={() => console.log("Prêt à uploader :", uploadedFiles)}
              style={styles.uploadButton}
            >
              Envoyer les fichiers
            </button>
          )}
        </div>
      );
    }
    
    // Styles simples pour l'exemple (vous utiliserez probablement Tailwind/DaisyUI)
    const styles = {
      container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      },
      heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '25px',
      },
      subHeading: {
        color: '#555',
        marginTop: '20px',
        marginBottom: '10px',
        fontSize: '1.1em',
      },
      errorMessage: {
        color: 'red',
        backgroundColor: '#ffe6e6',
        border: '1px solid red',
        padding: '10px',
        borderRadius: '4px',
        marginBottom: '15px',
      },
      dropzone: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#007bff',
        borderStyle: 'dashed',
        backgroundColor: '#f8f8f8',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out',
        cursor: 'pointer',
      },
      dropzoneActive: {
        borderColor: '#2196f3',
        backgroundColor: '#e3f2fd',
      },
      fileTypesText: {
        fontSize: '0.8em',
        color: '#999',
        marginTop: '5px',
      },
      fileListContainer: {
        marginTop: '20px',
        borderTop: '1px solid #eee',
        paddingTop: '15px',
      },
      fileItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        border: '1px solid #eee',
        borderRadius: '4px',
        marginBottom: '8px',
        backgroundColor: '#fafafa',
      },
      thumbnail: {
        width: '40px',
        height: '40px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginRight: '10px',
      },
      removeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginLeft: '10px',
        padding: '5px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      uploadButton: {
        display: 'block',
        width: '100%',
        padding: '12px 20px',
        marginTop: '25px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1.1em',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      },
}

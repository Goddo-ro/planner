import "./ImageChooser.scss";

const ImagesChooser = ({name, value, onChange, className}) => {
  const handleChange = (newValue) => {
    onChange({target: {name: name, value: newValue}});
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    handleChange([...value, ...files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleChange([...value, ...files]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`image-chooser ${className ? className : ''}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        id="file-input"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="file-input">
        Выберите фото или перетащите файлы
      </label>
    </div>
  );
}

export default ImagesChooser;

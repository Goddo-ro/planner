import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./NewEventImages.scss";

const NewEventImages = ({name, value, onChange, className}) => {
  return (
    <div className={`new-event__images ${className ? className : ''}`}>
      <div>
        {
          value?.map((file, index) =>
            <NewEventImage
              key={index}
              file={file}
              index={index}
              onRemove={() => onChange({target: {name: name, value: value?.filter(image => image !== file)}})}
            />)
        }
      </div>
    </div>
  )
}

const NewEventImage = ({file, onRemove}) => {
  const [showRemove, setShowRemove] = useState(false);

  return (
    <div className="new-event__image-container"
         onMouseEnter={() => setShowRemove(true)}
         onMouseLeave={() => setShowRemove(false)}
    >
      <img
        src={URL.createObjectURL(file)}
        alt={file.name}
        className={"new-event__image"}
      />
      {
        showRemove && <AiOutlineClose size={24} className="new-event__image-remove"
                                      fill="#FFF" color="#FFF" onClick={onRemove} />
      }
    </div>
  )
}

export default NewEventImages;

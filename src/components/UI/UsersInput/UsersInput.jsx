import { useEffect, useRef, useState } from "react";
import { useStore } from "effector-react";
import { AiOutlineClose } from "react-icons/ai";
import { $user, $token } from "../../../store/auth.js";
import { useFetching } from "../../../hooks/useFetching.js";
import { getAllUsers } from "../../../services/userService.js";
import { getValidUsers } from "../../../utils/validation.js";
import "./UsersInput.scss";

const UsersInput = ({
  name,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);
  const [users, setUsers] = useState([]);

  const inputRef = useRef(null);
  const creator = useStore($user);
  const token = useStore($token);

  const [fetchUsers] = useFetching(async (token) => {
    const response = await getAllUsers(token);
    setUsers(response.data);
  });

  useEffect(() => {
    if (isInputActive && !inputValue) {
      fetchUsers(token);
    }
  }, [isInputActive]);

  const handleFocusOut = () => {
    if (inputRef.current && !inputRef.current.value) {
      setIsInputActive(false);
    }
  }

  return (
    <div className={`input-wrapper ${className ? className : ''}`}>
      <div
        className={`input input-container ${isInputActive || value?.length ? 'active' : ''}`}
      >
        {
          value?.map(user => <ChosenUser key={user?.id} user={user}
                                         onRemove={() => {
                                           onChange({
                                             target: {
                                               name: name,
                                               value: value?.filter(chosenUser => chosenUser.id !== user.id)
                                             }
                                           });
                                           inputRef?.current?.focus();
                                         }} />)
        }
        <input
          name={name}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleFocusOut}
          onFocus={() => setIsInputActive(true)}
          ref={inputRef}
          placeholder={!inputValue && !value?.length && isInputActive ? "Начните вводить имя" : ""}
        />
      </div>
      {
        isInputActive &&
        <div className="users-popper">
          <div className="users-popper__users">
            {
              getValidUsers(inputValue, users, [creator, ...value])?.map(user => <User onMouseDown={(e) => {
                e.preventDefault();
                onChange({target: {name: name, value: [...value, user]}});
                inputRef.current.focus();
              }} key={user?.id} user={user}/>)
            }
          </div>
        </div>
      }

      <label htmlFor={name} className={`input-wrapper__placeholder ${(isInputActive || value?.length) && 'active'}`}
             onClick={() => {
               inputRef.current && inputRef.current.focus();
               setIsInputActive(true);
             }}
      >
        {placeholder}
      </label>
    </div>
  )
}

const ChosenUser = ({user, onRemove}) => {
  const [showRemove, setShowRemove] = useState(false);

  return (
    <div className="chosen-user"
         onMouseEnter={() => setShowRemove(true)}
         onMouseLeave={() => setShowRemove(false)}>
      <div className="user-icon-container"/>
      <p>{user.username}</p>
      {
        showRemove && <AiOutlineClose size={24} onClick={onRemove}
                                      className="chosen-user__remove"
                                      fill="#B3B3BC" color="#B3B3BC" />
      }
    </div>
  )
}

const User = ({ user, onMouseDown }) => {
  return (
    <div className="users-popper__user" onMouseDown={onMouseDown}>
      <div className="user-icon-container"/>
      <p>{user.username}</p>
    </div>
  )
}

export default UsersInput;

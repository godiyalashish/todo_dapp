import {useState} from "react";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import { androidBookmark } from "react-icons-kit/ionicons/androidBookmark";

const AddTodo = () => {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const handleDescription = (e) => {
           setDescription(e.target.value);
    }

    const handelName = (e) => {
        if(e.target.value !== ' ')
        setName(e.target.value);
    }

  return (
    <div className="bg-[#14161A] p-2 w-full flex mt-2 rounded-lg min-h-min pb-7">
      <div className="w- w-11/12 flex flex-col">
        <div className="text-[#808191] font-bold text-lg mb-1 flex gap-x-2">
          <div className="p-2 shadow-lg pt-1 bg-[#3772FF] flex items-center justify-center h-7 w-7 rounded-full text-white">
            <Icon icon={androidBookmark} className="font-bold" />
          </div>
          <p
            contentEditable="true"
            className="outline-none"
            onKeyDown={handelName} 
          >
          {name === '' ? 'Add todo' : name}
          </p>
        </div>
        <div
          className="text-[#808191] outline-none"
          contentEditable="true"
          onKeyDown= {handleDescription}
        >
            {description === '' ? <p>Add Todo description</p>: description}
        </div>
      </div>
      <div className="p-2 shadow-lg pt-1 bg-[#242731] flex items-center justify-center h-7 w-7 rounded-full">
        <Icon icon={plus} />
      </div>
    </div>
  );
};

export default AddTodo;

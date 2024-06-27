import { useEffect, useState } from "react";
import ToDo from "./components/Todo";
import { addToDo, getAllToDo, updateToDo, deleteToDo ,log} from "shared";
import { motion } from 'framer-motion';

const AnimatedSVG = () => {
  return (
    <svg width="959" height="389" viewBox="0 0 959 389" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2">
        <motion.path
          d="M135.312 130.369H428.021C472.509 130.369 515.445 146.613 548.653 176.008L736.314 342.121C769.522 371.516 812.457 387.76 856.945 387.76H1602.73"
          stroke="#182224"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M199.289 130.367H200.392C257.235 130.367 310.787 103.892 345.047 58.8515L416.716 -35.3668C450.976 -80.4071 504.528 -106.882 561.373 -106.882H1677.98"
          stroke="#182224"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M199.289 130.367H306.012C343.003 130.367 379.11 141.603 409.484 162.567L497.765 223.503C528.137 244.468 564.243 255.705 601.235 255.705H1743.35"
          stroke="#182224"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M199.289 130.367H637.007C685.086 130.367 731.195 111.403 765.191 77.6456L899.061 -55.2791C933.058 -89.0365 979.167 -108 1027.25 -108H1693.75"
          stroke="#182224"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M0.930745 130.371H879.034C903.142 130.371 927.008 135.144 949.234 144.415L1037.52 181.232C1059.74 190.503 1083.61 195.277 1107.72 195.277H1741.09"
          stroke="#182224"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.circle
          cx="10"
          cy="130"
          r="10"
          fill="#182224"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        />
      </g>
    </svg>
  );
};

function App() {
  // State variables to manage Todo items and their properties
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  // Fetch all Todo items from the server on component mount
  useEffect(() => {
    getAllToDo(setToDo,'ios');
    log()
  }, []);

  // Function to enter update mode for a specific Todo item
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="bg-red-600 text-3xl font-bold underline border-8 border-black">ToDo App</h1>

        <AnimatedSVG />

        <div className="top">
          {/* Input field to add new Todo items */}
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Add or Update button based on the current mode */}
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating,'ios')
                : () => addToDo(text, setText, setToDo,'ios')
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {/* Map through the Todo items and render the ToDo component for each */}
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo,'ios')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

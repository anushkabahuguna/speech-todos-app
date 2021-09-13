import React, { useContext } from "react";
import { Paper, TextField, Tooltip } from "@material-ui/core";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import wordsToNumbers from "words-to-numbers";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import FormatClearIcon from "@material-ui/icons/FormatClear";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/Todos.context";
import './TodoForm.css';

function TodoForm() {
  const [task, changeTask, resetTask] = useInputState("");
  const dispatch = useContext(DispatchContext);
  const commands = [
    {
      command: "Delete note :num",
      callback: (num) => {
        dispatch({ type: "REMOVE", id: Number(wordsToNumbers(num) - 1) });
      },
    },

    {
      command: "add *",
      callback: (todo) => {
        dispatch({ type: "ADD", task: todo });
      },
    },
    {
      command: "change * for :num",
      callback: (task, num) => {
        dispatch({
          type: "EDIT",
          id: Number(wordsToNumbers(num) - 1),
          newTask: task,
        });
      },
    },
    {
      command: "clear",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  return (
    <Paper id='TodoForm-root' >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task });
          resetTask();
        }}
      >
        <div className='TodoForm-desc'>
          <div>
            <div>
              To add, type or speak <span>Add your_note</span>
            </div>
            <div>
              To delete, speak <span>Delete note thirty fourth</span>
            </div>
          </div>
          <div>
            <div>
              To change, speak <span>Change new_task for third</span>
            </div>
            <div>
              Microphone <span>{listening ? "ON" : "OFF"}</span>
            </div>
          </div>
          <div>
            <div>{transcript === "" ? "speak..." : transcript}</div>
          </div>
        </div>
        <div className='TodoForm-form'>
          <TextField
            value={task}
            onChange={changeTask}
            margin="normal"
            label="Add new Todo"
            className='TodoForm-text'
          />
          {browserSupportsSpeechRecognition ? (
            <div>
              <Tooltip title="Start">
                <MicIcon
                  onClick={SpeechRecognition.startListening}
                  className='TodoForm-icon'
                />
              </Tooltip>
              <Tooltip title="Stop">
                <MicOffIcon
                  onClick={SpeechRecognition.stopListening}
                  className='TodoForm-icon'
                />
              </Tooltip>
              <Tooltip title="Reset Transcript">
                <FormatClearIcon
                  onClick={resetTranscript}
                  className='TodoForm-icon'
                />
              </Tooltip>
            </div>
          ) : (
            <span style={{ margin: "auto 0" }}>
              Browser doesn't support speech recognition.
            </span>
          )}
        </div>
      </form>
    </Paper>
  );
}

export default TodoForm;

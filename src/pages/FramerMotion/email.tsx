import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const titles = [
  ["Apple's newest iPhone is here"],
  ["Your funds have been processed"],
  ["This Week in Sports"],
];

export default function Email() {
  const [messages, setMessages] = useState([...Array(5).keys()]);
  const [selectedMessages, setSelectedMessages] = useState<number[]>([]);

  function toggleMessage(index: number) {
    if (selectedMessages.includes(index)) {
      setSelectedMessages((messages) => messages.filter((id) => id !== index));
    } else {
      setSelectedMessages((messages) => [index, ...messages]);
    }
  }

  function addMessage() {
    const newId = (messages.at(-1) || 0) + 1;
    setMessages((messages) => [...messages, newId]);
  }

  function archiveMessages() {
    setMessages((messages) =>
      messages.filter((id) => !selectedMessages.includes(id))
    );
    setSelectedMessages([]);
  }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col bg-slate-50 py-2">
      <div className="flex justify-between border-b py-2 px-5 text-right">
        <button
          onClick={addMessage}
          className="rounded px-2 py-1 text-slate-400 hover:text-slate-800 active:bg-slate-200"
        >
          ADD
        </button>
        <button
          onClick={archiveMessages}
          className="rounded px-2 py-1 text-slate-400 hover:text-slate-800 active:bg-slate-200"
        >
          DELETE
        </button>
      </div>
      <ul className="overflow-y-auto px-3 pt-2">
        <AnimatePresence initial={false}>
          {[...messages].reverse().map((index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 1 }}
              className="relative "
            >
              <div className="py-0.5">
                <button
                  onClick={() => toggleMessage(index)}
                  className={`${
                    selectedMessages.includes(index)
                      ? "bg-blue-500"
                      : "hover:bg-slate-200"
                  } block w-full cursor-pointer truncate rounded py-3 px-3 text-left`}
                >
                  <p
                    className={`${
                      selectedMessages.includes(index)
                        ? "text-white"
                        : "text-slate-800"
                    } truncate text-sm font-medium`}
                  >
                    {titles[index % titles.length][0]}
                  </p>
                </button>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

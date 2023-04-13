import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/20/solid";
import { nanoid } from "nanoid";

type Mess = {
  id: string;
  mess: string;
};

const messArray = [
  { id: "1", mess: "Hello first" },
  { id: "2", mess: "Hello second" },
  { id: "3", mess: "Hello third" },
  { id: "4", mess: "Hello fourth" },
];

export default function MultiSelect() {
  const [messages, setMessages] = useState<Mess[]>(messArray);
  const [selectedMessages, setSelectedMessages] = useState<Mess[]>([]);

  function toggleSelectedMessage(message: Mess) {
    if (!selectedMessages.includes(message)) {
      setSelectedMessages((selectedMessages) => [...selectedMessages, message]);
    } else {
      setSelectedMessages((selectedMessages) =>
        selectedMessages.filter((mess) => mess.id !== message.id)
      );
    }
  }

  function addMessage() {
    setMessages((messages) => [
      ...messages,
      { id: nanoid(), mess: `New message ${messages.length}` },
    ]);
  }

  function deleteMessage() {
    setMessages((messages) =>
      messages.filter((message) => !selectedMessages.includes(message))
    );
    setSelectedMessages([]);
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col rounded-lg bg-slate-50 shadow-[0_35px_60px_-15px_rgba(148,163,184,0.5)]">
      <div className="flex justify-between border-b p-2 text-right">
        <button
          onClick={addMessage}
          className="rounded-md bg-blue-200 px-2 py-1 font-semibold flex items-center hover:bg-blue-300 transition-all"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add
        </button>
        <AnimatePresence>
          {messages.length > 0 && selectedMessages.length > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", bounce: 0.4, duration: 0.3 }}
              onClick={deleteMessage}
              className="rounded-md bg-red-100 px-3 py-1 font-semibold text-red-800 flex items-center hover:bg-red-200 transition-all"
            >
              <ArchiveBoxXMarkIcon className="w-5 mr-2" />
              Delete
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <ul className="p-2">
        <AnimatePresence>
          {[...messages].reverse().map((message) => (
            <motion.li
              key={message.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative will-change-auto"
            >
              <button
                onClick={() => toggleSelectedMessage(message)}
                className={`${
                  selectedMessages.includes(message)
                    ? "bg-blue-500 text-white"
                    : "hover:bg-slate-200"
                } my-[2px] w-full cursor-pointer truncate rounded py-3 px-3 text-left transition-all active:scale-[98%]`}
              >
                <span className="truncate text-sm font-medium">
                  {message.mess}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <AnimatePresence>
        {messages.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center pb-4 font-semibold text-sm text-slate-600"
          >
            No messages
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

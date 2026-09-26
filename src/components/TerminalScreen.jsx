"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Terminal as TerminalIcon,
  Plus,
  ChevronDown,
  X,
  Maximize2,
  Minimize2,
  Minus,
  Loader2,
} from "lucide-react";

import terminalResponse from "../services/commad";

const TerminalScreen = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [loading, setLoading] = useState(false);

  const [terminals, setTerminals] = useState([
    {
      id: 1,
      name: "Terminal 1",
      history: [],
    },
  ]);

  const [activeTerminal, setActiveTerminal] = useState(1);
  const [input, setInput] = useState("");

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  // =========================================================
  // CURRENT TERMINAL
  // =========================================================

  const currentTerminal = terminals.find(
    (terminal) => terminal.id === activeTerminal
  );

  // =========================================================
  // CTRL + `
  // =========================================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "`") {
        event.preventDefault();

        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =========================================================
  // AUTO FOCUS
  // =========================================================

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, isMinimized, activeTerminal]);

  // =========================================================
  // AUTO SCROLL
  // =========================================================

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop =
        terminalBodyRef.current.scrollHeight;
    }
  }, [terminals, loading]);

  // =========================================================
  // CREATE TERMINAL
  // =========================================================

  const createTerminal = () => {
    const newId =
      terminals.length > 0
        ? Math.max(
            ...terminals.map((terminal) => terminal.id)
          ) + 1
        : 1;

    const newTerminal = {
      id: newId,
      name: `Terminal ${newId}`,
      history: [],
    };

    setTerminals((prev) => [
      ...prev,
      newTerminal,
    ]);

    setActiveTerminal(newId);
    setInput("");
  };

  // =========================================================
  // CLOSE TERMINAL
  // =========================================================

  const closeTerminal = (id) => {
    // If only one terminal exists,
    // close the complete terminal panel.
    if (terminals.length === 1) {
      setIsOpen(false);
      return;
    }

    const index = terminals.findIndex(
      (terminal) => terminal.id === id
    );

    const remaining = terminals.filter(
      (terminal) => terminal.id !== id
    );

    setTerminals(remaining);

    // If closing active terminal,
    // activate another terminal.
    if (activeTerminal === id) {
      const nextTerminal =
        remaining[index] ||
        remaining[index - 1];

      if (nextTerminal) {
        setActiveTerminal(nextTerminal.id);
      }
    }
  };

  // =========================================================
  // ADD HISTORY
  // =========================================================

  const addHistory = (historyItem) => {
    setTerminals((prev) =>
      prev.map((terminal) =>
        terminal.id === activeTerminal
          ? {
              ...terminal,
              history: [
                ...terminal.history,
                historyItem,
              ],
            }
          : terminal
      )
    );
  };

  // =========================================================
  // EXECUTE COMMAND
  // =========================================================

const executeCommand = async (event) => {
  event.preventDefault();

  if (!input.trim()) return;
  if (loading) return;

  const command = input.trim();

  // ==============================
  // CLEAR TERMINAL
  // ==============================

  if (command === "clear") {
    setTerminals((prev) =>
      prev.map((terminal) =>
        terminal.id === activeTerminal
          ? {
              ...terminal,
              history: [],
            }
          : terminal
      )
    );

    setInput("");

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return;
  }

  // ==============================
  // ADD COMMAND
  // ==============================

  addHistory({
    type: "command",
    text: command,
  });

  setInput("");
  setLoading(true);

  try {
    // ==============================
    // CALL COMMAND SERVICE
    // ==============================

    const data =  terminalResponse({
      input: command,
    });

    console.log("Terminal response:", data);

    // ==============================
    // RESPONSE
    // ==============================

    let responseText = "";

    if (typeof data === "string") {
      responseText = data;
    } else if (data?.message) {
      responseText = data.message;
    } else if (data?.response) {
      responseText = data.response;
    } else {
      responseText = JSON.stringify(
        data,
        null,
        2
      );
    }

    addHistory({
      type: "response",
      text: responseText,
    });
  } catch (error) {
    console.error(
      "Automation error:",
      error
    );

    addHistory({
      type: "error",
      text:
        error?.message ||
        "Something went wrong while executing the command.",
    });
  } finally {
    setLoading(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  }
};

  // =========================================================
  // TERMINAL CLOSED
  // =========================================================

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed bottom-4 right-4 z-50
          flex items-center gap-2
          rounded-md
          border border-[#3c3c3c]
          bg-[#181818]
          px-3 py-2
          text-sm text-gray-300
          shadow-xl
          transition
          hover:bg-[#252525]
        "
      >
        <TerminalIcon size={16} />

        <span>Terminal</span>

        <span className="text-xs text-gray-500">
          Ctrl + `
        </span>
      </button>
    );
  }

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div
      className={`
        fixed
        z-50
        overflow-hidden
        border
        border-[#3c3c3c]
        bg-[#181818]
        text-gray-200
        shadow-2xl

        transition-all
        duration-200

        ${
          isFullscreen
            ? `
              inset-0
              h-screen
              w-screen
              rounded-none
            `
            : `
              bottom-2
              left-1/2
              h-1/2
              w-[90%]
              -translate-x-1/2
              rounded-md
            `
        }
      `}
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div
        className="
          flex
          h-10
          items-center
          justify-between
          border-b
          border-[#2d2d2d]
          bg-[#181818]
        "
      >
        {/* LEFT */}

        <div className="flex h-full items-center">
          {/* TERMINAL TITLE */}

          <div
            className="
              flex
              h-full
              items-center
              gap-2
              px-3
              text-xs
              font-medium
              text-gray-300
            "
          >
            <span>TERMINAL</span>

            <ChevronDown
              size={14}
              className="text-gray-500"
            />
          </div>

          {/* NEW TERMINAL */}

          <button
            onClick={createTerminal}
            disabled={loading}
            title="New Terminal"
            className="
              rounded
              p-1.5
              text-gray-400
              transition
              hover:bg-[#2a2a2a]
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <Plus size={16} />
          </button>
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-1 px-2">
          {/* MINIMIZE */}

          <button
            onClick={() =>
              setIsMinimized(
                (prev) => !prev
              )
            }
            title={
              isMinimized
                ? "Restore"
                : "Minimize"
            }
            className="
              rounded
              p-1.5
              text-gray-400
              transition
              hover:bg-[#2a2a2a]
              hover:text-white
            "
          >
            <Minus size={15} />
          </button>

          {/* FULLSCREEN */}

          <button
            onClick={() =>
              setIsFullscreen(
                (prev) => !prev
              )
            }
            title={
              isFullscreen
                ? "Exit Fullscreen"
                : "Maximize"
            }
            className="
              rounded
              p-1.5
              text-gray-400
              transition
              hover:bg-[#2a2a2a]
              hover:text-white
            "
          >
            {isFullscreen ? (
              <Minimize2 size={15} />
            ) : (
              <Maximize2 size={15} />
            )}
          </button>

          {/* CLOSE */}

          <button
            onClick={() => setIsOpen(false)}
            title="Close Terminal"
            className="
              rounded
              p-1.5
              text-gray-400
              transition
              hover:bg-red-500/20
              hover:text-red-400
            "
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* MINIMIZED */}
      {/* ================================================= */}

      {!isMinimized && (
        <>
          {/* ================================================= */}
          {/* TERMINAL TABS */}
          {/* ================================================= */}

          <div
            className="
              flex
              h-9
              overflow-x-auto
              border-b
              border-[#2d2d2d]
              bg-[#181818]
            "
          >
            {terminals.map(
              (terminal) => (
                <div
                  key={terminal.id}
                  onClick={() => {
                    setActiveTerminal(
                      terminal.id
                    );
                  }}
                  className={`
                    group
                    flex
                    min-w-fit
                    cursor-pointer
                    items-center
                    gap-2
                    border-r
                    border-[#2d2d2d]
                    px-3
                    text-xs

                    ${
                      activeTerminal ===
                      terminal.id
                        ? `
                          bg-[#1f1f1f]
                          text-white
                        `
                        : `
                          text-gray-500
                          hover:bg-[#202020]
                        `
                    }
                  `}
                >
                  <TerminalIcon size={13} />

                  <span>
                    {terminal.name}
                  </span>

                  {/* CLOSE TAB */}

                  <button
                    onClick={(event) => {
                      event.stopPropagation();

                      closeTerminal(
                        terminal.id
                      );
                    }}
                    className="
                      rounded
                      p-0.5
                      opacity-0
                      transition
                      hover:bg-[#333]
                      group-hover:opacity-100
                    "
                  >
                    <X size={12} />
                  </button>
                </div>
              )
            )}
          </div>

          {/* ================================================= */}
          {/* TERMINAL BODY */}
          {/* ================================================= */}

          <div
            ref={terminalBodyRef}
            className="
              flex
              h-[calc(100%-76px)]
              flex-col
              overflow-y-auto
              bg-[#181818]
            "
          >
            <div
              className="
                flex-1
                p-4
                font-mono
                text-sm
              "
            >
              {/* ================================================= */}
              {/* WELCOME */}
              {/* ================================================= */}

              <div className="mb-4 text-gray-500">
                <span className="text-green-400">
                  Welcome
                </span>{" "}
                to Automation Terminal
              </div>

              {/* ================================================= */}
              {/* HISTORY */}
              {/* ================================================= */}

              {currentTerminal?.history.map(
                (item, index) => {
                  // -----------------------------
                  // COMMAND
                  // -----------------------------

                  if (
                    item.type ===
                    "command"
                  ) {
                    return (
                      <div
                        key={index}
                        className="mb-2"
                      >
                        <span className="text-green-400">
                          ➜
                        </span>{" "}

                        <span className="text-blue-400">
                          ~/automation
                        </span>{" "}

                        <span className="text-gray-500">
                          $
                        </span>{" "}

                        <span className="text-gray-200">
                          {item.text}
                        </span>
                      </div>
                    );
                  }

                  // -----------------------------
                  // RESPONSE
                  // -----------------------------

                  if (
                    item.type ===
                    "response"
                  ) {
                    return (
                      <div
                        key={index}
                        className="
                          mb-3
                          ml-5
                          whitespace-pre-wrap
                          text-gray-400
                        "
                      >
                        {item.text}
                      </div>
                    );
                  }

                  // -----------------------------
                  // ERROR
                  // -----------------------------

                  if (
                    item.type ===
                    "error"
                  ) {
                    return (
                      <div
                        key={index}
                        className="
                          mb-3
                          ml-5
                          whitespace-pre-wrap
                          text-red-400
                        "
                      >
                        ✕ {item.text}
                      </div>
                    );
                  }

                  return null;
                }
              )}

              {/* ================================================= */}
              {/* LOADING */}
              {/* ================================================= */}

              {loading && (
                <div
                  className="
                    mb-3
                    ml-5
                    flex
                    items-center
                    gap-2
                    text-gray-400
                  "
                >
                  <Loader2
                    size={14}
                    className="animate-spin"
                  />

                  <span>
                    Processing command...
                  </span>
                </div>
              )}

              {/* ================================================= */}
              {/* INPUT */}
              {/* ================================================= */}

              <form
                onSubmit={
                  executeCommand
                }
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <span className="text-green-400">
                  ➜
                </span>

                <span className="text-blue-400">
                  ~/automation
                </span>

                <span className="text-gray-500">
                  $
                </span>

                <input
                  ref={inputRef}
                  value={input}
                  disabled={loading}
                  onChange={(event) =>
                    setInput(
                      event.target.value
                    )
                  }
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-gray-200
                    outline-none
                    placeholder:text-gray-700
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                  placeholder={
                    loading
                      ? "Processing command..."
                      : "Type a command..."
                  }
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TerminalScreen;
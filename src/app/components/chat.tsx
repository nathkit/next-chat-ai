'use client';

import { useChat } from 'ai/react';

function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.toolInvocations ? (
            <pre>{JSON.stringify(m.toolInvocations, null, 2)}</pre>
          ) : (
            <p>{m.content}</p>
          )}
        </div>
      ))}

      <form 
        className="w-full fixed left-0 bottom-0 flex justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="w-1/2 max-w-md p-2 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button
          className="bg-white text-black rounded py-2 px-4"
          type="submit"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default Chat
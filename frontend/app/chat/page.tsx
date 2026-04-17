'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: '¡Hola! Soy tu asistente de NutriShop. ¿Cómo puedo ayudarte hoy?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage || isLoading) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now().toString(),
        type: 'user',
        content: trimmedMessage,
      },
    ]);
    setInputValue('');
    setIsLoading(true);

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content: 'Gracias por tu mensaje. Aquí conectaré el endpoint de IA cuando me lo compartas.',
        },
      ]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto flex h-[calc(100vh-3rem)] w-full max-w-5xl flex-col overflow-hidden bg-(--surface-lowest) shadow-[0px_12px_32px_rgba(25,28,30,0.08)]">
        <header className="flex items-center justify-between border-b border-(--outline-variant) px-6 py-4 sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-(--secondary)">Chat de ayuda</p>
            <h1 className="font-editorial mt-2 text-3xl text-foreground">Asistente NutriShop</h1>
          </div>
          <Link
            className="bg-(--secondary-container) px-4 py-2 text-sm text-(--on-secondary-container) transition hover:brightness-95"
            href="/"
          >
            Volver al home
          </Link>
        </header>

        <section className="flex flex-1 min-h-0 flex-col bg-(--surface-low)">
          <div className="flex-1 min-h-0 space-y-4 overflow-y-auto px-6 py-6 sm:px-8">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    message.type === 'user'
                      ? 'bg-(--primary) text-(--on-primary)'
                      : 'bg-(--surface-container-lowest) text-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-(--surface-container-lowest) px-4 py-3 text-foreground">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-foreground" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-foreground" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-foreground" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="flex-none border-t border-(--outline-variant) bg-(--surface-lowest) p-4 sm:p-6">
            <div className="flex gap-3">
              <input
                className="flex-1 bg-(--surface-container-low) px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-foreground/50 focus:bg-(--primary-container) focus:text-(--on-primary-container)"
                disabled={isLoading}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Escribe tu pregunta..."
                type="text"
                value={inputValue}
              />
              <button
                className="bg-(--primary) px-5 py-3 text-sm font-medium text-(--on-primary) transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isLoading || !inputValue.trim()}
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

'use client';

import { useState, useRef, useEffect } from 'react';

const CHAT_ENDPOINT = 'https://nutritional-e-commerce.vercel.app/chat';
const CHAT_PROVIDER = 'gemini';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: '¡Hola! Soy tu asistente de NutriShop. ¿Cómo puedo ayudarte hoy?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const pregunta = inputValue.trim();
    if (!pregunta || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: pregunta,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pregunta,
          provider: CHAT_PROVIDER,
        }),
      });

      if (!response.ok) {
        throw new Error(`Chat request failed with status ${response.status}`);
      }

      const data: { respuesta?: string; provider?: string; tokens_usados?: number } = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content:
          data.respuesta?.trim() ||
          'No recibí una respuesta válida del asistente. Intenta nuevamente en unos segundos.',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          content:
            'No fue posible conectar con el asistente en este momento. Intenta nuevamente más tarde.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-(--tertiary) px-5 py-3 text-sm font-medium text-(--on-tertiary) transition hover:brightness-110"
        style={{
          boxShadow: '0px 12px 32px rgba(25, 28, 30, 0.06)',
        }}
        aria-label="Chat de ayuda"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        <span>Chat de ayuda</span>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 z-50 flex max-h-[min(80vh,42rem)] w-96 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-(--surface-lowest) shadow-lg border border-(--outline-variant)" style={{
          boxShadow: '0px 12px 32px rgba(25, 28, 30, 0.12)',
        }}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-(--outline-variant) px-6 py-4">
            <div>
              <h3 className="font-medium text-foreground">Asistente Ethereal</h3>
              <p className="text-xs text-foreground/60">Siempre disponible para ti</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/60 transition hover:text-foreground"
              aria-label="Cerrar chat"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 min-h-0 overflow-y-auto space-y-4 px-6 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 text-sm leading-relaxed ${
                    message.type === 'user'
                      ? 'bg-(--primary) text-(--on-primary) rounded-lg rounded-tr-none'
                      : 'bg-(--surface-container-low) text-foreground rounded-lg rounded-tl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-(--surface-container-low) text-foreground px-4 py-2 rounded-lg rounded-tl-none">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-2 w-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-2 w-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="flex gap-2 border-t border-(--outline-variant) px-6 py-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 bg-(--surface-container-low) text-sm text-foreground px-3 py-2 outline-none transition placeholder:text-foreground/50 focus:bg-(--primary-container) focus:text-(--on-primary-container)"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-(--primary) text-(--on-primary) px-3 py-2 text-sm font-medium transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Enviar mensaje"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16347819 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99701575 L3.03521743,10.4380088 C3.03521743,10.5951062 3.34915502,10.7522035 3.50612381,10.7522035 L16.6915026,11.5376905 C16.6915026,11.5376905 17.1624089,11.5376905 17.1624089,12.0089827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

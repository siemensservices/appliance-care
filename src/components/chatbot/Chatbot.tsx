import { useState } from "react";
import { MessageCircle, X, Send, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const quickReplies = [
  "Washing Machine Repair",
  "AC Not Cooling",
  "Fridge Not Working",
  "Book a Service",
  "Get Quote",
];

const responses: Record<string, string> = {
  "washing machine repair": "🧺 We specialize in washing machine repairs! Common issues we fix include:\n\n• Not spinning or draining\n• Leaking water\n• Strange noises\n• Not starting\n\nWould you like to book a technician? Call us at +91-9876543210!",
  "ac not cooling": "❄️ AC not cooling? This could be due to:\n\n• Low refrigerant\n• Dirty filters\n• Compressor issues\n• Thermostat problems\n\nOur experts can diagnose and fix it quickly. Call +91-9876543210!",
  "fridge not working": "🧊 Refrigerator troubles? We handle:\n\n• Not cooling properly\n• Making loud noises\n• Ice buildup\n• Door seal issues\n\nBook a visit today! Call +91-9876543210",
  "book a service": "📅 Ready to book? Here's how:\n\n1. Call us: +91-9876543210\n2. Or visit our Contact page\n3. Fill the service request form\n\nWe offer same-day service!",
  "get quote": "💰 For a free quote, please share:\n\n• Appliance type\n• Brand & model\n• Issue description\n\nCall +91-9876543210 or fill our contact form for instant pricing!",
  "default": "👋 Hi there! I'm here to help with your appliance questions.\n\nI can assist with:\n• Washing machines\n• Refrigerators\n• Air conditioners\n• Microwaves\n• Dryers\n\nWhat appliance needs help today?",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: responses.default, isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: text,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Find matching response
    const lowerText = text.toLowerCase();
    let botResponse = responses.default;

    for (const [key, value] of Object.entries(responses)) {
      if (lowerText.includes(key) || key.includes(lowerText)) {
        botResponse = value;
        break;
      }
    }

    // Electronics general help
    if (lowerText.includes("tip") || lowerText.includes("advice") || lowerText.includes("help")) {
      botResponse = "💡 Quick Electronics Tips:\n\n• Always unplug before cleaning\n• Regular maintenance extends life\n• Don't overload your appliances\n• Clean filters monthly\n• Check power connections first\n\nNeed specific help? Just ask!";
    }

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: botResponse,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl shadow-hover flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-foreground text-background rotate-0" : "bg-primary text-primary-foreground animate-bounce-gentle"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] bg-card rounded-3xl shadow-card border border-border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-primary-foreground">AppliancesHelp</h3>
              <p className="text-xs text-primary-foreground/80">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm whitespace-pre-line ${
                    msg.isBot
                      ? "bg-muted text-foreground rounded-bl-md"
                      : "bg-primary text-primary-foreground rounded-br-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium whitespace-nowrap hover:bg-primary/20 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-muted border-0 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button type="submit" size="icon" className="rounded-xl shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;

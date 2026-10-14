import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 chat-canvas">
      <div className="max-w-md text-center space-y-6">
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 ring-1 ring-primary/15 flex items-center
             justify-center animate-bounce [animation-duration:2.5s]"
            >
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold tracking-tight">Welcome to Chat App!</h2>
        <p className="text-sm text-base-content/55 max-w-xs mx-auto">
          Select a conversation from the sidebar to start chatting in real time
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
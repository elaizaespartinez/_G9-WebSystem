import { CircleAlert, SendHorizonal, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import chatbotIcon from "../assets/chatbot-icon.png";

function ChatbotWindow() {
    return (
        <section
            className="
                fixed
                top-24
                right-4
                bottom-24
                left-4
                z-40
                flex
                flex-col
                rounded-xl
                bg-white
                overflow-hidden
                shadow-elevated

                md:top-20
                md:right-6
                md:bottom-24
                md:left-auto
                md:w-[min(90vw,60rem)]
            "
        >
            {/* Header */}
            <header className="shrink-0 border-b p-2 flex items-center gap-2">
                <img src={chatbotIcon} alt="Chatbot Icon" className="h-8 w-auto object-contain"></img>
                <h2 className="">
                    Agos
                </h2>
            </header>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4">
                <p>Hi, I'm Agos</p>
                <p>How can I help you today?</p>
            </div>

            {/* Message Input */}
            <form className="flex shrink-0 gap-2 border-t p-2">
                <input
                    type="text" id="chat-input"
                    placeholder="Type a message..."
                    className="
                        min-w-0
                        flex-1
                        rounded-input
                        border
                        px-3
                        py-2
                        outline-none
                        focus:border-primary
                    "
                />

                <button
                    type="submit"
                    aria-label="Send message"
                    className="
                        flex
                        shrink-0
                        items-center
                        justify-center
                        rounded-button
                        px-4
                        py-2
                        text-primary
                        hover:bg-primary/10
                    "
                >
                    <SendHorizonal className="h-5 w-5" />
                </button>
            </form>

            {/* Emergency Notice */}
            <div className="shrink-0 border-t bg-red-50 p-3 ">
                <div className="flex items-start gap-2">
                    <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />

                    <div className="min-w-0">
                        <p className="text-sm text-red-500">
                            In an immediate emergency, contact your local
                            emergency hotline.
                        </p>

                        <Link
                            to="/emergency"
                            className="
                                mt-1
                                inline-flex
                                items-center
                                gap-1
                                text-sm
                                font-medium
                                text-red-600
                                hover:underline
                            "
                        >
                            View Emergency Hotlines
                            <MoveRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChatbotWindow;
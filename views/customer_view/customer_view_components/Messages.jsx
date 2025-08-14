"use client";
import { useState } from "react";
import { FaListUl } from "react-icons/fa6";
import { 
  FiChevronUp, 
  FiChevronDown, 
  FiCamera,
  FiCheck
} from "react-icons/fi";

const Messages = ({ 
  messages = [],
  onSeeAll = () => {},
  defaultExpanded = false // start expanded or not
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const defaultMessages = [
    {
      id: 1,
      name: "Kayode Kasum",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      time: "12:20 PM",
      preview: "What do you think abo...",
      unread: true
    },
    {
      id: 2,
      name: "Paul Atiba",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      time: "12:20 PM",
      preview: "Photo",
      unread: true,
      hasPhoto: true
    },
    {
      id: 3,
      name: "Taiwo Abiru",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      time: "12:20 PM",
      preview: "Fair enough. Let me kn...",
      unread: false
    },
    {
      id: 4,
      name: "Chris Jack",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      time: "12:20 PM",
      preview: "Deal 🔥",
      unread: false
    }
  ];

  const messagesToShow = messages.length > 0 ? messages : defaultMessages;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <FaListUl className="text-gray-600" size={20} />
          <span className="font-medium text-gray-900">Messages</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onSeeAll}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            See all
          </button>
          <button 
            onClick={() => setIsExpanded(prev => !prev)}
            className="text-gray-400 hover:text-gray-600"
          >
            {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Messages List */}
      {isExpanded && (
        <div className="divide-y divide-gray-50">
          {messagesToShow.map((message) => (
            <div key={message.id} className="p-4 hover:bg-gray-50 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={message.avatar} 
                    alt={message.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {message.unread && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {message.name}
                    </h4>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    {message.hasPhoto && <FiCamera className="text-gray-400" size={14} />}
                    {!message.unread && <FiCheck className="text-gray-400" size={14} />}
                    <p className="text-sm text-gray-500 truncate">{message.preview}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Messages;

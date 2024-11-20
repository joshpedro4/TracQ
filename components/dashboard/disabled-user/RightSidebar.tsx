'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  Briefcase, 
  Bot, 
  Star, 
  Bookmark, 
  Award,
  FileText,
  Plus,
  ArrowRight,
  Paperclip,
  ChevronDown,
  ChevronUp,
  Mic
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function RightSidebar() {
  const [isPromptMenuOpen, setIsPromptMenuOpen] = useState(false);

  const promptExamples = [
    {
      icon: <Star className="w-4 h-4 text-yellow-500" />,
      title: "Share a win",
      prompt: "What made you proud today?",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-100 hover:border-yellow-300"
    },
    {
      icon: <Award className="w-4 h-4 text-purple-500" />,
      title: "Growth Moment",
      prompt: "What did you learn?",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100 hover:border-purple-300"
    },
    {
      icon: <Bookmark className="w-4 h-4 text-blue-500" />,
      title: "Set a goal",
      prompt: "What's next for you?",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100 hover:border-blue-300"
    },
    {
      icon: <FileText className="w-4 h-4 text-green-500" />,
      title: "Show & Tell ",
      prompt: "Share something you're working on",
      bgColor: "bg-green-50",
      borderColor: "border-green-100 hover:border-green-300",
      hasAttachment: true,
      attachmentPrompt: "Add files, screenshots, or documents"
    }
  ];

  return (
    <aside className="w-72 bg-gray-100 p-3 space-y-3 shadow-lg border-l border-gray-200">
      {/* Opportunities Section */}
      <Card className="p-3 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 text-purple-600 mr-2" />
            <h2 className="font-semibold text-purple-600">Opportunities</h2>
          </div>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-purple-600 hover:bg-purple-100">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <hr className="border-gray-200 mb-3" />
        <div className="space-y-2">
          {[
            { title: "Presentation", type: "Soft Skill", timeAgo: "1h ago" },
            { title: "Corona Unity", type: "Exp.", timeAgo: "1h ago" },
            { title: "Excel Working", type: "Hard Skill", timeAgo: "1h ago" }
          ].map((opp, index) => (
            <div 
              key={index}
              className="group flex items-center justify-between p-2 rounded-md hover:bg-purple-50 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{opp.title}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">{opp.type}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{opp.timeAgo}</span>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                className="opacity-0 group-hover:opacity-100 h-7 px-2 text-purple-600 hover:bg-purple-100"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Messages Section */}
      <Card className="p-3 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <MessageSquare className="w-4 h-4 text-purple-600 mr-2" />
            <h2 className="font-semibold text-purple-600">Messages</h2>
          </div>
          <Button variant="ghost" size="sm" className="h-7 px-2 text-purple-600 hover:bg-purple-100">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <hr className="border-gray-200 mb-3" />
        <div className="space-y-3">
          {[
            { name: "Dorothy Richards", message: "Don't forget to work on assignment page 36..." },
            { name: "Ernest Williamson", message: "Have you made history assignment?" }
          ].map((message, index) => (
            <div 
              key={index} 
              className="group flex items-start space-x-3 p-2 rounded-md hover:bg-purple-50 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-purple-200 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-800 truncate">{message.name}</p>
                <p className="text-xs text-gray-500 truncate">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Career Assistant Section */}
      <Card className="p-3 bg-white shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Bot className="w-4 h-4 text-purple-600 mr-2" />
            <h2 className="font-semibold text-purple-600">Career Assistant</h2>
          </div>
        </div>
        <hr className="border-gray-200 mb-3" />
        
        <Button 
          variant="solid" 
          className="w-full justify-between mb-2 text-white bg-purple-600 hover:bg-purple-700"
          onClick={() => setIsPromptMenuOpen(!isPromptMenuOpen)}
        >
          <span>Select a prompt</span>
          {isPromptMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>

        {isPromptMenuOpen && (
          <div className="space-y-2 mb-2">
            {promptExamples.map((item, index) => (
              <button 
                key={index}
                className={`w-full text-left p-2 rounded-md transition-all ${item.bgColor} border ${item.borderColor}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.prompt}</p>
                    {item.hasAttachment && (
                      <div className="mt-1 flex items-center space-x-1 text-xs text-gray-500">
                        <Paperclip className="w-3 h-3" />
                        <span>{item.attachmentPrompt}</span>
                      </div>
                    )}
                  </div>
                  {item.icon}
                </div>
              </button>
            ))}
          </div>
        )}

        <div className="bg-gray-50 p-2 rounded-md">
          <div className="flex items-center space-x-2 mb-2">
            <Bot className="w-4 h-4 text-purple-600" />
            <p className="text-sm text-gray-600">Document your journey through chat...</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex-1 h-8 bg-white rounded border border-gray-200"></div>
            <Button size="sm" variant="ghost" className="text-purple-600 hover:bg-purple-100">
              <Mic className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="text-purple-600 hover:bg-purple-100">
              <Paperclip className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-purple-600 underline cursor-pointer hover:text-purple-700">History</span>
          <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
            <MessageSquare className="w-3 h-3 mr-1" />
            Chat
          </Button>
        </div>
      </Card>
    </aside>
  );
}

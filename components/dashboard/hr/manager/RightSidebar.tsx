// 'use client';

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { 
//   MessageSquare, 
//   Users, 
//   Bot, 
//   Star, 
//   Bookmark, 
//   Award,
//   FileText,
//   Plus,
//   ArrowRight,
//   Paperclip,
//   ChevronDown,
//   ChevronUp,
//   Mic,
//   Briefcase,
//   Clock,
//   CheckCircle,
//   HelpCircle,
//   PlusCircle
// } from "lucide-react";

// export default function RightSidebar() {
//   const [isPromptMenuOpen, setIsPromptMenuOpen] = useState(false);

//   return (
//     <aside className="w-72 bg-gray-100 p-3 space-y-3 shadow-lg border-l border-gray-200">
//       {/* Team Updates Section */}
//       <Card className="p-3 bg-white shadow-sm">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center">
//             <Users className="w-4 h-4 text-teal-600 mr-2" />
//             <h2 className="font-semibold text-teal-600">Team Updates</h2>
//           </div>
//           <Button variant="ghost" size="sm" className="h-7 px-2 text-teal-600 hover:bg-teal-100">
//             <Plus className="w-4 h-4" />
//           </Button>
//         </div>
//         <hr className="border-gray-200 mb-3" />
//         <div className="space-y-2">
//           {[
//             { title: "Performance Review", type: "Task", timeAgo: "2h ago" },
//             { title: "Team Meeting", type: "Event", timeAgo: "Tomorrow" },
//             { title: "Project Milestone", type: "Deadline", timeAgo: "3d ago" }
//           ].map((update, index) => (
//             <div 
//               key={index}
//               className="group flex items-center justify-between p-2 rounded-md hover:bg-teal-50 transition-colors"
//             >
//               <div>
//                 <p className="text-sm font-medium text-gray-800">{update.title}</p>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-xs text-gray-500">{update.type}</span>
//                   <span className="text-xs text-gray-400">•</span>
//                   <span className="text-xs text-gray-500">{update.timeAgo}</span>
//                 </div>
//               </div>
//               <Button 
//                 size="sm" 
//                 variant="ghost" 
//                 className="opacity-0 group-hover:opacity-100 h-7 px-2 text-teal-600 hover:bg-teal-100"
//               >
//                 <ArrowRight className="w-4 h-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       </Card>

//       {/* Opportunities Section */}
//       <Card className="p-3 bg-white shadow-sm">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center">
//             <Briefcase className="w-4 h-4 text-teal-600 mr-2" />
//             <h2 className="font-semibold text-teal-600">Opportunities</h2>
//           </div>
//           <Button variant="ghost" size="sm" className="h-7 px-2 text-teal-600 hover:bg-teal-100">
//             <Plus className="w-4 h-4" />
//           </Button>
//         </div>
//         <hr className="border-gray-200 mb-3" />
//         <div className="space-y-2">
//           {[
//             { title: "Presentation", type: "Soft Skill", timeAgo: "1h ago" },
//             { title: "Corona Unity", type: "Exp.", timeAgo: "1h ago" },
//             { title: "Excel Working", type: "Hard Skill", timeAgo: "1h ago" }
//           ].map((opp, index) => (
//             <div 
//               key={index}
//               className="group flex items-center justify-between p-2 rounded-md hover:bg-teal-50 transition-colors"
//             >
//               <div>
//                 <p className="text-sm font-medium text-gray-800">{opp.title}</p>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-xs text-gray-500">{opp.type}</span>
//                   <span className="text-xs text-gray-400">•</span>
//                   <span className="text-xs text-gray-500">{opp.timeAgo}</span>
//                 </div>
//               </div>
//               <Button 
//                 size="sm" 
//                 variant="ghost" 
//                 className="opacity-0 group-hover:opacity-100 h-7 px-2 text-teal-600 hover:bg-teal-100"
//               >
//                 <Plus className="w-4 h-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       </Card>

//       {/* Messages Section */}
//       <Card className="p-3 bg-white shadow-sm">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center">
//             <MessageSquare className="w-4 h-4 text-teal-600 mr-2" />
//             <h2 className="font-semibold text-teal-600">Messages</h2>
//           </div>
//           <Button variant="ghost" size="sm" className="h-7 px-2 text-teal-600 hover:bg-teal-100">
//             <ArrowRight className="w-4 h-4" />
//           </Button>
//         </div>
//         <hr className="border-gray-200 mb-3" />
//         <div className="space-y-3">
//           {[
//             { name: "Dorothy Richards", message: "Don't forget to work on assignment page 36..." },
//             { name: "Ernest Williamson", message: "Have you made history assignment?" }
//           ].map((message, index) => (
//             <div 
//               key={index} 
//               className="group flex items-start space-x-3 p-2 rounded-md hover:bg-teal-50 transition-colors cursor-pointer"
//             >
//               <div className="w-8 h-8 rounded-full bg-teal-200 flex-shrink-0" />
//               <div className="min-w-0 flex-1">
//                 <p className="text-sm font-medium text-gray-800 truncate">{message.name}</p>
//                 <p className="text-xs text-gray-500 truncate">{message.message}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Card>

//       {/* Career Assistant Section */}
//       <Card className="p-3 bg-white shadow-sm">
//         <div className="flex items-center justify-between mb-2">
//           <div className="flex items-center">
//             <Bot className="w-4 h-4 text-teal-600 mr-2" />
//             <h2 className="font-semibold text-teal-600">Career Assistant</h2>
//           </div>
//         </div>
//         <hr className="border-gray-200 mb-3" />
        
//         <Button 
//           variant="solid" 
//           className="w-full justify-between mb-2 text-white bg-teal-600 hover:bg-teal-700"
//           onClick={() => setIsPromptMenuOpen(!isPromptMenuOpen)}
//         >
//           <span>Select a prompt</span>
//           {isPromptMenuOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
//         </Button>

//         <div className="bg-gray-50 p-2 rounded-md">
//           <div className="flex items-center space-x-2 mb-2">
//             <Bot className="w-4 h-4 text-teal-600" />
//             <p className="text-sm text-gray-600">Document your journey through chat...</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <div className="flex-1 h-8 bg-white rounded border border-gray-200"></div>
//             <Button size="sm" variant="ghost" className="text-teal-600 hover:bg-teal-100">
//               <Mic className="w-4 h-4" />
//             </Button>
//             <Button size="sm" variant="ghost" className="text-teal-600 hover:bg-teal-100">
//               <Paperclip className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center mt-2">
//           <span className="text-xs text-teal-600 underline cursor-pointer hover:text-teal-700">History</span>
//           <Button size="sm" className="bg-teal-600 text-white hover:bg-teal-700">
//             <MessageSquare className="w-3 h-3 mr-1" />
//             Chat
//           </Button>
//         </div>
//       </Card>
//     </aside>
//   );
// }

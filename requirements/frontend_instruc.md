# Project Overview

Transforming Disabled Talent Experience within Organisations with a New HR Platform:
Reimagining Inclusion for the Future Ensuring Legal Compliance Through AI-powered Solutions
Tracq is an AI-powered HR platform designed to empower disabled employees and
support organizations by reimagining inclusion with compliance-focused solutions that
meet disability laws and regulations.

By redefining performance tracking, management tools, AI-driven training, and development
programs, Tracq fosters a compliant, inclusive workplace tailored specifically for disabled and
neurodivergent users.

## 1. Tech Stack & Architecture
- **Frontend**: Next.js 14 with App Router
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **AI Integration**: Claude API
- **Authentication**: Supabase Auth

## 2. Project Structure

```

tracq/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── disabled-user/
│   │   │   └── page.tsx
│   │   ├── manager/
│   │   │   └── page.tsx
│   │   └── hr/
│   │       └── page.tsx
│   └── layout.tsx
├── components/
│   ├── shared/
│   │   ├── navigation/
│   │   │   └── Navbar.tsx
│   │   └── layouts/
│   │       └── DashboardLayout.tsx
│   ├── disabled-user/
│   ├── manager/
│   └── hr/
├── lib/
│   ├── supabase/
│   │   └── client.ts
│   ├── claude/
│   └── utils/
└── types/
    └── index.ts

```

# File Structure 

/app
  layout.tsx            // Root layout (global providers, global styles)
  page.tsx              // Home page (could redirect based on user role)
  
  /dashboard
    layout.tsx          // Global Dashboard layout (common header/sidebar)
    page.tsx            // Main dashboard page for all users
    
    /disabled-user      // Disabled User-specific section
      layout.tsx        // Layout specifically for disabled-user
      page.tsx          // Main disabled-user dashboard page
      /opportunities
        page.tsx        // Disabled-user's Opportunities page
      /performance-review
        page.tsx        // Disabled-user's Performance Review page
      /inbox
        page.tsx        // Disabled-user's Inbox page
      /settings
        page.tsx        // Disabled-user's Settings page

    /manager            // Manager-specific section
      layout.tsx        // Layout specifically for managers
      page.tsx          // Main manager dashboard page
      /team-management
        page.tsx        // Manager's Team Management page
      /reports
        page.tsx        // Manager's Reports page
      /inbox
        page.tsx        // Manager's Inbox page
      /settings
        page.tsx        // Manager's Settings page

    /hr                 // HR-specific section
      layout.tsx        // Layout specifically for HR users
      page.tsx          // Main HR dashboard page
      /candidate-review
        page.tsx        // HR's Candidate Review page
      /job-postings
        page.tsx        // HR's Job Postings page
      /inbox
        page.tsx        // HR's Inbox page
      /settings
        page.tsx        // HR's Settings page

  /components
    /ui                 // Shared UI components (e.g., Button, Input, etc.)
    /dashboard          // Shared dashboard components (Sidebar, Header, etc.)
      sidebar.tsx
      header.tsx
      opportunity-list.tsx
      message-list.tsx



















# Feature Requirements 


 ## Basic framework for your Tracq HR platform MVP

### Step 1: Dashboard Implementation        
  
  Design base framework for multi-user platform I need to showcase, each with their own dashboard...

        - DisabledUser Dashboard
        - Manager Dashboard
        - HRDashboard Dashboard 

    1. Implement existing disabled-user dashboard
    2. Create simplified versions for manager and HR
    3. Add user switching mechanism
    4. Implement shared components

  2.  AIChat component: This implements your MVP Functionality 0, providing an AI-powered chat feature that can interact with the application data.
    
    The AIChat component is included in each dashboard page.We've added an API route (pages/api/ai-chat.ts) to handle the backend logic for the AI chat. This is where you'd integrate with an AI service like OpenAI's GPT-3 or GPT-4.




# Relevant documentation 
Finding relevant models : https://replicate.com 


--------------------------------

# Rules
- All new components should go in /components and be named like example-component.ts unless otherwise specified
- All new pages go in 
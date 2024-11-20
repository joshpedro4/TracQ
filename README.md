This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## File Structure 

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



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

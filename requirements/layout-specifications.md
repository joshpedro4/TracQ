# Dashboard Layout Specifications

## Core Layout Structure
```
- Viewport: h-screen (100vh)
- Layout Type: 3-column layout
  - Left Sidebar: w-64 (256px fixed width)
  - Main Content: flex-1 (flexible)
  - Right Sidebar: w-80 (320px fixed width)
```

## Spacing System
```
- Base padding/margins:
  - Container padding: p-6 (1.5rem, 24px)
  - Main content padding: p-8 (2rem, 32px)
  - Card padding: p-4 (1rem, 16px)
  - Gap between grid items: gap-6 (1.5rem, 24px)
  - Gap between sections: mb-8 (2rem, 32px)
  - Navigation items padding: py-2 px-4 (top/bottom: 0.5rem, left/right: 1rem)
```

## Grid Systems
```
- Progress Cards: grid-cols-3
- Task/Career Section: grid-cols-2
- Gap between cards: gap-6 or gap-8
```

## Component Dimensions
```
- Avatar sizes:
  - Profile: w-20 h-20 (5rem, 80px)
  - User thumbnails: w-8 h-8 (2rem, 32px)
  - Message avatars: w-10 h-10 (2.5rem, 40px)
  
- Progress bars:
  - Height: h-1 (0.25rem, 4px)
  
- Icon sizes:
  - Navigation icons: size={20}
  - Search icon: size={20}
  
- Border radius:
  - Cards: rounded-lg (0.5rem, 8px)
  - Buttons: rounded-lg
  - Search input: rounded-full
```

## Typography Scale
```
- Headings:
  - Main title: text-3xl (1.875rem, 30px)
  - Card titles: text-xl (1.25rem, 20px)
  - Section headers: text-lg (1.125rem, 18px)
  
- Body text:
  - Regular: text-base (1rem, 16px)
  - Small: text-sm (0.875rem, 14px)
  
- Font weights:
  - Bold: font-bold
  - Semibold: font-semibold
  - Medium: font-medium
  - Regular: default
```

## Color System
```
- Brand colors:
  - Primary: purple-600
  - Secondary: cyan-400
  - Accent: orange-400
  
- Background colors:
  - Main bg: bg-gray-100
  - Sidebar bg: bg-white
  - Card bg: bg-white
  
- Text colors:
  - Primary: text-gray-800
  - Secondary: text-gray-600
  - Muted: text-gray-500
  
- Status/Accent colors:
  - Success: green-500
  - Active state: purple-50 (for nav items)
```

## Component Specific Patterns

### Cards
```
- Structure:
  - Padding: p-6
  - Header spacing: pb-2
  - Content spacing: space-y-4
  - Border radius: rounded-lg
```

### Navigation
```
- Item structure:
  - Height: py-2
  - Horizontal padding: px-4
  - Icon spacing: mr-3
  - Hover state: hover:bg-gray-50
  - Active state: bg-purple-50 text-purple-600
```

### Task Items
```
- Structure:
  - Vertical spacing: space-y-4
  - Left indicator: w-1 h-10
  - Content spacing: mr-4
```

### Input Fields
```
- Search bar:
  - Padding left (icon): pl-10
  - Padding right: pr-4
  - Height: py-2
  - Border radius: rounded-full
```

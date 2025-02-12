type Score = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface Task {
  id: string
  name: string
  status: "To Do" | "In Progress" | "Code Review" | "Accepted"
  engineerId: string
}

export interface PR {
  id: string
  name: string
  status: "Accepted" | "Pending" | "Rejected"
  engineerId: string
  scores: {
    readability: Score
    performance: Score
    testCoverage: Score
    maintainability: Score
  }
}

export interface Engineer {
  id: string
  avatar: string
  name: string
  email: string
  tasks: number[]
  prs: number[]
}

export const PRs: PR[] = [
  {
    id: "1",
    name: "PR for Implement responsive navbar",
    status: "Pending",
    engineerId: "10",
    scores: {
      readability: 3,
      performance: 1,
      testCoverage: 0,
      maintainability: 7,
    },
  },
  {
    id: "2",
    name: "PR for Develop reusable UI components",
    status: "Rejected",
    engineerId: "9",
    scores: {
      readability: 5,
      performance: 1,
      testCoverage: 3,
      maintainability: 10,
    },
  },
  {
    id: "3",
    name: "PR for Optimize React performance",
    status: "Accepted",
    engineerId: "1",
    scores: {
      readability: 3,
      performance: 8,
      testCoverage: 4,
      maintainability: 4,
    },
  },
  {
    id: "4",
    name: "PR for Refactor CSS to Tailwind",
    status: "Accepted",
    engineerId: "6",
    scores: {
      readability: 1,
      performance: 10,
      testCoverage: 5,
      maintainability: 10,
    },
  },
  {
    id: "5",
    name: "PR for Enhance accessibility compliance",
    status: "Accepted",
    engineerId: "2",
    scores: {
      readability: 9,
      performance: 10,
      testCoverage: 9,
      maintainability: 2,
    },
  },
  {
    id: "6",
    name: "PR for Integrate third-party UI library",
    status: "Rejected",
    engineerId: "1",
    scores: {
      readability: 7,
      performance: 5,
      testCoverage: 0,
      maintainability: 1,
    },
  },
  {
    id: "7",
    name: "PR for Develop a dark mode toggle",
    status: "Rejected",
    engineerId: "2",
    scores: {
      readability: 5,
      performance: 2,
      testCoverage: 10,
      maintainability: 9,
    },
  },
  {
    id: "8",
    name: "PR for Optimize form validation logic",
    status: "Rejected",
    engineerId: "10",
    scores: {
      readability: 8,
      performance: 0,
      testCoverage: 10,
      maintainability: 8,
    },
  },
  {
    id: "9",
    name: "PR for Create animations with Framer Motion",
    status: "Pending",
    engineerId: "2",
    scores: {
      readability: 1,
      performance: 7,
      testCoverage: 0,
      maintainability: 9,
    },
  },
  {
    id: "10",
    name: "PR for Implement infinite scrolling",
    status: "Rejected",
    engineerId: "8",
    scores: {
      readability: 7,
      performance: 10,
      testCoverage: 2,
      maintainability: 2,
    },
  },
  {
    id: "11",
    name: "PR for Fix cross-browser compatibility issues",
    status: "Pending",
    engineerId: "9",
    scores: {
      readability: 1,
      performance: 8,
      testCoverage: 3,
      maintainability: 1,
    },
  },
  {
    id: "12",
    name: "PR for Refactor state management with Redux",
    status: "Rejected",
    engineerId: "1",
    scores: {
      readability: 10,
      performance: 0,
      testCoverage: 2,
      maintainability: 5,
    },
  },
  {
    id: "13",
    name: "PR for Improve client-side caching strategy",
    status: "Accepted",
    engineerId: "6",
    scores: {
      readability: 9,
      performance: 10,
      testCoverage: 2,
      maintainability: 4,
    },
  },
  {
    id: "14",
    name: "PR for Optimize image loading performance",
    status: "Accepted",
    engineerId: "7",
    scores: {
      readability: 6,
      performance: 7,
      testCoverage: 0,
      maintainability: 4,
    },
  },
  {
    id: "15",
    name: "PR for Develop a multi-language switch",
    status: "Rejected",
    engineerId: "2",
    scores: {
      readability: 4,
      performance: 4,
      testCoverage: 9,
      maintainability: 1,
    },
  },
  {
    id: "16",
    name: "PR for Create a dynamic theme system",
    status: "Pending",
    engineerId: "10",
    scores: {
      readability: 3,
      performance: 7,
      testCoverage: 2,
      maintainability: 9,
    },
  },
  {
    id: "17",
    name: "PR for Implement authentication flow",
    status: "Accepted",
    engineerId: "1",
    scores: {
      readability: 4,
      performance: 2,
      testCoverage: 8,
      maintainability: 4,
    },
  },
  {
    id: "18",
    name: "PR for Develop a drag-and-drop UI",
    status: "Accepted",
    engineerId: "8",
    scores: {
      readability: 9,
      performance: 10,
      testCoverage: 6,
      maintainability: 2,
    },
  },
  {
    id: "19",
    name: "PR for Build a real-time chat feature",
    status: "Accepted",
    engineerId: "5",
    scores: {
      readability: 0,
      performance: 6,
      testCoverage: 2,
      maintainability: 0,
    },
  },
  {
    id: "20",
    name: "PR for Refactor and modularize UI code",
    status: "Rejected",
    engineerId: "9",
    scores: {
      readability: 8,
      performance: 10,
      testCoverage: 2,
      maintainability: 8,
    },
  },
]

export const Tasks: Task[] = [
  {
    id: "1",
    name: "Implement responsive navbar",
    status: "Accepted",
    engineerId: "10",
  },
  {
    id: "2",
    name: "Develop reusable UI components",
    status: "Code Review",
    engineerId: "9",
  },
  {
    id: "3",
    name: "Optimize React performance",
    status: "Accepted",
    engineerId: "1",
  },
  {
    id: "4",
    name: "Refactor CSS to Tailwind",
    status: "Code Review",
    engineerId: "6",
  },
  {
    id: "5",
    name: "Enhance accessibility compliance",
    status: "In Progress",
    engineerId: "2",
  },
  {
    id: "6",
    name: "Integrate third-party UI library",
    status: "Accepted",
    engineerId: "1",
  },
  {
    id: "7",
    name: "Develop a dark mode toggle",
    status: "Code Review",
    engineerId: "2",
  },
  {
    id: "8",
    name: "Optimize form validation logic",
    status: "Code Review",
    engineerId: "10",
  },
  {
    id: "9",
    name: "Create animations with Framer Motion",
    status: "In Progress",
    engineerId: "2",
  },
  {
    id: "10",
    name: "Implement infinite scrolling",
    status: "In Progress",
    engineerId: "8",
  },
  {
    id: "11",
    name: "Fix cross-browser compatibility issues",
    status: "Code Review",
    engineerId: "9",
  },
  {
    id: "12",
    name: "Refactor state management with Redux",
    status: "To Do",
    engineerId: "1",
  },
  {
    id: "13",
    name: "Improve client-side caching strategy",
    status: "To Do",
    engineerId: "6",
  },
  {
    id: "14",
    name: "Optimize image loading performance",
    status: "Accepted",
    engineerId: "7",
  },
  {
    id: "15",
    name: "Develop a multi-language switch",
    status: "Accepted",
    engineerId: "2",
  },
  {
    id: "16",
    name: "Create a dynamic theme system",
    status: "In Progress",
    engineerId: "10",
  },
  {
    id: "17",
    name: "Implement authentication flow",
    status: "To Do",
    engineerId: "1",
  },
  {
    id: "18",
    name: "Develop a drag-and-drop UI",
    status: "Accepted",
    engineerId: "8",
  },
  {
    id: "19",
    name: "Build a real-time chat feature",
    status: "In Progress",
    engineerId: "5",
  },
  {
    id: "20",
    name: "Refactor and modularize UI code",
    status: "Accepted",
    engineerId: "9",
  },
  {
    id: "21",
    name: "Improve lazy loading strategy",
    status: "Code Review",
    engineerId: "9",
  },
  {
    id: "22",
    name: "Implement WebSockets for live updates",
    status: "In Progress",
    engineerId: "9",
  },
  {
    id: "23",
    name: "Develop a custom date picker component",
    status: "In Progress",
    engineerId: "6",
  },
  {
    id: "24",
    name: "Enhance dashboard UI/UX",
    status: "Accepted",
    engineerId: "1",
  },
  {
    id: "25",
    name: "Create a timeline visualization component",
    status: "In Progress",
    engineerId: "6",
  },
  {
    id: "26",
    name: "Improve mobile-first design",
    status: "Accepted",
    engineerId: "9",
  },
  {
    id: "27",
    name: "Fix layout shifts (CLS issues)",
    status: "To Do",
    engineerId: "5",
  },
  {
    id: "28",
    name: "Develop a progress tracking component",
    status: "In Progress",
    engineerId: "2",
  },
  {
    id: "29",
    name: "Implement a sidebar navigation system",
    status: "In Progress",
    engineerId: "9",
  },
  {
    id: "30",
    name: "Improve tooltip accessibility",
    status: "Code Review",
    engineerId: "9",
  },
]

export const Engineers: Engineer[] = [
  {
    id: "1",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "John Smith",
    email: "john.smith@gmail.com",
    tasks: [4, 29, 19, 17],
    prs: [6],
  },
  {
    id: "2",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Alice Johnson",
    email: "alice.johnson@gmail.com",
    tasks: [11, 1],
    prs: [7, 5, 18],
  },
  {
    id: "3",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    name: "Robert Brown",
    email: "robert.brown@gmail.com",
    tasks: [5, 15, 6, 28, 17],
    prs: [9, 13, 18],
  },
  {
    id: "4",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    email: "emily.davis@gmail.com",
    tasks: [28, 14, 29],
    prs: [19, 12, 18, 13],
  },
  {
    id: "5",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    name: "Michael Wilson",
    email: "michael.wilson@gmail.com",
    tasks: [3, 6, 22, 26],
    prs: [2, 16, 19, 7],
  },
  {
    id: "6",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sophia Martinez",
    email: "sophia.martinez@gmail.com",
    tasks: [8, 29, 26, 11, 18],
    prs: [16, 11, 10, 9],
  },
  {
    id: "7",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Daniel Anderson",
    email: "daniel.anderson@gmail.com",
    tasks: [23, 1, 25, 21],
    prs: [7, 10],
  },
  {
    id: "8",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Olivia Thomas",
    email: "olivia.thomas@gmail.com",
    tasks: [2, 7],
    prs: [14, 15, 19],
  },
  {
    id: "9",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "James White",
    email: "james.white@gmail.com",
    tasks: [28, 23, 27, 22],
    prs: [10, 9, 20, 13],
  },
  {
    id: "10",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Emma Harris",
    email: "emma.harris@gmail.com",
    tasks: [27, 5, 9, 20, 17],
    prs: [2, 9, 4],
  },
]

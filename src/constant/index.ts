import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconReport,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

interface NavItem {
  id: number;
  path: string;
  label: string;
}

const navigation: NavItem[] = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 5,
    path: "/homestays",
    label: "Homestays",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },

  {
    id: 3,
    path: "/contact",
    label: "Contact",
  },
  {
    id: 4,
    path: "/dashboard",
    label: "Dashboard",
  },
];

const dashboardData = {
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: IconUsers,
    },
    {
      title: "My Rooms",
      url: "/dashboard/my-rooms",
      icon: IconChartBar,
    },
    {
      title: "All Rooms",
      url: "#",
      icon: IconFolder,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/dashboard/help",
      icon: IconHelp,
    },
  ],
  documents: [
    {
      name: "Home",
      url: "/",
      icon: IconDatabase,
    },
    {
      name: "Rooms",
      url: "/rooms",
      icon: IconReport,
    },
    {
      name: "Contact Us",
      url: "/contact",
      icon: IconFileWord,
    },
  ],
};

export { navigation, dashboardData };

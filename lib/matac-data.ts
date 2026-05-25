export type ApplicationStatus = "Interview" | "Applied" | "Saved" | "Rejected";

export const navLinks = [
  "Dashboard",
  "Jobs",
  "CV Builder",
  "Saved Jobs",
  "Insights",
] as const;

export const applications = [
  {
    company: "Figma",
    role: "Product Designer",
    status: "Interview" as ApplicationStatus,
    logoBg: "#1e1e1e",
    logoLabel: "F",
  },
  {
    company: "Notion",
    role: "UX Researcher",
    status: "Applied" as ApplicationStatus,
    logoBg: "#000000",
    logoLabel: "N",
  },
  {
    company: "Airbnb",
    role: "Marketing Manager",
    status: "Saved" as ApplicationStatus,
    logoBg: "#ff5a5f",
    logoLabel: "A",
  },
  {
    company: "Stripe",
    role: "Frontend Engineer",
    status: "Rejected" as ApplicationStatus,
    logoBg: "#635bff",
    logoLabel: "S",
  },
] as const;

export const jobCategories = [
  "All",
  "Design",
  "Marketing",
  "Product",
  "Engineering",
  "Data",
] as const;

export type JobCategory = (typeof jobCategories)[number];

export const jobs = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "Figma",
    location: "Remote",
    posted: "2h ago",
    category: "Design" as JobCategory,
    logoBg: "#1e1e1e",
    logoLabel: "F",
  },
  {
    id: "2",
    title: "UX Researcher",
    company: "Notion",
    location: "Remote",
    posted: "5h ago",
    category: "Design" as JobCategory,
    logoBg: "#000000",
    logoLabel: "N",
  },
  {
    id: "3",
    title: "Growth Marketing Lead",
    company: "Monday.com",
    location: "Tel Aviv",
    posted: "1d ago",
    category: "Marketing" as JobCategory,
    logoBg: "#6161ff",
    logoLabel: "M",
  },
  {
    id: "4",
    title: "Product Manager",
    company: "Wix",
    location: "Tel Aviv",
    posted: "2d ago",
    category: "Product" as JobCategory,
    logoBg: "#0c6efc",
    logoLabel: "W",
  },
  {
    id: "5",
    title: "Full Stack Engineer",
    company: "monday.com",
    location: "Hybrid",
    posted: "3h ago",
    category: "Engineering" as JobCategory,
    logoBg: "#6161ff",
    logoLabel: "m",
  },
  {
    id: "6",
    title: "Data Analyst",
    company: "Google",
    location: "Remote",
    posted: "4h ago",
    category: "Data" as JobCategory,
    logoBg: "#4285f4",
    logoLabel: "G",
  },
  {
    id: "7",
    title: "Visual Designer",
    company: "Canva",
    location: "Remote",
    posted: "6h ago",
    category: "Design" as JobCategory,
    logoBg: "#00c4cc",
    logoLabel: "C",
  },
  {
    id: "8",
    title: "Backend Engineer",
    company: "Stripe",
    location: "Remote",
    posted: "8h ago",
    category: "Engineering" as JobCategory,
    logoBg: "#635bff",
    logoLabel: "S",
  },
] as const;

export const footerLinks = {
  Product: ["Dashboard", "Jobs", "CV Builder", "Saved Jobs"],
  Company: ["About Us", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service"],
} as const;

import { Calendar, Clock, MapPin } from "lucide-react";

export const DETAIL_EVENTS = [
  {
    Icon: <MapPin className="text-blue-600 h-5 w-5 flex-shrink-0" />,
    title: "Soehanna Hall, Jakarta, Indonesia",
  },
  {
    Icon: <Calendar className="text-blue-600 h-5 w-5 flex-shrink-0" />,
    title: " Tuesday, November 11, 2025",
  },
  {
    Icon: <Clock className="text-blue-600 h-5 w-5 flex-shrink-0" />,
    title: "13:00 - 19:00",
  },
];

export const BENEFIT_LIST = [
  {
    title: "Direct Access to Industry Leaders and Capital:",
    desc: "  At NSC, directly connect with industry leaders and innovators, securing funding and partnerships to boost your startup's growth.",
  },
  {
    title: " Showcase Your Startup Among the Best:",
    desc: "Stand out at NSC as one of the top 10 finalists among hundreds of startups, gaining exposure and recognition to elevate your presence in the SEA startup ecosystem.",
  },
  {
    title: "Leverage NTT's Ecosystem for Growth:",
    desc: " Utilize NSC's unique access to NTT group's resources, technology, and partnerships to expand your startup in SEA and Japan, exploring sectors like Fintech, Agritech, and AI.",
  },
];

export const SCHEDULE_DATA = [
  {
    time: "12:30-13:00",
    content: "Venue Opening",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "13:00-13:10",
    content: "Opening Remarks",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "13:10-13:20",
    content: " Keynote",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "13:20-13:30",
    content: "Keynote 2",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "13:30-14:20",
    content: "Startup Pitch® (5min/Q&A 3min/Transition 2min) x 5 Startups",
    isHighlighted: true,
    isBreak: false,
  },
  {
    time: "14:20-14:30",
    content: "Break",
    presenter: "",
    isHighlighted: false,
    isBreak: true,
  },
  {
    time: "14:30-15:00",
    content: "Panel Discussion",
    isHighlighted: true,
    isBreak: false,
  },
  {
    time: "15:00-15:50",
    content: "Startup Pitch (5min/Q&A 3min/Transition 2min) x 5 Startups",
    isHighlighted: true,
    isBreak: false,
  },
  {
    time: "15:50-16:10",
    content: "NTT Presentation",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "14:20-14:30",
    content: "Break",
    presenter: "",
    isHighlighted: false,
    isBreak: true,
  },
  {
    time: "16:30-17:00",
    content: "Award",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "17:00-17:10",
    content: "Closing Remarks",
    isHighlighted: false,
    isBreak: false,
  },
  {
    time: "17:10-17:30",
    content: "Break",
    presenter: "",
    isHighlighted: false,
    isBreak: true,
  },
  {
    time: "17:30-19:00",
    content: "Private Event / Networking",
    isHighlighted: true,
    isBreak: false,
  },
];

export const NTT_CONNECT = [
  {
    id: "docomo-ventures",
    name: "NTT DOCOMO Ventures",
    logo: "/placeholder.svg?height=200&width=300",
    features: [
      {
        title: "Venture capital arm of NTT DOCOMO:",
        description:
          "Actively engaged in open innovation, facilitating strategic collaborations between startups and the NTT Group.",
      },
      {
        title: "Potential investment:",
        description:
          "Operates one of Japan's largest corporate venture funds, investing in leading companies worldwide for over a decade.",
      },
      {
        title: "Mentorship and PR on owned media:",
        description:
          "Introduces startups to a broad VC network and boosts startups' visibility through PR on owned media.",
      },
    ],
  },
  {
    id: "ntt-east",
    name: "NTT East",
    logo: "/placeholder.svg?height=200&width=300",
    features: [
      {
        title: "A provider of fiber optic Internet services in the East Japan:",
        description: "Supports communities with a robust ICT infrastructure.",
      },
      {
        title:
          "Innovation through its initiatives, NTTe-Asia and NTT e-City Labo:",
        description:
          "Support sustainable community development and technological innovation.",
      },
      {
        title: "Cross-Asia Collaboration/Expansion:",
        description:
          "Offers comprehensive support to businesses aiming to enter or expand market, leveraging their extensive network and expertise.",
      },
    ],
    imageRight: true,
  },
  {
    id: "ntt-west",
    name: "NTT West",
    logo: "/placeholder.svg?height=200&width=300",
    features: [
      {
        title: "Innovating Western Japan:",
        description:
          "Leads in telecommunications, powering connectivity across western Japan. Committed to integrity and innovation, offers resourceful infrastructure and opportunities for growth in our dynamic region.",
      },
      {
        title: "Dynamic Learning Experiences:",
        description:
          'QUINTBRIDGE provides engaging programs and events focused on "Learn", "Interact", and "Co-create" axes, empowering participants to expand their knowledge and skills in a vibrant learning environment.',
      },
    ],
  },
  {
    id: "ntt-finance",
    name: "NTT Finance",
    logo: "/placeholder.svg?height=200&width=300",
    features: [
      {
        title: "Fueling Startup Success with Strategic Investments:",
        description:
          "Positioned within the NTT Group, NTT FINANCE engages in investments in both Japanese and overseas venture companies, enhancing startup growth and innovation.",
      },
      {
        title: "Comprehensive Support:",
        description:
          "Offers a suite of financial services and facilitates introductions to other NTT Group entities, bolstering the success of invested companies.",
      },
      {
        title: "Collaborative Network:",
        description:
          "Partnering with venture capital and financial institutions globally, investee companies receive extensive support and access to diverse resources.",
      },
    ],
    imageRight: true,
  },
  {
    id: "docomo-business",
    name: "NTT DOCOMO Business / NTT Communications",
    logo: "/placeholder.svg?height=200&width=300",
    features: [
      {
        title: "Expertise in Long Distance Networks and Enterprise Support:",
        description:
          "Leverage our extensive network management and enterprise client insights to advance your startup's market achievements.",
      },
      {
        title: "Dynamic Co-Creation:",
        description:
          "Engage in open innovation programs that drive impactful solutions and societal benefits.",
      },
      {
        title: "Startup-Focused Collaboration:",
        description:
          "Gain priority as we focus specifically on partnerships with startups to amplify your innovative potential.",
      },
    ],
  },
  {
    id: "ntt-docomo",
    name: "NTT DOCOMO",
    logo: "/placeholder.svg?height=200&width=300",
    features: [
      {
        title: "Leading Mobile Innovator:",
        description:
          "Japan's largest telecommunications company pioneers innovative mobile services, serving over 75 million customers with advanced LTE and 5G/6G networks, and driving global 5G development through cutting-edge technologies like IoT.",
      },
      {
        title: "Employee-led Innovation Initiatives:",
        description:
          "Drives innovation with employee-led initiatives and resources, fostering startup growth from concept to market. Startups benefit financially from our open innovation model.",
      },
    ],
    imageRight: true,
  },
];

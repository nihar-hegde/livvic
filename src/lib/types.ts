export interface UserAbout {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  avatar: {
    public_id: string;
    url: string;
    _id: string;
  };
  alternateAvatars: any[]; // Assuming this could contain diverse data
}

export interface TimelineItem {
  company_name: string;
  summary: string;
  sequence: number;
  icon: {
    public_id: string;
    url: string;
  };
  startDate: string; // Assuming ISO 8601 format
  endDate: string; // Assuming ISO 8601 format
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}

export interface Skill {
  name: string;
  sequence: number;
  percentage: number;
  image: {
    public_id: string;
    url: string;
  };
  _id: string;
  enabled: boolean;
}

export interface YoutubeVideo {
  url: string;
  title: string;
  sequence: number;
  image: string | null; // Could be a URL or null
  embedId: string;
  enabled: boolean;
  _id: string;
}

export interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: {
    public_id: string;
    url: string;
  };
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
}

export interface SocialHandle {
  enabled: boolean;
  platform: string;
  url: string;
  image: {
    public_id: string;
    url: string;
  };
  _id: string;
}

export interface Service {
  name: string;
  charge: string;
  desc: string;
  image: {
    public_id: string;
    url: string;
  };
  _id: string;
  enabled: boolean;
}

export interface Testimonial {
  image: {
    public_id: string;
    url: string;
  };
  name: string;
  review: string;
  position: string;
  enabled: boolean;
  _id: string;
}

export interface User {
  success: boolean; // Added success property
  user: {
    about: UserAbout;
    _id: string;
    username: string;
    email: string;
    role: string;
    timeline: TimelineItem[];
    skills: Skill[];
    youtube: YoutubeVideo[];
    projects: Project[];
    social_handles: SocialHandle[];
    services: Service[];
    testimonials: Testimonial[];
    createdAt: string; // Assuming ISO 8601 format
    updatedAt: string; // Assuming ISO 8601 format
    __v: number;
    refreshToken: string;
  };
}

"use client";

import { Timeline } from "./ui/Timeline";
import Image from "next/image";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface Experience {
  id: string;
  title: string;
  role: string;
  date: string;
  logo: string;
  technologies: {
    name: string;
    logo: string;
    width?: string;
  }[];
  achievements: string[];
  isActive?: boolean;
}

interface Education {
  id: string;
  title: string;
  degree: string;
  date: string;
  logo: string;
  honors: string;
  gpa: string;
  isActive?: boolean;
}

interface TimelineData {
  year: string;
  items: (Experience | Education)[];
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className={experience.isActive ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg" : ""}>
      <div className="flex flex-col mb-4">
        <div className="relative w-[100px] h-[50px]">
          <Image
            src={experience.logo}
            alt={`${experience.title} Logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{experience.title}</p>
          <p className="text-sm text-neutral-500">{experience.role}</p>
          <p className="text-xs text-neutral-400">{experience.date}</p>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        {experience.technologies.map((tech, index) => (
          <div key={index} className={`relative ${tech.width || 'w-8'} h-8`}>
            <Image
              src={tech.logo}
              alt={`${tech.name} Logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {experience.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

const EducationCard = ({ education }: { education: Education }) => {
  return (
    <div className={education.isActive ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 rounded-lg" : ""}>
      <div className="flex flex-col mb-2">
        <div className="relative w-12 h-12">
          <Image
            src={education.logo}
            alt={`${education.title} Logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{education.title}</p>
          <p className="text-sm text-neutral-500">{education.degree}</p>
        </div>
      </div>
      <div className="pl-16">
        <p className="text-sm text-purple-500 font-medium">{education.honors}</p>
        <p className="text-sm">{education.gpa}</p>
      </div>
    </div>
  );
};

const timelineData: TimelineData[] = [
    {
      year: "April 2024",
      items: [
        {
          id: "iti-2024",
          title: "ITI",
          role: "Full Stack Development Diploma Intensive Code Camp - New Capital ",
          date: "April 2024",
          logo: "/iti-logo.webp",
          technologies: [
            { name: "Laravel", logo: "/laravel.svg" },
            { name: "Angular", logo: "/angular-logo.webp" },
            { name: "Node.js", logo: "/nodejs-logo.webp", width: "w-20" },
            { name: "MongoDB", logo: "/mongodb-logo.webp", width: "w-20" },
            { name: "MySQL", logo: "/mysql-logo.webp" },
            { name: "Docker", logo: "/dock.svg" }
          ],
          achievements: [
            "Intensive 4-month Full Stack Development program",
            "Mastered Laravel PHP framework for backend development",
            "Developed expertise in MEAN Stack (MongoDB, Express.js, Angular, Node.js)",
            "Built multiple full-stack applications from scratch",
            "Learned modern development practices and methodologies",
            "Gained experience in database design and optimization",
            "Implemented RESTful APIs and microservices architecture"
          ],
          isActive: true
        }
      ]
    },
    {
      year: "Nov 2023",
      items: [
        {
          id: "nti-ccna-2023",
          title: "National Telecommunication Institute (NTI)",
          role: "Cisco Certified Network Associate (CCNA) Course",
          date: "November 2023",
          logo: "/nti.png",
          technologies: [
            { name: "Cisco", logo: "/cisco-logo.png" }
          ],
          achievements: [
            "Completed intensive training in networking fundamentals",
            "Configured and managed Cisco routers and switches",
            "Gained hands-on experience with IPv4 and IPv6 subnetting",
            "Learned about routing protocols like RIP, OSPF, and EIGRP",
            "Studied LAN switching technologies and VLAN configurations"
          ]
        }
      ]
    },
    {
      year: "Oct 2023",
      items: [
        {
          id: "nti-frontend-2023",
          title: "Donia Elhosin Mohamed – NTI",
          role: "Front End Course (Intake #PHP 95 - Nasr)",
          date: "Oct 2023 – Mar 2024 (110 Hours)",
          logo: "/AMIT.svg",
          technologies: [
            { name: "HTML", logo: "/html-logo.webp" },
            { name: "CSS", logo: "/css-logo.webp" },
            { name: "JavaScript", logo: "/js-white-logo.webp" },
            { name: "React.js", logo: "/react-logo.webp" }
          ],
          achievements: [
            "Successfully completed a 110-hour Front End course",
            "Applied JavaScript fundamentals to dynamic web projects",
            "Created UI components with Bootstrap and jQuery"
          ]
        }
      ]
    },
    {
      year: "Jun 2023",
      items: [
        {
          id: "bgk-2023",
          title: "Bohemian Geeks",
          role: "Position : WordPress Developer",
          date: "Novamber 2024 - Present",
          logo: "/bgk-logo.png",
          technologies: [
            { name: "WordPress", logo: "/wp-logo.webp" },
            { name: "PHP", logo: "/php-logo.webp" }
          ],
          achievements: [
            "Developed custom WordPress themes and plugins",
            "Created custom sections and page builders",
            "Optimized website performance and security",
            "Worked with WooCommerce for e-commerce solutions",
            "Developed custom post types and taxonomies",
            "Created responsive and mobile-friendly designs"
          ]
        }
      ]
    },
    {
      year: "2023",
      items: [
        {
          id: "education-2023",
          title: "Egyptian Academy for Engineering and Advanced Technology",
          degree: "Electronics and Communication Engineering",
          date: "2023",
          logo: "/eaeat.webp",
          honors: "Graduated with Honors (3.431 CGPA)",
          gpa: "GPA: 3.4/4.0",
          isActive: true
        }
      ]
    }
  ];
  

const JobsTL = () => {
  const formattedTimelineData: TimelineItem[] = timelineData.map((yearData) => ({
    title: yearData.year,
    content: (
      <div className="text-neutral-700 dark:text-neutral-300">
        <div className="space-y-6">
          {yearData.items.map((item) => {
            if ('degree' in item) {
              return <EducationCard key={item.id} education={item as Education} />;
            } else {
              return <ExperienceCard key={item.id} experience={item as Experience} />;
            }
          })}
        </div>
      </div>
    ),
  }));

  return (
    <div className="w-full">
      <Timeline data={formattedTimelineData} />
    </div>
  );
};

export default JobsTL;
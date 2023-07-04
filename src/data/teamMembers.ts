export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  link: string;
}

export const teamMembers: Array<TeamMember> = [
  {
    id: 0,
    name: 'John Doe',
    position: 'Founder & CEO',
    image: 'images/profilefill.png',
    link: 'https://www.linkedin.com/',
  },
  {
    id: 1,
    name: 'Jane Smith',
    position: 'Chief Pizza Officer',
    image: 'images/profilefill.png',
    link: 'https://www.linkedin.com/',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    position: 'Lead Pizza Chef',
    image: 'images/profilefill.png',
    link: 'https://www.linkedin.com/',
  },
];

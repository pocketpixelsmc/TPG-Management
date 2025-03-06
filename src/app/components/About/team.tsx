import Image from "next/image";
import teamData from "@/data/team.json";

type TeamMember = {
  name: string;
  image: string;
  division: string;
  link?: string;  // Optional link for team members with websites
};

export default function Team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start p-4 gap-8">
      {teamData.teamMembers.map((member: TeamMember, index: number) => (
        <div key={index} className="flex flex-row justify-center content-center gap-4">
          <Image 
            src={member.image} 
            width={75} 
            height={75} 
            alt={member.name} 
            className="rounded-full w-[75px] h-[75px]" 
          />
          <div className="flex flex-col justify-center content-center gap-4">
            {member.link ? (
              <a 
                href={member.link} 
                target="_blank" 
                className="text-xl font-bold text-blue-900"
              >
                {member.name}
              </a>
            ) : (
              <h1 className="text-xl font-bold text-blue-900">{member.name}</h1>
            )}
            <p className="text-lg text-blue-950">{member.division}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import OptimizedImage from "@/components/ui/OptimizedImage";
import teamData from "@/data/team.json";

type TeamMember = {
  name: string;
  image: string;
  division: string;
  link?: string;  // Optional link for team members with websites
};

export default function Team() {
  return (
    <section 
      aria-labelledby="team-heading" 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-start p-4 gap-8"
    >
      <h2 id="team-heading" className="sr-only">Our Team Members</h2>
      {teamData.teamMembers.map((member: TeamMember, index: number) => (
        <article 
          key={member.name} 
          className="flex flex-row justify-center content-center gap-4"
        >
          <OptimizedImage 
            src={member.image} 
            width={75} 
            height={75} 
            alt={`${member.name} - ${member.division}`}
            className="rounded-full w-[75px] h-[75px]" 
          />
          <div className="flex flex-col justify-center content-center gap-4">
            {member.link ? (
              <a 
                href={member.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-900"
                aria-label={`Visit ${member.name}'s profile`}
              >
                {member.name}
              </a>
            ) : (
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
            )}
            <p className="text-lg text-blue-950">{member.division}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

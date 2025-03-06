import missionsData from "@/data/missions.json";

type Mission = {
    title: string;
    description: string;
};

export default function Missions() {
    return (
        <div className="m-0 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8 gap-8">
                {missionsData.missions.map((mission: Mission, index: number) => (
                    <div key={index} className="flex flex-col justify-start content-center gap-4 w-[300px] p-8 border-2 border-solid border-black rounded-md">
                        <h1 className="text-xl font-bold text-blue-900">{mission.title}</h1>
                        <p className="text-lg text-blue-950">{mission.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

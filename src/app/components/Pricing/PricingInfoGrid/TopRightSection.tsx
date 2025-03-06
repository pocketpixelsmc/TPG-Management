import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TopRightSection({ downloads }: { downloads: any[] }) {
  return (
    <div className="w-full md:w-1/2 bg-blue-900 p-8">
      <h2 className="text-white text-4xl font-bold mb-2">DOWNLOAD</h2>
      <p className="text-white mb-8">Forms and Information</p>
      <div className="grid grid-cols-2 gap-4">
        {downloads.map((download) => (
          <a href={download.href} target="_blank" rel="noreferrer" key={download.id}>
            <Card
              className="w-[200px] h-[200px] p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <FileText className="w-12 h-12 text-red-500 mb-2" />
              <p className="text-center text-sm font-medium">{download.title}</p>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
} 
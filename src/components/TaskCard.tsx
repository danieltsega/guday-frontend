// Components/TaskCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

type TaskCardProps = {
  title: string;
  description: string;
  coverImage: string;
  uploadDate: string;
  id: string;
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  coverImage,
  uploadDate,
  id,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <Image
        src={coverImage}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-500 text-sm mb-2">Uploaded on {uploadDate}</p>
        <p className="text-gray-700 mb-4">{description.slice(0, 100)}...</p>
        <Link href={`/tasks/${id}`}>
          <span className="text-blue-500 hover:underline">Read More</span>
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;

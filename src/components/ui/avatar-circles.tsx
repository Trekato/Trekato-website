"use client";

import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  avatarUrls: Avatar[];
}

export const AvatarCircles = ({
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="size-10 rounded-full border-2 border-white dark:border-gray-800 object-contain"
          src={url.imageUrl}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
    </div>
  );
};

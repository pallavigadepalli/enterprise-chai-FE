import Image from "next/image";

interface AvatarProps {
  src: any;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 8 }) => {
  return (
    <Image className={`h-${size} w-${size} rounded-tl-lg`} src={src} alt={alt} />
  );
};

export default Avatar;

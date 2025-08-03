interface FiFiTokenImgProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function FiFiTokenImg({ size = 'medium', className = '' }: FiFiTokenImgProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <img 
      src="/img/e4b5cb32-a5cb-423d-9fb3-5258f527f8be.jpg" 
      alt="FiFiToken" 
      className={`${sizeClasses[size]} ${className} rounded-full object-cover shadow-lg`}
    />
  );
}
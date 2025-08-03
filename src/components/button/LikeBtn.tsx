import { Heart } from 'lucide-react';
import { useState } from 'react';

export function ProductLikeBtn() {
  const [isLiked, setIsLiked] = useState(false);
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="absolute group right-4 bottom-4">
        <button onClick={handleToggle}>
          <Heart
            className={`w-[30px] h-[30px] cursor-pointer ${isLiked ? 'text-red-500 fill-red-500' : 'text-font-400'}`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </>
  );
}

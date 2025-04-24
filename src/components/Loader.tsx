
import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-tech-darkBlue z-50">
      <div className="text-4xl font-bold text-tech-purple mb-8">IMPACTSURE</div>
      <div className="w-64 h-2 bg-gray-800 rounded-full">
        <div 
          className="h-full bg-tech-purple rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-white mt-4">{progress.toFixed(0)}%</div>
    </div>
  );
};

export default Loader;

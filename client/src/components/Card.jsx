// import PropTypes from 'prop-types'

// const Card = ({ title, imageSrc, link }) => {
//   return (
//     <a href={link} className='group'>
//       <div className='max-w-xs mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
//         <img className='w-full h-48 object-cover h-auto overflow-hidden p-7' src={imageSrc} alt={title} />
//         <div className='p-4'>
//           <h3 className='text-xl font-semibold text-center text-gray-800 group-hover:text-blue-600'>
//             {title}
//           </h3>
//         </div>
//       </div>
//     </a>
//   );
// };

// // PropTypes validation
// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   imageSrc: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
// };

// export default Card;

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";


const Card = () => {
  return (
    <div className="grid w-full place-content-center  from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg hover:cursor-pointer"
      >
      
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold"
        >
          Events
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
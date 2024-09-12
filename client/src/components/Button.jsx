import PropTypes from 'prop-types'

const Card = ({ title, imageSrc, link }) => {
  return (
    <a href={link} className='group'>
      <div className='max-w-xs mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl'>
        <img className='w-full h-48 object-cover' src={imageSrc} alt={title} />
        <div className='p-4'>
          <h3 className='text-xl font-semibold text-center text-gray-800 group-hover:text-blue-600'>
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
};

// PropTypes validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;

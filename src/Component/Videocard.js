import React from 'react';

const Videocard = ({ info }) => {
  if (!info) {
    return null; 
  }

  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};
  const viewCount = statistics ? statistics.viewCount : 'N/A';

  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails?.medium?.url} /> 
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default Videocard;

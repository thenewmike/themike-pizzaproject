import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="24" y="18" rx="0" ry="0" width="1" height="0" />
    <rect x="44" y="16" rx="0" ry="0" width="1" height="2" />
    <circle cx="126" cy="132" r="117" />
    <rect x="149" y="215" rx="0" ry="0" width="1" height="0" />
    <rect x="148" y="334" rx="0" ry="0" width="1" height="0" />
    <rect x="-1" y="287" rx="10" ry="10" width="280" height="32" />
    <rect x="-5" y="342" rx="10" ry="10" width="280" height="88" />
    <rect x="2" y="452" rx="10" ry="10" width="95" height="30" />
    <rect x="46" y="474" rx="0" ry="0" width="10" height="10" />
    <rect x="123" y="450" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader animate speed={2} width={280} height={365} viewBox="0 0 280 365" backgroundColor="#d6d6d6" foregroundColor="#ecebeb">
    <circle cx="140" cy="99" r="58" />
    <circle cx="139" cy="17" r="15" />
    <circle cx="138" cy="183" r="15" />
    <circle cx="57" cy="102" r="15" />
    <circle cx="218" cy="102" r="15" />
    <rect x="126" y="205" rx="10" ry="10" width="25" height="51" />
    <rect x="2" y="313" rx="15" ry="15" width="104" height="27" />
    <rect x="0" y="268" rx="18" ry="18" width="280" height="30" />
    <rect x="126" y="303" rx="18" ry="18" width="153" height="43" />
  </ContentLoader>
);

export default Skeleton;

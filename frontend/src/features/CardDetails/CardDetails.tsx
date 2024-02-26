import React from 'react';
import DefaultIcon from '../../components/ui/DefaultIcon';
import { useParams } from 'react-router-dom';
import * as TEXT from '../../assets/strings'


const CardDetails: React.FC = () => {
    const imgURL = import.meta.env.VITE_EXAMPLE_IMG_URL as string;
    const params = useParams();

  return (
    <>
    <h2>{TEXT.CARD}{params.cardId}</h2>
    <DefaultIcon imagePath={`${imgURL}${params.cardId}.png`} size="small"  external={true}/>
    </>
  );
};

export default CardDetails;

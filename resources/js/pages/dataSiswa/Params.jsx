import React from 'react';
import { useParams } from 'react-router-dom';
import EditSiswas from './EditSiswas';

export default function Params() {
  // Get the userId param from the URL.
  let { id } = useParams();

    return (
        <EditSiswas id = {id}/>
    );
}
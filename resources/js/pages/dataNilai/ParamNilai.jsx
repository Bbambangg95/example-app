import React from 'react';
import { useParams } from 'react-router-dom';
import EditNilai from './EditNilai';

export default function ParamNilai() {
    let { id } = useParams();
    return (
        <EditNilai id={id} />
    ); 
}
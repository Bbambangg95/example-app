import React from 'react';
import { useParams } from 'react-router-dom';
import EditMapel from './EditMapel';

export default function ParamMapel(){

let id = useParams();
console.log(id);
        return (
            <EditMapel id = {id} />
        )
}
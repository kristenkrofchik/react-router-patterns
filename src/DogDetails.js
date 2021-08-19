import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function DogDetails() {
    const { name } = useParams();
    const [src, setSrc] = useState(null);

    useEffect(() => {
        async function fetchPhoto(dogName) {
            setSrc()
        }
    })
}
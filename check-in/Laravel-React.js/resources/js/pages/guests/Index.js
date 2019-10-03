import React, { useState, useEffect } from 'react';
import Guest from '../../components/guests/Guest';
import api from '../../utils/api';

function Index() {

    const [guests, setGuests] = useState([]);

    const getGuests = async () => {
        const query = await api.get('/guests');
        setGuests(query.data);
    }

    useEffect(() => {
        getGuests();
    }, [])

    return (
        <div className="col-10 text-center bg-white">
            <div className="mb-3">    
                <h2 className="display-5 title mt-3">Mis invitados</h2>
                <a href="#" className="text-dark">Agregar nuevo invitado</a>
            </div>    
            <ul className="list-group mb-3">
                {guests.map( guest => (
                    <Guest key={guest.id} guest={guest} />
                ))}
            </ul>
        </div>
    )
}

export default Index;
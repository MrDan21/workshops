import React from 'react';

function Guest({guest}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>
                <img src={`http://check-in.test/images/qr/${guest.id}.png`} /> {guest.name} {guest.last_name} ({guest.email}) <i className={ 'f-size fas fa-circle fa-xs ' + (guest.confirmation == 1 ? 'text-success' : 'text-danger')}></i>
            </span>
        </li>
    )
}

export default Guest;
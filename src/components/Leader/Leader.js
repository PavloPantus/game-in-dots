import React from 'react';

export const Leader = ({leader}) => {
    return (
        <div className="leader">
           <span className="leader__name">{leader.winner}</span>
            <span className="leader__date">{leader.date}</span>
        </div>
    )
}



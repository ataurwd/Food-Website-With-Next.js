import React from 'react';

const Details = async({ params }) => {
    const data = await params
    return (
        <div>
            post details here{data.id}
        </div>
    );
};

export default Details;
"use client"

import { useSession } from 'next-auth/react';
import React from 'react';

const UserInfo = () => {
    const session = useSession()
    return (
        <div>
            <h1>user information here</h1>
            <p>{ JSON.stringify(session)}</p>
        </div>
    );
};

export default UserInfo;
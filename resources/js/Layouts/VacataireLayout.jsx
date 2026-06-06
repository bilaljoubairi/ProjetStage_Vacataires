import React from 'react';
import { Link } from '@inertiajs/react';

export default function VacataireLayout({ children }) {
    return (
        <div className="d-flex">

            {/* Sidebar */}
            <div
                className="bg-dark text-white p-3"
                style={{
                    width: '250px',
                    minHeight: '100vh'
                }}
            >
                <h2 className="mb-5">
                    Vacataire
                </h2>

                <ul className="nav flex-column">

                    <li className="nav-item mb-3">
                        <Link
                            href="/vacataireDash"
                            className="nav-link text-white"
                        >
                            Mon dossier
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="btn btn-danger w-100"
                        >
                            Logout
                        </Link>
                    </li>

                </ul>
            </div>

            {/* Content */}
            <div className="flex-grow-1 p-4 bg-light">
                {children}
            </div>

        </div>
    );
}
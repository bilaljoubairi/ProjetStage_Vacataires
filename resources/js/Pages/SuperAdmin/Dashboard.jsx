import React from "react";
import { Link } from "@inertiajs/react";
import SuperAdminLayout from "@/Layouts/SuperAdminLayout";
export default function Dashboard({ totalAdmins, totalVacataires }) {
    // Petit helper pour vérifier si le lien est actif (à adapter selon vos besoins réels)
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

    return (
        <SuperAdminLayout>
            <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>

                {/* SIDEBAR */}


                {/* CONTENT AREA */}
                <div className="flex-grow-1 p-5">

                    {/* HEADER */}
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div>
                            <h2 className="fw-bold tracking-tight" style={{ color: "#0f172a" }}>
                                Tableau de bord
                            </h2>
                            <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
                                Gestion centralisée des administrateurs et des enseignants vacataires de l'ENS.
                            </p>
                        </div>

                        {/* Badge de statut ou date optionnel pour faire pro */}
                        <div className="bg-white px-3 py-2 rounded-3 shadow-sm border text-muted small d-flex align-items-center gap-2">
                            <span className="d-inline-block rounded-circle bg-success" style={{ width: "8px", height: "8px" }}></span>
                            Session Directeur Active
                        </div>
                    </div>

                    {/* CARDS STATS */}
                    <div className="row g-4">

                        {/* Card: Admins */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm rounded-4" style={{ backgroundColor: "#ffffff" }}>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="text-uppercase fw-semibold tracking-wider text-muted small mb-1">
                                                Administrateurs
                                            </p>
                                            <h1 className="fw-bold mb-2" style={{ color: "#0f172a", fontSize: "2.75rem", letterSpacing: "-0.05em" }}>
                                                {totalAdmins}
                                            </h1>
                                            <Link href="/superadmin/admins" className="small text-primary text-decoration-none d-flex align-items-center gap-1">
                                                Voir la liste
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </div>

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                background: "#eff6ff",
                                                color: "#2563eb"
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card: Vacataires */}
                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm rounded-4" style={{ backgroundColor: "#ffffff" }}>
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="text-uppercase fw-semibold tracking-wider text-muted small mb-1">
                                                Enseignants Vacataires
                                            </p>
                                            <h1 className="fw-bold mb-2" style={{ color: "#0f172a", fontSize: "2.75rem", letterSpacing: "-0.05em" }}>
                                                {totalVacataires}
                                            </h1>
                                            <Link href="/superadmin/vacataires" className="small text-success text-decoration-none d-flex align-items-center gap-1">
                                                Gérer les dossiers
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                            </Link>
                                        </div>

                                        <div
                                            className="rounded-3 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "48px",
                                                height: "48px",
                                                background: "#ecfdf5",
                                                color: "#059669"
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CSS d'appoint à ajouter dans votre fichier global ou balise style si nécessaire */}
                <style jsx>{`
                .st-hover:hover {
                    background-color: rgba(255, 255, 255, 0.05) !important;
                    color: #ffffff !important;
                    opacity: 1 !important;
                }
                .logout-hover:hover {
                    background-color: rgba(220, 53, 69, 0.1) !important;
                }
            `}</style>
            </div>
        </SuperAdminLayout>
    );
}
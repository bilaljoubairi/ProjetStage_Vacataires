// import React from 'react';
// import AdminLayout from '../../Layouts/AdminLayout';

// export default function Dashboard(props) {
//     console.log(props);
//     return (
//         <AdminLayout>

//             <div className="row g-4">

//                 <div className="col-md-3">

//                     <div className="card shadow border-0 text-center p-4">

//                         <h4>Total Vacataires</h4>

//                         <h1 className="text-primary">
//                             {props.totalVacataires}
//                         </h1>

//                     </div>

//                 </div>

                

//                 <div className="col-md-3">

//                     <div className="card shadow border-0 text-center p-4">

//                         <h4>Acceptés</h4>

//                         <h1 className="text-success">
//                             {props.totalAcceptes}
//                         </h1>

//                     </div>

//                 </div>

//                 <div className="col-md-3">

//                     <div className="card shadow border-0 text-center p-4">

//                         <h4>Refusés</h4>

//                         <h1 className="text-danger">
//                             {props.totalRefuses}
//                         </h1>

//                     </div>

//                 </div>

//                 <div className="col-md-3">

//                     <div className="card shadow border-0 text-center p-4">

//                         <h4>En attente</h4>

//                         <h1 className="text-warning">
//                             {props.totalAttente}
//                         </h1>

//                     </div>

//                 </div>

//             </div>

//         </AdminLayout>
//     );
// }
import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';

export default function Dashboard({ totalVacataires, totalAcceptes, totalRefuses, totalAttente }) {
    
    return (
        <AdminLayout>
            <div className="container-fluid py-4 px-4" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
                
                {/* EN-TÊTE DU DASHBOARD */}
                {/* <div className="mb-5 border-bottom pb-3">
                    <h1 
                        className="fw-bold tracking-tight mb-1" 
                        style={{ color: "#0f172a", fontSize: "30px", fontFamily: "'Inter', sans-serif" }}
                    >
                        Vue d'ensemble
                    </h1>
                    <p className="text-muted small m-0" style={{ fontSize: "14px" }}>
                        Statistiques globales et indicateurs clés de performance des recrutements.
                    </p>
                </div> */}

                {/* GRILLE DES CARTES DE STATISTIQUES */}
                <div className="row g-4">
                    
                    {/* CARD 1 : TOTAL VACATAIRES */}
                    <div className="col-sm-6 col-md-3">
                        <div 
                            className="card border-0 shadow-sm p-4 h-100" 
                            style={{ borderRadius: "14px", backgroundColor: "#ffffff" }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="text-muted fw-semibold uppercase tracking-wider" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>
                                    Total Vacataires
                                </span>
                                <div className="p-2 rounded-3" style={{ backgroundColor: "#eff6ff", color: "#1e40af" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="fw-bold m-0" style={{ color: "#0f172a", fontSize: "28px" }}>
                                {totalVacataires}
                            </h2>
                            <small className="text-muted mt-2 d-block" style={{ fontSize: "12px" }}>Inscrits sur la plateforme</small>
                        </div>
                    </div>

                    {/* CARD 2 : ACCEPTÉS */}
                    <div className="col-sm-6 col-md-3">
                        <div 
                            className="card border-0 shadow-sm p-4 h-100" 
                            style={{ borderRadius: "14px", backgroundColor: "#ffffff" }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="text-muted fw-semibold uppercase tracking-wider" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>
                                    Dossiers Validés
                                </span>
                                <div className="p-2 rounded-3" style={{ backgroundColor: "#ecfdf5", color: "#065f46" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="fw-bold m-0" style={{ color: "#16a34a", fontSize: "28px" }}>
                                {totalAcceptes}
                            </h2>
                            <small className="text-muted mt-2 d-block" style={{ fontSize: "12px" }}>Candidatures approuvées</small>
                        </div>
                    </div>

                    {/* CARD 3 : EN ATTENTE */}
                    <div className="col-sm-6 col-md-3">
                        <div 
                            className="card border-0 shadow-sm p-4 h-100" 
                            style={{ borderRadius: "14px", backgroundColor: "#ffffff" }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="text-muted fw-semibold uppercase tracking-wider" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>
                                    En Attente
                                </span>
                                <div className="p-2 rounded-3" style={{ backgroundColor: "#fff9db", color: "#856404" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="fw-bold m-0" style={{ color: "#d97706", fontSize: "28px" }}>
                                {totalAttente}
                            </h2>
                            <small className="text-muted mt-2 d-block" style={{ fontSize: "12px" }}>À analyser par la commission</small>
                        </div>
                    </div>

                    {/* CARD 4 : REFUSÉS */}
                    <div className="col-sm-6 col-md-3">
                        <div 
                            className="card border-0 shadow-sm p-4 h-100" 
                            style={{ borderRadius: "14px", backgroundColor: "#ffffff" }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <span className="text-muted fw-semibold uppercase tracking-wider" style={{ fontSize: "12px", letterSpacing: "0.5px" }}>
                                    Dossiers Rejetés
                                </span>
                                <div className="p-2 rounded-3" style={{ backgroundColor: "#fef2f2", color: "#991b1b" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="fw-bold m-0" style={{ color: "#dc2626", fontSize: "28px" }}>
                                {totalRefuses}
                            </h2>
                            <small className="text-muted mt-2 d-block" style={{ fontSize: "12px" }}>Non retenus cette année</small>
                        </div>
                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}
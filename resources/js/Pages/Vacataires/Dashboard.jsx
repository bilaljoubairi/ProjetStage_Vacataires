// import React from 'react';

// import VacataireLayout from '../../Layouts/VacataireLayout';

// export default function VacataireDash({ vacataire }) {

//     return (
//         <VacataireLayout>

//             <div className="container">

//                 <div className="card shadow border-0">

//                     <div className="card-body">

//                         <h2 className="mb-4">
//                             Mon Dossier
//                         </h2>

//                         {!vacataire ? (

//                             <>
//                                 <div className="alert alert-warning">

//                                     Vous n’avez pas encore créé votre dossier.

//                                 </div>

//                                 <a
//                                     href="/vacataires/create"
//                                     className="btn btn-primary"
//                                 >
//                                     Créer mon dossier
//                                 </a>
//                             </>

//                         ) : (

//                             <>

//                                 <p>
//                                     <strong>Nom :</strong> {vacataire.nom}
//                                 </p>

//                                 <p>
//                                     <strong>Prénom :</strong> {vacataire.prenom}
//                                 </p>

//                                 <p>
//                                     <strong>Email :</strong> {vacataire.email}
//                                 </p>

//                                 <p>
//                                     <strong>Spécialité :</strong> {vacataire.specialite}
//                                 </p>

//                                 <p>

//                                     <strong>Statut :</strong>

//                                     {vacataire.statut === 'en_attente' && (
//                                         <span className="badge bg-warning text-dark ms-2">
//                                             En attente
//                                         </span>
//                                     )}

//                                     {vacataire.statut === 'accepte' && (
//                                         <span className="badge bg-success ms-2">
//                                             Accepté
//                                         </span>
//                                     )}

//                                     {vacataire.statut === 'refuse' && (
//                                         <span className="badge bg-danger ms-2">
//                                             Refusé
//                                         </span>
//                                     )}

//                                 </p>

//                                 {vacataire.statut === 'en_attente' && (

//                                     <a
//                                         href={`/vacataires/${vacataire.id}/edit`}
//                                         className="btn btn-warning"
//                                     >
//                                         Modifier
//                                     </a>

//                                 )}

//                             </>

//                         )}

//                     </div>

//                 </div>

//             </div>

//         </VacataireLayout>
//     );
// }

import React from 'react';
import { Link } from '@inertiajs/react';
import VacataireLayout from '../../Layouts/VacataireLayout';

export default function VacataireDash({ vacataire }) {
    return (
        <VacataireLayout>
            <div className="container py-5" style={{ backgroundColor: "#f8fafc", minHeight: "85vh" }}>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7">
                   
                        <div 
                            className="card border-0 shadow-sm" 
                            style={{ borderRadius: "16px", backgroundColor: "#ffffff", overflow: "hidden" }}
                        >
                  
                            <div className="card-header bg-white border-0 pt-4 px-4 pb-2">
                                <h2 
                                    className="fw-bold tracking-tight mb-1" 
                                    style={{ color: "#0f172a", fontSize: "24px", fontFamily: "'Inter', sans-serif" }}
                                >
                                    Mon Dossier Académique
                                </h2>
                                <p className="text-muted small mb-0" style={{ fontSize: "13px" }}>
                                    Suivi en temps réel de votre statut et de vos informations d'enseignant à l'ENS.
                                </p>
                                <hr className="mt-3 mb-1" style={{ borderColor: "#f1f5f9" }} />
                            </div>

                            <div className="card-body px-4 py-4">
                                {!vacataire ? (
                                    // si aucun dossier
                                    <div className="text-center py-4">
                                        <div 
                                            className="alert border-0 p-3 mb-4 mx-auto text-start" 
                                            style={{ backgroundColor: "#fef3c7", color: "#b45309", borderRadius: "10px", fontSize: "14px" }}
                                        >
                                            <span className="fw-semibold">Dossier manquant :</span> Vous n’avez pas encore créé votre dossier de candidature sur la plateforme.
                                        </div>
                                        
                                        <Link
                                            href="/vacataires/create"
                                            className="btn text-white px-4 py-2.5 fw-semibold shadow-sm transition"
                                            style={{
                                                borderRadius: "8px",
                                                backgroundColor: "#1e40af",
                                                fontSize: "14px",
                                                border: "none"
                                            }}
                                        >
                                            Créer mon dossier maintenant
                                        </Link>
                                    </div>
                                ) : (
                                    //si le dossier exist
                                    <>
                                   
                                        <div className="row g-3 mb-4" style={{ fontSize: "15px" }}>
                                            <div className="col-6 py-2 border-bottom border-light">
                                                <span className="text-muted d-block small text-uppercase fw-medium mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>Nom complet</span>
                                                <span className="fw-semibold text-dark">{vacataire.nom.toUpperCase()} {vacataire.prenom}</span>
                                            </div>

                                            <div className="col-6 py-2 border-bottom border-light">
                                                <span className="text-muted d-block small text-uppercase fw-medium mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>Adresse Email</span>
                                                <span className="text-secondary">{vacataire.email}</span>
                                            </div>

                                            <div className="col-6 py-2 border-bottom border-light">
                                                <span className="text-muted d-block small text-uppercase fw-medium mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>Spécialité / Département</span>
                                                <span className="badge bg-light text-secondary border px-2 py-1" style={{ borderRadius: "6px", fontSize: "13px" }}>
                                                    {vacataire.specialite}
                                                </span>
                                            </div>

                                            <div className="col-6 py-2 border-bottom border-light">
                                                <span className="text-muted d-block small text-uppercase fw-medium mb-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>Statut actuel</span>
                                                <div className="mt-1">
                                                    {vacataire.statut === 'en_attente' && (
                                                        <span className="badge px-3 py-1.5" style={{ backgroundColor: "#fef3c7", color: "#b45309", borderRadius: "20px", fontWeight: "600", fontSize: "12px" }}>
                                                            ● En attente de validation
                                                        </span>
                                                    )}

                                                    {vacataire.statut === 'accepte' && (
                                                        <span className="badge px-3 py-1.5" style={{ backgroundColor: "#dcfce7", color: "#15803d", borderRadius: "20px", fontWeight: "600", fontSize: "12px" }}>
                                                            ● Dossier Accepté
                                                        </span>
                                                    )}

                                                    {vacataire.statut === 'refuse' && (
                                                        <span className="badge px-3 py-1.5" style={{ backgroundColor: "#fee2e2", color: "#b91c1c", borderRadius: "20px", fontWeight: "600", fontSize: "12px" }}>
                                                            ● Dossier Refusé
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                       
                                        {vacataire.statut === 'en_attente' && (
                                            <div className="d-flex justify-content-end mt-4">
                                                <Link
                                                    href={`/vacataires/${vacataire.id}/edit`}
                                                    className="btn btn-sm btn-light border px-4 py-2 fw-medium text-dark"
                                                    style={{ borderRadius: "8px", fontSize: "13px", transition: "all 0.2s" }}
                                                >
                                                    Modifier mes informations
                                                </Link>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </VacataireLayout>
    );
}




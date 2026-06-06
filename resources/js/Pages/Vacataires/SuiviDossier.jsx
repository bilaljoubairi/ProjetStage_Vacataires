
import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function SuiviDossier({ vacataire }) {
    // Cartographie des styles et libellés selon le statut
    const getStatusConfig = (statut) => {
        switch (statut) {
            case "accepte":
                return {
                    label: "Dossier Validé",
                    bgClass: "bg-success-subtle text-success border border-success-subtle",
                    alertClass: "alert-success",
                    message: "Félicitations, votre dossier a été approuvé par la commission pédagogique de l'ENS."
                };
            case "refuse":
                return {
                    label: "Dossier Refusé",
                    bgClass: "bg-danger-subtle text-danger border border-danger-subtle",
                    alertClass: "alert-danger",
                    message: "Votre dossier n'a pas été retenu pour cette session. Contactez l'administration pour plus de détails."
                };
            default:
                return {
                    label: "En cours de traitement",
                    bgClass: "bg-warning-subtle text-warning-dominant border border-warning-subtle",
                    alertClass: "alert-warning",
                    message: "Votre dossier est actuellement en cours d'examen par nos services académiques."
                };
        }
    };

    const statusConfig = getStatusConfig(vacataire.statut);

    return (
        <>
            <Head title="Suivi de Dossier - ENS" />

            {/* Injection d'un style rapide pour gérer le orange Bootstrap parfois trop clair */}
            <style>{`
                .text-warning-dominant { color: #b95000 !important; }
                .bg-warning-subtle { background-color: #fff9db !important; }
            `}</style>

            <div className="bg-light min-vh-100 py-5" style={{ backgroundColor: "#f8f9fa" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">

                            {/* Bouton de retour */}
                            <div className="mb-4 d-flex justify-content-between align-items-center">
                                <Link href="/" className="text-muted text-decoration-none small fw-medium">
                                    ← Retour au portail
                                </Link>
                                {vacataire.statut !== "accepte" && (
                                    <div className="card border-0 bg-light rounded-3 mt-5 shadow-sm">
                                        <div className="card-body p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                            <div className="d-flex align-items-start">
                                            </div>
                                            <div>
                                                <Link
                                                    href={`/espace-vacataire/edit/${vacataire.id}`}
                                                    className="btn px-4 py-2.5 fw-semibold rounded-3 shadow-sm text-nowrap d-inline-flex align-items-center transition"
                                                    style={{ backgroundColor: '#003366', color: '#ffffff', border: 'none' }}
                                                >
                                                    <i className="bi bi-gear-fill me-2 small"></i>
                                                    Modifier mon dossier
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Conteneur principal */}
                            <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">

                                {/* En-tête de page */}
                                <div className="card-header bg-white border-bottom p-4 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">
                                    <div>
                                        <span className="text-uppercase text-muted fw-bold tracking-wider" style={{ fontSize: "0.75rem", letterSpacing: "1px" }}>
                                            Portail Enseignant
                                        </span>
                                        <h1 className="h3 fw-bold text-dark mb-0 mt-1" style={{ color: "#003366" }}>
                                            Suivi de votre dossier
                                        </h1>
                                    </div>
                                    <div>
                                        <span className={`px-3 py-2 rounded-pill fw-semibold small ${statusConfig.bgClass}`}>
                                            {statusConfig.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Corps du suivi */}
                                <div className="card-body p-4 p-md-5">

                                    {/* Alerte de statut contextuelle */}
                                    <div className={`alert ${statusConfig.alertClass} border-0 rounded-3 p-3 mb-4 small d-flex align-items-center`} role="alert">
                                        <div className="fw-medium">{statusConfig.message}</div>
                                    </div>

                                    {/* Section : Informations Personnelles */}
                                    <h5 className="text-secondary fw-semibold mb-4 pb-2 border-bottom text-uppercase" style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                                        Détails de la candidature
                                    </h5>

                                    <div className="row g-4">
                                        <div className="col-sm-6">
                                            <div className="p-3 bg-light rounded-3" style={{ backgroundColor: "#fbfbfc" }}>
                                                <label className="text-muted small d-block mb-1">Nom complet</label>
                                                <span className="fw-semibold text-dark text-uppercase">{vacataire.nom}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="p-3 bg-light rounded-3" style={{ backgroundColor: "#fbfbfc" }}>
                                                <label className="text-muted small d-block mb-1">Prénom</label>
                                                <span className="fw-semibold text-dark">{vacataire.prenom}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="p-3 bg-light rounded-3" style={{ backgroundColor: "#fbfbfc" }}>
                                                <label className="text-muted small d-block mb-1">Adresse Email</label>
                                                <span className="fw-semibold text-dark">{vacataire.email}</span>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="p-3 bg-light rounded-3" style={{ backgroundColor: "#fbfbfc" }}>
                                                <label className="text-muted small d-block mb-1">Spécialité </label>
                                                <span className="fw-semibold text-primary" style={{ color: "#003366" }}>{vacataire.specialite}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Note de bas de page institutionnelle */}
                                <div className="card-footer bg-light border-0 px-4 py-3 text-center text-muted" style={{ fontSize: "0.8rem" }}>
                                    Pour toute modification, veuillez vous adresser au service des ressources humaines de l'ENS.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
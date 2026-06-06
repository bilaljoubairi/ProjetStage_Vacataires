
import React, { useState } from "react";
import { router, Link } from "@inertiajs/react";
import { usePage } from '@inertiajs/react';

export default function EspaceVacataire({ vacataire = null, error = null }) {
    const [email, setEmail] = useState("");
    const [cin, setCin] = useState("");
    const { props } = usePage();
    const errors = props.errors || {};
    const rechercherDossier = (e) => {
        e.preventDefault();
        router.post("/espace-vacataire/recherche", {
            email,
            cin,
        });
    };

    // Style commun pour la couleur primaire institutionnelle (Bleu Nuit ENS)
    const primaryColor = "#003366";

    // 1. VUE : Formulaire de recherche si aucun vacataire n'est chargé
    if (!vacataire) {
        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
                            {/* Ligne décorative supérieure */}
                            <div style={{ height: "4px", backgroundColor: primaryColor }}></div>

                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-light text-primary rounded-circle p-3 mb-3">
                                        <i className="bi bi-shield-lock fs-3" style={{ color: primaryColor }}></i>
                                    </div>
                                    <h3 className="fw-bold text-dark mb-1">Espace Vacataire</h3>

                                    <p className="text-muted small">Suivi et modification de votre dossier de candidature

                                    </p>
                                </div>
                                {error && (
    <div className="alert alert-danger mb-4">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        {error}
    </div>
)}
                                <form onSubmit={rechercherDossier}>
                                    <div className="mb-3">
                                        <label className="form-label small fw-semibold text-secondary">
                                            Adresse email
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light border-end-0 text-muted">
                                                <i className="bi bi-envelope"></i>
                                            </span>
                                            <input
                                                type="email"
                                                className="form-control bg-light border-start-0 ps-0"
                                                placeholder="exemple@domaine.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label small fw-semibold text-secondary">
                                            N° de Carte d'Identité (CIN)
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light border-end-0 text-muted">
                                                <i className="bi bi-card-text"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control bg-light border-start-0 ps-0"
                                                placeholder="Ex: AB123456"
                                                value={cin}
                                                onChange={(e) => setCin(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>


                                    <div className="d-flex flex-column gap-3">
                                        <button
                                            type="submit"
                                            className="btn w-100 py-2.5 fw-semibold text-white rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                                            style={{ backgroundColor: primaryColor, border: "none" }}
                                        >
                                            <i className="bi bi-search small"></i>
                                            Consulter mon dossier
                                        </button>

                                        <a href="/" className="text-decoration-none">
                                            <button
                                                type="button"
                                                className="btn btn-light w-100 py-2 fs-6 rounded-3 text-secondary fw-medium"
                                            >
                                                ← Retour
                                            </button>
                                        </a>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Configuration visuelle du badge selon le statut du dossier
    const getStatusConfig = (statut) => {
        switch (statut) {
            case "accepte":
                return { label: "Accepté", class: "bg-success-subtle text-success border border-success-subtle" };
            case "refuse":
                return { label: "Refusé", class: "bg-danger-subtle text-danger border border-danger-subtle" };
            default:
                return { label: "En attente", class: "bg-warning-subtle text-warning-emphasis border border-warning-subtle" };
        }
    };

    const statusInfo = getStatusConfig(vacataire.statut);

    // 2. VUE : Affichage des détails du dossier vacataire trouvé
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">

                    {/* Carte principale des informations */}
                    <div className="card shadow-sm border-0 rounded-4 mb-4">
                        <div className="card-body p-5">
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center border-bottom pb-4 mb-4 gap-3">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-light rounded-3 p-2.5 text-secondary">
                                        <i className="bi bi-folder2-open fs-4" style={{ color: primaryColor }}></i>
                                    </div>
                                    <div>
                                        <h3 className="fw-bold text-dark mb-0">Mon Dossier</h3>
                                        <p className="text-muted small mb-0">Récapitulatif des données transmises</p>
                                    </div>
                                </div>
                                <div>
                                    <span className={`badge px-3 py-2 rounded-pill fw-semibold ${statusInfo.class}`}>
                                        <i className="bi bi-circle-fill me-1.5 small"></i>
                                        {statusInfo.label}
                                    </span>
                                </div>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <label className="text-muted small fw-medium mb-1">Nom complet</label>
                                        <div className="fw-bold text-dark">{vacataire.nom} {vacataire.prenom}</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <label className="text-muted small fw-medium mb-1">Adresse électronique</label>
                                        <div className="fw-semibold text-dark">{vacataire.email}</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <label className="text-muted small fw-medium mb-1">Code d'Identité (CIN)</label>
                                        <div className="fw-semibold text-dark">{vacataire.cin}</div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-3 bg-light rounded-3 h-100">
                                        <label className="text-muted small fw-medium mb-1">Spécialité / Discipline</label>
                                        <div className="fw-semibold text-dark">{vacataire.specialite || "Non spécifiée"}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloc d'action discret pour la modification (si non accepté) */}
                    {vacataire.statut !== "accepte" && (
                        <div className="card border-0 bg-light rounded-3 shadow-sm">
                            <div className="card-body p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                                <div className="d-flex align-items-start">
                                    <div className="bg-white text-primary rounded-circle p-2.5 shadow-sm me-3 border border-light d-none d-sm-block">
                                        <i className="bi bi-pencil-square fs-4" style={{ color: primaryColor }}></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-1 text-dark">Votre dossier est modifiable</h6>
                                        <p className="text-muted small mb-0">
                                            Vous pouvez modifier votre dossier tant qu’il est en attente ou refusé par l'administration.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Link
                                        href={`/espace-vacataire/edit/${vacataire.id}`}
                                        className="btn px-4 py-2.5 fw-semibold rounded-3 shadow-sm text-nowrap d-inline-flex align-items-center gap-2"
                                        style={{ backgroundColor: primaryColor, color: "#ffffff", border: "none" }}
                                    >
                                        <i className="bi bi-pencil small"></i>
                                        Modifier mes informations
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
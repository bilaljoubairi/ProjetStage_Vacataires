import { router, Link, Head } from '@inertiajs/react';
import React from 'react';
import SuperAdminLayout from "@/Layouts/SuperAdminLayout";

export default function Show({ vacataire }) {
    
    // Configuration visuelle du statut
    const getStatusBadge = (statut) => {
        switch (statut) {
            case 'accepte':
                return <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill fw-semibold">Dossier Accepté</span>;
            case 'refuse':
                return <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-3 py-2 rounded-pill fw-semibold">Dossier Refusé</span>;
            default:
                return <span className="badge bg-warning-subtle text-warning border border-warning-subtle px-3 py-2 rounded-pill fw-semibold" style={{ color: '#b95000' }}>En attente</span>;
        }
    };

    // Composant interne pour l'affichage élégant des fichiers joints
    const DocumentCard = ({ href, label, iconClass = "bi-file-earmark-pdf" }) => (
        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="d-flex align-items-center p-3 rounded-3 text-decoration-none bg-light border text-dark h-100 shadow-sm-hover transition-all"
                style={{ transition: 'all 0.2s ease' }}
            >
                <div className="rounded-2 p-2 bg-white border me-3 shadow-sm text-primary d-flex align-items-center justify-content-center" style={{ color: '#003366', minWidth: '40px', height: '40px' }}>
                    <i className={`bi ${iconClass} fs-4`}></i>
                </div>
                <div className="overflow-hidden">
                    <span className="d-block text-muted small fw-medium text-uppercase tracking-wider" style={{ fontSize: '0.7rem' }}>Pièce jointe</span>
                    <span className="fw-semibold text-truncate d-block small mt-0" title={label}>{label}</span>
                </div>
            </a>
        </div>
    );

    return (
        <SuperAdminLayout>
            <Head title={`Dossier de ${vacataire.nom} ${vacataire.prenom} - ENS`} />

            {/* Injection d'un petit style utilitaire pour l'effet de survol des documents */}
            <style>{`
                .shadow-sm-hover:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 .25rem .75rem rgba(0,0,0,.05) !important;
                    border-color: #003366 !important;
                }
                .tracking-wider { letter-spacing: 0.05em; }
            `}</style>

            {/* Barre d'action supérieure / Fil d'Ariane */}
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center pb-3 mb-4 border-bottom gap-3">
                <div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-1 small">
                            {/* <li className="breadcrumb-item"><Link href="/admin/dashboard" className="text-muted text-decoration-none">Dashboard</Link></li>
                            <li className="breadcrumb-item"><Link href="/vacataires" className="text-muted text-decoration-none">Vacataires</Link></li> */}
                            <li className="breadcrumb-item active text-dark fw-medium" aria-current="page">Détails Dossier</li>
                        </ol>
                    </nav>
                    <h2 className="h4 fw-bold text-dark mb-0" style={{ color: '#003366' }}>
                        {vacataire.nom.toUpperCase()} {vacataire.prenom}
                    </h2>
                </div>
                <div>
                    <Link href="/superadmin/vacataires" className="btn btn-sm btn-outline-secondary px-3 rounded-2 fw-medium">
                        ← Retour à la liste
                    </Link>
                </div>
            </div>

            {/* Conteneur de Fiche Principal */}
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden bg-white mb-4">
                <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <div className="p-2 rounded bg-light border d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
                            <i className="bi bi-person-vcard text-secondary"></i>
                        </div>
                        <h5 className="mb-0 fw-bold text-dark fs-6 text-uppercase tracking-wider">Données Administratives</h5>
                    </div>
                    <div>
                        {getStatusBadge(vacataire.statut)}
                    </div>
                </div>

                <div className="card-body p-4 p-md-5">
                    <div className="row g-4">
                        
                        {/* Bloc : Identité Civile */}
                        <div className="col-10 col-md-6 border-end-md">
                            <h6 className="text-muted fw-bold text-uppercase mb-3 small tracking-wider border-bottom pb-2">Identité Civile</h6>
                            
                            <div className="row g-3">
                                <div className="col-6">
                                    <span className="text-muted small d-block">Nom</span>
                                    <span className="fw-bold text-dark text-uppercase">{vacataire.nom}</span>
                                </div>
                                <div className="col-6">
                                    <span className="text-muted small d-block">Prénom</span>
                                    <span className="fw-semibold text-dark">{vacataire.prenom}</span>
                                </div>
                                <div className="col-12 mt-3">
                                    <span className="text-muted small d-block">N° CIN</span>
                                    <span className="fw-semibold text-dark text-uppercase">{vacataire.cin}</span>
                                </div>
                                <div className="col-12 mt-3">
                                    <span className="text-muted small d-block">Adresse Electronique</span>
                                    <span className="fw-semibold text-dark">{vacataire.email}</span>
                                </div>
                            </div>
                        </div>

                        {/* Bloc : Situation Pédagogique */}
                        <div className="col-10 col-md-6 ps-md-4">
                            <h6 className="text-muted fw-bold text-uppercase mb-3 small tracking-wider border-bottom pb-2">Profil Pédagogique & Pro</h6>
                            
                            <div className="row g-3">
                                <div className="col-12">
                                    <span className="text-muted small d-block">Spécialité / Discipline principale</span>
                                    <span className="fw-bold fs-6" style={{ color: '#003366' }}>{vacataire.specialite}</span>
                                </div>
                                <div className="col-6 mt-3">
                                    <span className="text-muted small d-block">Statut Fonctionnaire</span>
                                    <span className={`badge rounded-1 px-2 py-1 fw-medium ${vacataire.est_fonctionnaire ? 'bg-info-subtle text-info border border-info-subtle' : 'bg-light text-secondary border'}`}>
                                        {vacataire.est_fonctionnaire ? 'Oui (Public)' : 'Non (Privé / Sans emploi)'}
                                    </span>
                                </div>
                                <div className="col-6 mt-3">
                                    <span className="text-muted small d-block">Lieu d'exercice</span>
                                    <span className="fw-semibold text-dark">{vacataire.lieu_travail || 'Non renseigné'}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Section Documents Jointes */}
            <div className="mt-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="p-1 rounded bg-light border d-flex align-items-center justify-content-center" style={{ width: '28px', height: '28px' }}>
                        <i className="bi bi-folder-symlink small text-secondary"></i>
                    </div>
                    <h5 className="h6 mb-0 text-uppercase fw-bold text-secondary tracking-wider">Pièces Justificatives Fournies</h5>
                </div>
 
                <div className="row g-3">
                    {vacataire.photo && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.photo}`)} label="Photo d'identité" iconClass="bi-image" />
                    )}
                    {vacataire.cin_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.cin_file}`)} label="Carte d'Identité (CIN)" />
                    )}
                    {vacataire.diplome_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.diplome_file}`)} label="Diplôme (Dernier obtenu)" iconClass="bi-mortarboard" />
                    )}
                    {vacataire.rib_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.rib_file}`)} label="Attestation de RIB" iconClass="bi-bank" />
                    )}
                    {vacataire.demande_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.demande_file}`)} label="Demande Manuscrite" />
                    )}
                    {vacataire.arrete_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.arrete_file}`)} label="Arrêté de nomination" />
                    )}
                    {vacataire.autorisation_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.autorisation_file}`)} label="Autorisation Ministérielle" iconClass="bi-file-earmark-check" />
                    )}
                    {vacataire.attestation_non_travail_file && (
                        <DocumentCard href={encodeURI(`/storage/${vacataire.attestation_non_travail_file}`)} label="Attestation de Non-Travail" />
                    )}
                </div>
            </div>
        </SuperAdminLayout>
    );
}
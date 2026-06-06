import React, { useState } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function Edit({ vacataire }) {
    const [values, setValues] = useState({
        nom: vacataire.nom || "",
        prenom: vacataire.prenom || "",
        cin: vacataire.cin || "",
        ppr: vacataire.ppr || "",
        email: vacataire.email || "",
        specialite: vacataire.specialite || "",
        statut: vacataire.statut || "en_attente",
        est_fonctionnaire: vacataire.est_fonctionnaire || false,
        lieu_travail: vacataire.lieu_travail || "",

        // Fichiers (initialisés à null)
        photo: null,
        cin_file: null,
        diplome_file: null,
        rib_file: null,
        demande_file: null,
        arrete_file: null,
        autorisation_file: null,
        attestation_non_travail_file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        router.post(
              `/espace-vacataire/update/${vacataire.id}`,
            {
                ...values,
                _method: "put",
            },
            {
                forceFormData: true,
            }
        );
    }

    const isBlocked = vacataire.statut === "accepte";

    return (
        <div>
          
            <style>{`
                .bg-ens-navy { background-color: #003366 !important; color: white !important; }
                .text-ens-navy { color: #003366 !important; }
                .btn-ens { background-color: #003366 !important; color: white !important; border: none; transition: all 0.2s; }
                .btn-ens:hover { background-color: #002244 !important; opacity: 0.9; }
                .form-section-title { font-size: 1.1rem; border-left: 4px solid #003366; padding-left: 10px; }
            `}</style>

            <div className="container py-5">
                <div className="card shadow-sm border-0 rounded-4">
                    
                    {/* Header Institutionnel */}
                    <div className="card-header bg-ens-navy py-3 px-4 rounded-top-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <h4 className="mb-0 fw-bold">
                                Modifier le Dossier Vacataire
                            </h4>
                        </div>
                      
                    </div>

                    <div className="card-body p-4 p-md-5">
                        
                        {/* Alerte si le dossier est verrouillé */}
                        {isBlocked && (
                            <div className="alert alert-info border-0 shadow-sm rounded-3 d-flex align-items-center mb-4 p-3" role="alert">
                                <i className="bi bi-info-circle-fill me-3 fs-4 text-info"></i>
                                <div>
                                    <strong className="d-block mb-1">Dossier Validé & Verrouillé</strong>
                                    Ce dossier a été accepté. Toute modification est désormais impossible afin de préserver l'intégrité des données.
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            
                            {/* SECTION 1 : Informations Générales */}
                            <div className="mb-5">
                                <h5 className="fw-bold text-dark mb-4 form-section-title text-uppercase tracking-wider">
                                    Informations Personnelles & Professionnelles
                                </h5>
                                
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">Nom</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.nom}
                                            onChange={(e) => setValues({ ...values, nom: e.target.value })}
                                            disabled={isBlocked}
                                            placeholder="Nom de famille"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">Prénom</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.prenom}
                                            onChange={(e) => setValues({ ...values, prenom: e.target.value })}
                                            disabled={isBlocked}
                                            placeholder="Prénom"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">CIN (N° Carte d'identité)</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.cin}
                                            onChange={(e) => setValues({ ...values, cin: e.target.value })}
                                            disabled={isBlocked}
                                            placeholder="Ex: AB123456"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">PPR</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.ppr}
                                            onChange={(e) => setValues({ ...values, ppr: e.target.value })}
                                            disabled={isBlocked}
                                            placeholder="Numéro de PPR"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">Adresse Email</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.email}
                                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                                            disabled={isBlocked}
                                            placeholder="exemple@domain.com"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">Spécialité</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.specialite}
                                            onChange={(e) => setValues({ ...values, specialite: e.target.value })}
                                            disabled={isBlocked}
                                            placeholder="Discipline ou spécialité"
                                        />
                                    </div>

                                    {/* <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">Statut du dossier</label>
                                        <select
                                            className="form-select form-select-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.statut}
                                            onChange={(e) => setValues({ ...values, statut: e.target.value })}
                                            disabled={isBlocked}
                                        >
                                            <option value="en_attente">⏳ En attente de vérification</option>
                                            <option value="accepte" className="success">✅ Accepté / Validé</option>
                                            <option value="refuse">❌ Refusé</option>
                                        </select>
                                    </div> */}

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold text-muted small">Le vacataire est-il fonctionnaire ?</label>
                                        <select
                                            className="form-select form-select-lg bg-light border-0 rounded-3 text-dark fs-6"
                                            value={values.est_fonctionnaire ? "1" : "0"}
                                            onChange={(e) => setValues({ ...values, est_fonctionnaire: e.target.value === "1" })}
                                            disabled={isBlocked}
                                        >
                                            <option value="0">Non, externe</option>
                                            <option value="1">Oui, fonctionnaire public</option>
                                        </select>
                                    </div>

                                    {/* LIEU TRAVAIL (Conditionnel) */}
                                    {values.est_fonctionnaire && (
                                        <div className="col-md-12 animate-fade-in">
                                            <div className="p-3 bg-light rounded-3 border-start border-4 border-ens-navy">
                                                <label className="form-label fw-semibold text-muted small">Lieu de Travail </label>
                                                <input
                                                    type="text"
                                                    className="form-control bg-white border-0 shadow-sm rounded-3 text-dark"
                                                    value={values.lieu_travail}
                                                    onChange={(e) => setValues({ ...values, lieu_travail: e.target.value })}
                                                    disabled={isBlocked}
                                                    placeholder="Indiquez l'administration ou établissement actuel"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* SECTION 2 : Documents Justificatifs */}
                            <div className="mb-5">
                                <h5 className="fw-bold text-dark mb-4 form-section-title text-uppercase tracking-wider">
                                    Pièces Justificatives (Format PDF/Image)
                                </h5>
                                
                                <div className="p-4 rounded-4 bg-light shadow-inner">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Photo d'identité</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, photo: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Copie de la CIN (PDF)</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, cin_file: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Dernier Diplôme obtenu</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, diplome_file: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Attestation de RIB</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, rib_file: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Demande Manuscrite</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, demande_file: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Arrêté de nomination</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, arrete_file: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold text-secondary small">Autorisation de l'autorité compétente</label>
                                            <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, autorisation_file: e.target.files[0] })} disabled={isBlocked} />
                                        </div>

                                        {/* Document conditionnel si NON fonctionnaire */}
                                        {!values.est_fonctionnaire && (
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold text-secondary small">Attestation de non-travail (Chômage)</label>
                                                <input type="file" className="form-control border-0 shadow-sm" onChange={(e) => setValues({ ...values, attestation_non_travail_file: e.target.files[0] })} disabled={isBlocked} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Zone d'action de validation */}
                            {!isBlocked && (
                                <div className="d-flex justify-content-end gap-3 mt-4">
                                    <button 
                                        type="submit" 
                                        className="btn btn-ens px-5 py-3 fw-bold rounded-3 shadow-sm d-inline-flex align-items-center"
                                    >
                                        <i className="bi bi-check-circle-fill me-2"></i> Enregistrer les modifications
                                    </button>
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
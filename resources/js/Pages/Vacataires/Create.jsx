
// ==========================style 2==========================
import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Create() {
    // Utilisation de useForm d'Inertia (fortement recommandé pour un rendu pro avec gestion des erreurs)
    const { data, setData, post, processing, errors } = useForm({
        nom: '',
        prenom: '',
        cin: '',
        ppr: '',
        email: '',
        specialite: '',
        est_fonctionnaire: false,
        lieu_travail: '',
        photo: null,
        cin_file: null,
        arreter_file: null,
        autorisation_file: null,
        attestation_non_travail_file: null,
        diplome_file: null,
        rib_file: null,
        demande_file: null,
    });

    function handleSubmit(e) {
        e.preventDefault();

        post('/vacataires', {
            forceFormData: true,

            onError: (errors) => {
                console.log(errors);
            }
        });
    }

    return (

        <div className="container py-4">
            <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                {/* Header Institutionnel - Bleu ENS */}
                <div className="card-header bg-dark text-white p-4" style={{ backgroundColor: '#1a365d' }}>
                    <div className="d-flex align-items-center">
                        <div className="bg-white text-dark rounded-circle p-2 me-3 d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                            <i className="bi bi-person-plus-fill fs-5 text-primary"></i>
                        </div>
                        <div>
                            <h4 className="mb-0 fw-bold">Gestion des Vacataires</h4>
                            <small className="text-white-50">Ajouter un nouveau dossier d'enseignant vacataire à l'ENS</small>
                        </div>
                    </div>
                </div>

                <div className="card-body p-4 bg-light-50">
                    <form onSubmit={handleSubmit} className="needs-validation" encType="multipart/form-data">

                        {/* SECTION 1 : Informations Personnelles */}
                        <div className="mb-5">
                            <h5 className="text-primary border-bottom pb-2 mb-4 fw-semibold text-uppercase font-monospace fs-6" style={{ letterSpacing: '1px' }}>
                                <i className="bi bi-person-lines-fill me-2"></i>Informations Personnelles
                            </h5>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Nom *</label>
                                    <input type="text" className={`form-control form-control-lg rounded-2 ${errors.nom ? 'is-invalid' : ''}`} value={data.nom} onChange={e => setData('nom', e.target.value)} required />
                                    {errors.nom && <div className="invalid-feedback">{errors.nom}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Prénom *</label>
                                    <input type="text" className={`form-control form-control-lg rounded-2 ${errors.prenom ? 'is-invalid' : ''}`} value={data.prenom} onChange={e => setData('prenom', e.target.value)} required />
                                    {errors.prenom && <div className="invalid-feedback">{errors.prenom}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">N° CIN *</label>
                                    <input type="text" className={`form-control form-control-lg rounded-2 ${errors.cin ? 'is-invalid' : ''}`} value={data.cin} onChange={e => setData('cin', e.target.value)} required />
                                    {errors.cin && <div className="invalid-feedback">{errors.cin}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Adresse Email académique / personnelle *</label>
                                    <input type="email" className={`form-control form-control-lg rounded-2 ${errors.email ? 'is-invalid' : ''}`} value={data.email} onChange={e => setData('email', e.target.value)} required />
                                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Spécialité (Discipline d'enseignement) *</label>
                                    <input type="text" className={`form-control form-control-lg rounded-2 ${errors.specialite ? 'is-invalid' : ''}`} value={data.specialite} onChange={e => setData('specialite', e.target.value)} required />
                                    {errors.specialite && <div className="invalid-feedback">{errors.specialite}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Photo personnelle</label>
                                    <input
                                        type="file"
                                        className={`form-control form-control-lg rounded-2 ${errors.photo ? 'is-invalid' : ''}`}
                                        onChange={e => setData('photo', e.target.files[0])}
                                        accept="image/*"
                                    />

                                    {errors.photo && (
                                        <div className="invalid-feedback">
                                            {errors.photo}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* SECTION 2 : Situation Professionnelle */}
                        <div className="mb-5">
                            <h5 className="text-primary border-bottom pb-2 mb-4 fw-semibold text-uppercase font-monospace fs-6" style={{ letterSpacing: '1px' }}>
                                <i className="bi bi-briefcase-fill me-2"></i>Situation Professionnelle
                            </h5>

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Statut professionnel( -Fonctionnaire- ) *</label>
                                    <select className="form-select form-select-lg rounded-2" value={data.est_fonctionnaire ? '1' : '0'} onChange={e => setData('est_fonctionnaire', e.target.value === '1')}>
                                        <option value="0">Non </option>
                                        <option value="1">Oui</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label fw-medium text-secondary small">Numéro PPR (si fonctionnaire)</label>
                                    <input type="text" className="form-control form-control-lg rounded-2" value={data.ppr} onChange={e => setData('ppr', e.target.value)} placeholder="Ex: 1234567" disabled={!data.est_fonctionnaire} />
                                </div>

                                {data.est_fonctionnaire ? (
                                    <div className="col-md-12">
                                        <label className="form-label fw-medium text-secondary small">Lieu de travail / Administration d'origine *</label>
                                        <input type="text" className="form-control form-control-lg rounded-2" value={data.lieu_travail} onChange={e => setData('lieu_travail', e.target.value)} required />
                                    </div>
                                ) : (
                                    <div className="col-md-12">
                                        <label className="form-label fw-medium text-secondary small">Attestation de non travail (Format PDF)*</label>
                                        <input
                                            type="file"
                                            className={`form-control form-control-lg rounded-2 ${errors.attestation_non_travail_file ? 'is-invalid' : ''}`}
                                            onChange={e => setData('attestation_non_travail_file', e.target.files[0])}
                                            accept=".pdf" required
                                        />
                                        {errors.attestation_non_travail_file && (
                                            <div className="invalid-feedback">
                                                {errors.attestation_non_travail_file}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* SECTION 3 : Pièces Justificatives (Uploads) */}
                        <div className="mb-4">
                            <h5 className="text-primary border-bottom pb-2 mb-4 fw-semibold text-uppercase font-monospace fs-6" style={{ letterSpacing: '1px' }}>
                                <i className="bi bi-file-earmark-pdf-fill me-2"></i>Documents Numérisés (Dossier Scientifique & Administratif)
                            </h5>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="p-3 border rounded-3 bg-white shadow-sm-hover">
                                        <label className="form-label fw-semibold mb-1 small text-dark"><i className="bi bi-card-heading me-2 text-muted"></i>Carte d'Identité Nationale (CIN) *</label>
                                        <input
                                            type="file"
                                            className={`form-control ${errors.cin_file ? 'is-invalid' : ''}`}
                                            onChange={e => setData('cin_file', e.target.files[0])}
                                            accept=".pdf"
                                            required
                                        />

                                        {errors.cin_file && (
                                            <div className="invalid-feedback">
                                                {errors.cin_file}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-3 border rounded-3 bg-white">
                                        <label className="form-label fw-semibold mb-1 small text-dark"><i className="bi bi-mortarboard me-2 text-muted"></i>Dernier Diplôme Obtenu *</label>
                                        <input
                                            type="file"
                                            className={`form-control ${errors.diplome_file ? 'is-invalid' : ''}`}
                                            onChange={e => setData('diplome_file', e.target.files[0])}
                                            accept=".pdf"
                                            required
                                        />

                                        {errors.diplome_file && (
                                            <div className="invalid-feedback">
                                                {errors.diplome_file}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-3 border rounded-3 bg-white">
                                        <label className="form-label fw-semibold mb-1 small text-dark"><i className="bi bi-currency-exchange me-2 text-muted"></i>Attestation de RIB (Relevé d'Identité Bancaire) *</label>
                                        <input
                                            type="file"
                                            className={`form-control ${errors.rib_file ? 'is-invalid' : ''}`}
                                            onChange={e => setData('rib_file', e.target.files[0])}
                                            accept=".pdf"
                                            required
                                        />

                                        {errors.rib_file && (
                                            <div className="invalid-feedback">
                                                {errors.rib_file}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-3 border rounded-3 bg-white">
                                        <label className="form-label fw-semibold mb-1 small text-dark"><i className="bi bi-envelope-paper me-2 text-muted"></i>Demande manuscrite *</label>
                                        <input
                                            type="file"
                                            className={`form-control ${errors.demande_file ? 'is-invalid' : ''}`}
                                            onChange={e => setData('demande_file', e.target.files[0])}
                                            accept=".pdf"
                                            required
                                        />

                                        {errors.demande_file && (
                                            <div className="invalid-feedback">
                                                {errors.demande_file}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {data.est_fonctionnaire && (
                                    <>
                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-white">
                                                <label className="form-label fw-semibold mb-1 small text-dark"><i className="bi bi-file-earmark-text me-2 text-muted"></i>Arrêté de nomination / d'affectation *</label>
                                                <input
                                                    type="file"
                                                    className={`form-control ${errors.arreter_file ? 'is-invalid' : ''}`}
                                                    onChange={e => setData('arreter_file', e.target.files[0])}
                                                    accept=".pdf"
                                                    required
                                                />

                                                {errors.arreter_file && (
                                                    <div className="invalid-feedback">
                                                        {errors.arreter_file}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="p-3 border rounded-3 bg-white">
                                                <label className="form-label fw-semibold mb-1 small text-dark"><i className="bi bi-check-circle me-2 text-muted"></i>Autorisation d'enseigner de l'administration d'origine *</label>
                                                <input
                                                    type="file"
                                                    className={`form-control ${errors.autorisation_file ? 'is-invalid' : ''}`}
                                                    onChange={e => setData('autorisation_file', e.target.files[0])}
                                                    accept=".pdf"
                                                    required
                                                />

                                                {errors.autorisation_file && (
                                                    <div className="invalid-feedback">
                                                        {errors.autorisation_file}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Boutons d'action */}
                        <div className="d-flex justify-content-end gap-2 border-top pt-4 mt-5">
                            <a href="/">
                                <button type="button" className="btn btn-light btn-lg px-4 fs-6 rounded-2 text-secondary fw-medium">
                                    Annuler
                                </button>
                            </a>
                            <button type="submit" className="btn btn-primary btn-lg px-5 fs-6 rounded-2 fw-semibold shadow-sm d-flex align-items-center" disabled={processing} style={{ backgroundColor: '#1a365d', borderColor: '#1a365d' }}>
                                {processing ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Traitement...
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-check-lg me-2"></i> Valider et Enregistrer le dossier
                                    </>
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
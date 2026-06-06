import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Connexion Administration - ENS" />

            <div className="bg-light min-vh-100 d-flex align-items-center py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            
                            {/* Lien Retour à l'accueil */}
                            <div className="text-center mb-4">
                                <Link 
                                    href="/" 
                                    className="text-muted text-decoration-none small fw-medium"
                                    style={{ transition: 'color 0.2s' }}
                                >
                                    ← Retour au portail d'accueil
                                </Link>
                            </div>

                            {/* Conteneur Principal de Connexion */}
                            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                                
                                {/* En-tête Institutionnel */}
                                <div className="card-header border-0 bg-white pt-5 pb-4 text-center">
                                    <div className="mb-2">
                                        <span className="fw-bold fs-3" style={{ letterSpacing: '-0.5px', color: '#003366' }}>
                                            ENS <span className="fw-light text-muted">| Admin</span>
                                        </span>
                                    </div>
                                    <div className="badge bg-subtle text-danger border border-danger-subtle px-3 py-1 rounded-pill mt-2 small" style={{ fontSize: '0.75rem', backgroundColor: '#fff5f5' }}>
                                        Espace Strictement Réservé
                                    </div>
                                    <h5 className="text-secondary mt-3 fw-normal fs-6">
                                        Authentification Admin & Super Admin
                                    </h5>
                                </div>

                                {/* Corps du Formulaire */}
                                <div className="card-body px-4 px-md-5 pb-5 pt-2">
                                    {status && (
                                        <div className="alert alert-success border-0 small shadow-sm mb-4">
                                            {status}
                                        </div>
                                    )}




                                    <form onSubmit={submit}>
                                        {/* Champ Email */}
                                        <div className="mb-3">
                                            <label className="form-label text-dark fw-medium small">
                                                Adresse Email Professionnelle
                                            </label>
                                            <input
                                                type="email"
                                                className={`form-control form-control-lg fs-6 ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="nom.prenom@ens.ma"
                                                style={{ borderRadius: '8px', fontSize: '0.95rem' }}
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                required
                                                autoFocus
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback small fw-medium">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>

                                        {/* Champ Mot de passe */}
                                        <div className="mb-4">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <label className="form-label text-dark fw-medium small mb-0">
                                                    Mot de passe
                                                </label>
                                           
                                            </div>
                                            <input
                                                type="password"
                                                className={`form-control form-control-lg fs-6 ${errors.password ? 'is-invalid' : ''}`}
                                                placeholder="••••••••"
                                                style={{ borderRadius: '8px', fontSize: '0.95rem' }}
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                                required
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback small fw-medium">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>

                                        {/* Option Se souvenir de moi */}
                                        <div className="form-check mb-4">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="rememberMe"
                                                style={{ cursor: 'pointer' }}
                                                checked={data.remember}
                                                onChange={(e) => setData('remember', e.target.checked)}
                                            />
                                            <label className="form-check-label text-muted small user-select-none" htmlFor="rememberMe" style={{ cursor: 'pointer' }}>
                                                Rester connecté sur cet appareil
                                            </label>
                                        </div>

                                        {/* Bouton de Soumission */}
                                        <button
                                            type="submit"
                                            className="btn btn-lg w-100 text-white fw-medium shadow-sm d-flex align-items-center justify-content-center py-2"
                                            style={{ backgroundColor: '#003366', border: 'none', borderRadius: '8px', fontSize: '1rem' }}
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                    Connexion en cours...
                                                </>
                                            ) : (
                                                'Se connecter'
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
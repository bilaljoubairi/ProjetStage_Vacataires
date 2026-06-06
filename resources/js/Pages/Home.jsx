import React from 'react';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
            {/* Custom Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3 shadow-sm">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Logo & Titre Institutionnel */}
                    <Link href="/" className="navbar-brand d-flex align-items-center text-decoration-none">
                        {/* Optionnel : Placez une balise <img> pour le logo officiel de l'ENS ici */}
                        <span className="fw-bold text-dark fs-4" style={{ letterSpacing: '-0.5px', color: '#003366' }}>
                            ENS <span className="fw-light text-muted">| Gestion Vacataires</span>
                        </span>
                    </Link>

                    {/* Actions de navigation épurées */}
                    <div className="d-flex gap-3 align-items-center">
                        <Link
                            href="/espace-vacataire"
                            className="btn btn-outline-primary px-4 fw-medium text-uppercase fs-7"
                            style={{ borderColor: '#003366', color: '#003366', fontSize: '0.85rem' }}
                        >
                            Espace Vacataire
                        </Link>
                        
                        <Link
                            href="/login"
                            className="btn text-white px-4 fw-medium text-uppercase fs-7 shadow-sm"
                            style={{ backgroundColor: '#003366', fontSize: '0.85rem' }}
                        >
                            Connexion Admin
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container my-auto py-5">
                <div className="row align-items-center g-5">
                    {/* Contenu textuel */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="badge bg-subtle text-primary border border-primary px-3 py-2 rounded-pill mb-3" style={{ backgroundColor: '#e6f0fa', color: '#003366' }}>
                            Portail Officiel d'Inscription
                        </div>
                        <h1 className="display-4 fw-extrabold lh-sm mb-4" style={{ color: '#0a2540', fontWeight: '800' }}>
                            Plateforme de gestion <br />
                            <span style={{ color: '#003366' }}>des enseignants vacataires</span>
                        </h1>
                        <p className="lead text-secondary mb-5 fs-5" style={{ maxWidth: '500px' }}>
                            Déposez votre dossier de candidature en quelques clics, suivez l'avancement de votre validation et gérez vos pièces justificatives en toute sécurité.
                        </p>
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
                            <Link
                                href="/deposer-dossier"
                                className="btn btn-primary btn-lg px-5 py-3 fw-semibold shadow"
                                style={{ backgroundColor: '#003366', borderColor: '#003366', borderRadius: '8px' }}
                            >
                                Déposer mon dossier
                            </Link>
                        </div>
                    </div>

                    {/* Illustration vectorielle moderne */}
                    <div className="col-lg-6 text-center">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Enseignement ENS"
                            className="img-fluid img-responsive float-lg-end"
                            style={{ maxHeight: '400px', width: 'auto' }}
                        />
                    </div>
                </div>
            </div>

            {/* Footer Institutionnel Discret */}
            <footer className="bg-white border-top py-3 text-center text-muted fs-7">
                <div className="container">
                    <small>© {new Date().getFullYear()} École Normale Supérieure (ENS) - Tous droits réservés.</small>
                </div>
            </footer>
        </div>
    );
}
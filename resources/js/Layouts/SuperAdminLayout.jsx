
import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function SuperAdminLayout({ children }) {
    const { url } = usePage();

    // Vérifie si le lien est actif
    const isPathActive = (path) => url.startsWith(path);

    return (
        <div className="d-flex min-vh-100" style={{ backgroundColor: "#f1f5f9" }}>
            {/* SIDEBAR */}
            <aside className="d-flex flex-column text-white shadow-sm" style={{ width: "260px", backgroundColor: "#0f172a" }}>
                <div className="p-4 border-bottom border-secondary">
                    <h6 className="fw-bold text-uppercase text-white mb-0" style={{ letterSpacing: "1px" }}>
                        ENS Direction
                    </h6>
                    <small style={{ color: "#94a3b8" }}>Administration</small>
                </div>

                <nav className="p-3 flex-grow-1">
                    <ul className="nav flex-column gap-2">
                        {[
                            { name: "Tableau de bord", path: "/superadmin/dashboard", icon: "bi-speedometer2" },
                            { name: "Gestion Vacataires", path: "/superadmin/vacataires", icon: "bi-people" },
                            { name: "Gestion Admins", path: "/superadmin/admins", icon: "bi-shield-lock" },
                        ].map((item) => (
                            <li className="nav-item" key={item.path}>
                                <Link
                                    href={item.path}
                                    className={`nav-link px-3 py-2 rounded ${isPathActive(item.path) ? "bg-primary text-white" : "text-light"}`}
                                    style={{ transition: "all 0.2s" }}
                                >
                                    <i className={`bi ${item.icon} me-2`}></i> {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-3 border-top border-secondary">
                    <Link href="/logout" method="post" as="button" className="btn btn-outline-light w-100 btn-sm">
                        Déconnexion
                    </Link>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-grow-1">
                <header className="bg-white p-3 shadow-sm d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-muted">Espace Super Administrateur</h5>
                </header>
                <div className="p-4">
                    {children}
                </div>
            </main>
        </div>
    );
}
// import React from "react";
// import { Link, router, usePage } from "@inertiajs/react";

// export default function AdminLayout({ children }) {

//     const { url } = usePage();

//     function logout(e) {

//         e.preventDefault();

//         router.post('/logout');

//     }

//     return (

//         <div
//             className="d-flex"
//             style={{
//                 minHeight: "100vh",
//                 background: "#f4f7fb"
//             }}
//         >

//             {/* SIDEBAR */}

//             <div
//                 style={{
//                     width: "270px",
//                     background: "linear-gradient(180deg, #111827 0%, #1f2937 100%)",
//                     color: "white",
//                     padding: "30px 22px",
//                     boxShadow: "4px 0 20px rgba(0,0,0,0.08)"
//                 }}
//             >

//                 {/* LOGO */}

//                 <div className="mb-5">

//                     <h2
//                         className="fw-bold"
//                         style={{
//                             fontSize: "28px",
//                             letterSpacing: "0.5px"
//                         }}
//                     >
//                         Vacataire
//                     </h2>

//                     <p
//                         style={{
//                             color: "#9ca3af",
//                             marginTop: "-5px",
//                             fontSize: "14px"
//                         }}
//                     >
//                         Administration Panel
//                     </p>

//                 </div>

//                 {/* MENU */}

//                 <div className="d-flex flex-column gap-2">

//                     <Link
//                         href="/dashboard"
//                         className={`text-decoration-none px-3 py-3 rounded-3 fw-semibold ${
//                             url === "/dashboard"
//                                 ? "bg-primary text-white"
//                                 : "text-light"
//                         }`}
//                         style={{
//                             transition: "0.2s"
//                         }}
//                     >
//                         📊 Dashboard
//                     </Link>

//                     <Link
//                         href="/vacataires"
//                         className={`text-decoration-none px-3 py-3 rounded-3 fw-semibold ${
//                             url.startsWith("/vacataires")
//                                 ? "bg-primary text-white"
//                                 : "text-light"
//                         }`}
//                         style={{
//                             transition: "0.2s"
//                         }}
//                     >
//                         👨‍🏫 Vacataires
//                     </Link>

//                 </div>

//                 {/* LOGOUT */}

//                 <div
//                     style={{
//                         position: "absolute",
//                         bottom: "30px",
//                         width: "225px"
//                     }}
//                 >

//                     <button
//                         onClick={logout}
//                         className="btn w-100 fw-semibold"
//                         style={{
//                             background: "#dc2626",
//                             color: "white",
//                             borderRadius: "12px",
//                             padding: "12px",
//                             border: "none",
//                             transition: "0.2s",
//                             boxShadow: "0 4px 12px rgba(220,38,38,0.25)"
//                         }}
//                     >
//                         Logout
//                     </button>

//                 </div>

//             </div>

//             {/* CONTENT */}

//             <div
//                 className="flex-grow-1"
//                 style={{
//                     padding: "35px"
//                 }}
//             >

//                 {/* TOP BAR */}

//                 <div
//                     className="d-flex justify-content-between align-items-center mb-4"
//                 >

//                     <div>

//                         <h3
//                             className="fw-bold mb-1"
//                             style={{
//                                 color: "#111827"
//                             }}
//                         >
//                             Dashboard
//                         </h3>

//                         <p
//                             className="text-muted mb-0"
//                         >
//                             Gestion des vacataires et administration
//                         </p>

//                     </div>

//                     <div
//                         className="d-flex align-items-center gap-3"
//                     >

//                         <div
//                             className="bg-white shadow-sm rounded-circle d-flex justify-content-center align-items-center"
//                             style={{
//                                 width: "48px",
//                                 height: "48px",
//                                 fontSize: "18px",
//                                 fontWeight: "bold",
//                                 color: "#111827"
//                             }}
//                         >
//                             A
//                         </div>

//                     </div>

//                 </div>

//                 {/* PAGE */}

//                 <div
//                     className="bg-white p-4 rounded-4 shadow-sm"
//                     style={{
//                         minHeight: "85vh"
//                     }}
//                 >

//                     {children}

//                 </div>

//             </div>

//         </div>

//     );

// }


import React from "react";
import { Link, router, usePage } from "@inertiajs/react";

export default function AdminLayout({ children }) {
    const { url, auth } = usePage(); // Récupère l'utilisateur connecté si dispo

    // Détermination dynamique du titre de la Topbar selon l'URL active
    const getPageTitle = () => {
        if (url.startsWith("/vacataires")) return "Gestion des Vacataires";
        if (url === "/dashboard") return "Tableau de Bord";
        return "Administration";
    };

    function logout(e) {
        e.preventDefault();
        router.post('/logout');
    }

    return (
        <div className="d-flex" style={{ minHeight: "100vh", background: "#f8fafc" }}>
            
            {/* INJECTION DE STYLES CSS POUR LES HOVERS ET EFFETS PRO */}
            <style>{`
                .sidebar-link {
                    color: #94a3b8;
                    transition: all 0.2s ease-in-out;
                }
                .sidebar-link:hover {
                    color: #ffffff !important;
                    background-color: rgba(255, 255, 255, 0.05);
                }
                .sidebar-link.active {
                    color: #ffffff !important;
                    background-color: #003366 !important; /* Bleu institutionnel ENS */
                    box-shadow: 0 4px 12px rgba(0, 51, 102, 0.25);
                }
                .btn-logout-custom {
                    background-color: rgba(220, 38, 38, 0.1);
                    color: #ef4444;
                    border: 1px solid rgba(220, 38, 38, 0.2);
                    transition: all 0.2s ease;
                }
                .btn-logout-custom:hover {
                    background-color: #dc2626;
                    color: #ffffff;
                    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.2);
                }
            `}</style>

            {/* SIDEBAR FIXE ET ERGONOMIQUE */}
            <div
                className="d-flex flex-column justify-content-between shrink-0"
                style={{
                    width: "280px",
                    background: "#0f172a", /* Slate 900 très moderne */
                    padding: "32px 24px",
                    boxShadow: "6px 0 30px rgba(0,0,0,0.04)",
                    height: "100vh",
                    position: "sticky",
                    top: 0
                }}
            >
                {/* SECTION SUPÉRIEURE : LOGO + MENU */}
                <div>
                    {/* EN-TÊTE LOGO */}
                    <div className="mb-4 pb-3 border-bottom border-secondary border-opacity-10">
                        <div className="d-flex align-items-center gap-2">
                            <div className="rounded-3 d-flex align-items-center justify-content-center text-white fw-bold" 
                                 style={{ width: "35px", height: "35px", background: "#003366", fontSize: "16px" }}>
                                E
                            </div>
                            <h2 className="fw-bold m-0 text-white" style={{ fontSize: "22px", letterSpacing: "-0.5px" }}>
                                ENS Portal
                            </h2>
                        </div>
                        <p className="m-0 mt-1" style={{ color: "#64748b", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
                            Espace Administratif
                        </p>
                    </div>

                    {/* LIENS DE NAVIGATION (MENU) */}
                    <div className="d-flex flex-column gap-1">
                        <span className="text-muted small fw-bold text-uppercase mb-2" style={{ fontSize: "11px", letterSpacing: "0.5px", color: "#475569" }}>
                            Général
                        </span>
                        
                        <Link
                            href="/dashboard"
                            className={`sidebar-link d-flex align-items-center gap-3 text-decoration-none px-3 py-2.5 rounded-3 fw-medium ${
                                url === "/dashboard" ? "active" : ""
                            }`}
                        >
                            <i className="bi bi-grid-1x2-fill" style={{ fontSize: "18px" }}></i>
                            <span>Dashboard</span>
                        </Link>

                        <Link
                            href="/vacataires"
                            className={`sidebar-link d-flex align-items-center gap-3 text-decoration-none px-3 py-2.5 rounded-3 fw-medium ${
                                url.startsWith("/vacataires") ? "active" : ""
                            }`}
                        >
                            <i className="bi bi-people-fill" style={{ fontSize: "18px" }}></i>
                            <span>Vacataires</span>
                        </Link>
                    </div>
                </div>

                {/* SECTION INFÉRIEURE : BOUTON DE DÉCONNEXION */}
                <div>
                    <button
                        onClick={logout}
                        className="btn btn-logout-custom w-100 fw-semibold d-flex align-items-center justify-content-center gap-2 py-2.5 rounded-3"
                        style={{ border: "none" }}
                    >
                        <i className="bi bi-box-arrow-left"></i>
                        <span>Déconnexion</span>
                    </button>
                </div>
            </div>

            {/* ZONE DE CONTENU PRINCIPAL */}
            <div className="flex-grow-1 d-flex flex-column" style={{ overflowX: "hidden" }}>
                
                {/* TOP BAR PREMIUM */}
                <header
                    className="d-flex justify-content-between align-items-center bg-white border-bottom px-4 px-lg-5 py-3"
                    style={{ minHeight: "75px" }}
                >
                    <div>
                        <h1 className="fw-bold text-dark m-0 fs-5">
                            {getPageTitle()}
                        </h1>
                        <p className="text-muted m-0 small d-none d-sm-block">
                            Système de gestion et suivi de l'établissement
                        </p>
                    </div>

                    {/* BLOC UTILISATEUR CONNECTÉ */}
                    <div className="d-flex align-items-center gap-3">
                        <div className="text-end d-none d-md-block">
                            <span className="fw-semibold d-block text-dark small">
                                {auth?.user?.name || "Administrateur"}
                            </span>
                            
                        </div>
                        <div
                            className="bg-light border shadow-sm rounded-circle d-flex justify-content-center align-items-center text-secondary"
                            style={{
                                width: "42px",
                                height: "42px",
                                fontSize: "15px",
                                fontWeight: "600",
                            }}
                        >
                            {auth?.user?.name ? auth.user.name.charAt(0).toUpperCase() : "A"}
                        </div>
                    </div>
                </header>

                {/* CONTENU DE LA PAGE INJECTÉE */}
                <main className="flex-grow-1 p-4 p-lg-5">
                    <div 
                        className="bg-white p-4 p-md-5 rounded-4 border shadow-sm"
                        style={{ minHeight: "calc(100vh - 180px)" }}
                    >
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}

// import React from "react";

// import { Link, router } from "@inertiajs/react";

// import AdminLayout from "@/Layouts/AdminLayout";

// export default function Index({ vacataires }) {

//     // ================= SUPPRIMER =================

//     const supprimerVacataire = (id) => {

//         if (confirm("Voulez-vous supprimer ce vacataire ?")) {

//             router.post(`/vacataires/delete/${id}`);

//         }

//     };

//     // ================= ACCEPTER =================

//     const accepterVacataire = (id) => {

//         router.post(`/vacataires/accepter/${id}`);

//     };

//     // ================= REFUSER =================

//     const refuserVacataire = (id) => {

//         router.post(`/vacataires/refuser/${id}`);

//     };

//     return (

//         <AdminLayout>

//             <div className="container-fluid py-4">

//                 {/* HEADER */}

//                 <div className="d-flex justify-content-between align-items-center mb-4">

//                     <div>

//                         <h1
//                             className="fw-bold"
//                             style={{
//                                 fontSize: "34px",
//                                 color: "#0f172a",
//                             }}
//                         >
//                             Gestion des Vacataires
//                         </h1>

//                         <p className="text-muted">
//                             Administration des candidatures des vacataires
//                         </p>

//                     </div>

//                     <Link
//                         href="/vacataires/create"
//                         className="btn btn-primary px-4 py-2 shadow-sm"
//                         style={{
//                             borderRadius: "12px",
//                             fontWeight: "600",
//                         }}
//                     >
//                         + Ajouter Vacataire
//                     </Link>

//                 </div>

//                 {/* TABLE */}

//                 <div
//                     className="card border-0 shadow-sm"
//                     style={{
//                         borderRadius: "20px",
//                     }}
//                 >

//                     <div className="card-body">

//                         <div className="table-responsive">

//                             <table className="table align-middle">

//                                 <thead>

//                                     <tr
//                                         style={{
//                                             backgroundColor: "#0f172a",
//                                             color: "white",
//                                         }}
//                                     >

//                                         <th className="py-3">
//                                             Nom
//                                         </th>

//                                         <th>
//                                             Prénom
//                                         </th>

//                                         <th>
//                                             Email
//                                         </th>

//                                         <th>
//                                             Spécialité
//                                         </th>

//                                         <th>
//                                             Status
//                                         </th>

//                                         <th className="text-center">
//                                             Actions
//                                         </th>

//                                     </tr>

//                                 </thead>

//                                 <tbody>

//                                     {
//                                         vacataires.length > 0 ? (

//                                             vacataires.map((vacataire) => (

//                                                 <tr key={vacataire.id}>

//                                                     <td className="fw-semibold">
//                                                         {vacataire.nom}
//                                                     </td>

//                                                     <td>
//                                                         {vacataire.prenom}
//                                                     </td>

//                                                     <td>
//                                                         {vacataire.email}
//                                                     </td>

//                                                     <td>
//                                                         {vacataire.specialite}
//                                                     </td>

//                                                     {/* STATUS */}

//                                                     <td>

//                                                         <div className="d-flex align-items-center gap-2">

//                                                             {
//                                                                 vacataire.statut === "accepte" && (
//                                                                     <>
//                                                                         <span
//                                                                             style={{
//                                                                                 width: "10px",
//                                                                                 height: "10px",
//                                                                                 borderRadius: "50%",
//                                                                                 backgroundColor: "#22c55e",
//                                                                                 display: "inline-block",
//                                                                             }}
//                                                                         ></span>

//                                                                         <span
//                                                                             className="fw-semibold"
//                                                                             style={{
//                                                                                 color: "#22c55e",
//                                                                             }}
//                                                                         >
//                                                                             Accepté
//                                                                         </span>
//                                                                     </>
//                                                                 )
//                                                             }

//                                                             {
//                                                                 vacataire.statut === "refuse" && (
//                                                                     <>
//                                                                         <span
//                                                                             style={{
//                                                                                 width: "10px",
//                                                                                 height: "10px",
//                                                                                 borderRadius: "50%",
//                                                                                 backgroundColor: "#ef4444",
//                                                                                 display: "inline-block",
//                                                                             }}
//                                                                         ></span>

//                                                                         <span
//                                                                             className="fw-semibold"
//                                                                             style={{
//                                                                                 color: "#ef4444",
//                                                                             }}
//                                                                         >
//                                                                             Refusé
//                                                                         </span>
//                                                                     </>
//                                                                 )
//                                                             }

//                                                             {
//                                                                 vacataire.statut === "en attente" && (
//                                                                     <>
//                                                                         <span
//                                                                             style={{
//                                                                                 width: "10px",
//                                                                                 height: "10px",
//                                                                                 borderRadius: "50%",
//                                                                                 backgroundColor: "#f59e0b",
//                                                                                 display: "inline-block",
//                                                                             }}
//                                                                         ></span>

//                                                                         <span
//                                                                             className="fw-semibold"
//                                                                             style={{
//                                                                                 color: "#f59e0b",
//                                                                             }}
//                                                                         >
//                                                                             En attente
//                                                                         </span>
//                                                                     </>
//                                                                 )
//                                                             }

//                                                         </div>

//                                                     </td>

//                                                     {/* ACTIONS */}

//                                                     <td>

//                                                         <div className="d-flex flex-wrap gap-2 justify-content-center">

//                                                             <Link
//                                                                 href={`/vacataires/${vacataire.id}`}
//                                                                 className="btn btn-sm btn-primary"
//                                                                 style={{
//                                                                     borderRadius: "10px",
//                                                                 }}
//                                                             >
//                                                                 Voir
//                                                             </Link>

//                                                             <Link
//                                                                 href={`/vacataires/${vacataire.id}/edit`}
//                                                                 className="btn btn-sm btn-warning text-dark"
//                                                                 style={{
//                                                                     borderRadius: "10px",
//                                                                 }}
//                                                             >
//                                                                 Modifier
//                                                             </Link>

//                                                             <button
//                                                                 onClick={() =>
//                                                                     accepterVacataire(vacataire.id)
//                                                                 }
//                                                                 className="btn btn-sm btn-success"
//                                                                 style={{
//                                                                     borderRadius: "10px",
//                                                                 }}
//                                                             >
//                                                                 Accepter
//                                                             </button>

//                                                             <button
//                                                                 onClick={() =>
//                                                                     refuserVacataire(vacataire.id)
//                                                                 }
//                                                                 className="btn btn-sm btn-danger"
//                                                                 style={{
//                                                                     borderRadius: "10px",
//                                                                 }}
//                                                             >
//                                                                 Refuser
//                                                             </button>

//                                                             <button
//                                                                 onClick={() =>
//                                                                     supprimerVacataire(vacataire.id)
//                                                                 }
//                                                                 className="btn btn-sm btn-dark"
//                                                                 style={{
//                                                                     borderRadius: "10px",
//                                                                 }}
//                                                             >
//                                                                 Supprimer
//                                                             </button>

//                                                         </div>

//                                                     </td>

//                                                 </tr>

//                                             ))

//                                         ) : (

//                                             <tr>

//                                                 <td
//                                                     colSpan="6"
//                                                     className="text-center py-5 text-muted"
//                                                 >
//                                                     Aucun vacataire trouvé
//                                                 </td>

//                                             </tr>

//                                         )
//                                     }

//                                 </tbody>

//                             </table>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </AdminLayout>

//     );

// }
import React from "react";
import { Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";

export default function Index({ vacataires }) {

    // ================= ACTIONS =================
    const supprimerVacataire = (id) => {
        if (confirm("Voulez-vous vraiment supprimer définitivement ce vacataire ?")) {
            router.post(`/vacataires/delete/${id}`);
        }
    };

    const accepterVacataire = (id) => {
        router.post(`/vacataires/accepter/${id}`);
    };

    const refuserVacataire = (id) => {
        router.post(`/vacataires/refuser/${id}`);
    };

    return (
        <AdminLayout>
            {/* Conteneur principal avec un fond légèrement teinté pour faire ressortir les cartes */}
            <div className="container-fluid py-4 px-4" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
                
                {/* HEADER INSTITUTIONNEL */}
                <div className="d-flex justify-content-between align-items-center mb-5 border-bottom pb-3">
                    <div>
                        <h1 
                            className="fw-bold tracking-tight mb-1" 
                            style={{ color: "#0f172a", fontSize: "30px", fontFamily: "'Inter', sans-serif" }}
                        >
                            Gestion des Vacataires
                        </h1>
                        <p className="text-muted small m-0" style={{ fontSize: "14px" }}>
                            Espace d'administration et de validation des vacataires • ENS
                        </p>
                    </div>

                    <Link
                        href="/vacataires/create"
                        className="btn text-white px-4 py-2 fw-semibold shadow-sm"
                        style={{
                            borderRadius: "8px",
                            backgroundColor: "#1e40af", // Bleu académique officiel
                            fontSize: "14px",
                            border: "none",
                            transition: "all 0.2s ease"
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#1d4ed8"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#1e40af"}
                    >
                        + Ajouter un enseignant
                    </Link>
                </div>

                {/* TABLE CARD */}
                <div 
                    className="card border-0 shadow-sm overflow-hidden" 
                    style={{ borderRadius: "12px", backgroundColor: "#ffffff" }}
                >
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0" style={{ fontSize: "14px" }}>
                                
                                {/* Header du tableau élégant */}
                                <thead style={{ backgroundColor: "#f1f5f9", borderBottom: "2px solid #e2e8f0" }}>
                                    <tr>
                                        <th className="py-3 px-4 text-secondary fw-semibold text-uppercase" style={{ fontSize: "12px" }}>Enseignant</th>
                                        <th className="py-3 text-secondary fw-semibold text-uppercase" style={{ fontSize: "12px" }}>Email</th>
                                        <th className="py-3 text-secondary fw-semibold text-uppercase" style={{ fontSize: "12px" }}>Spécialité / Département</th>
                                        <th className="py-3 text-secondary fw-semibold text-uppercase" style={{ fontSize: "12px" }}>Statut du dossier</th>
                                        <th className="py-3 text-secondary fw-semibold text-uppercase text-center" style={{ fontSize: "12px" }}>Actions administratifs</th>
                                    </tr>
                                </thead>

                                <tbody className="border-0">
                                    {vacataires.length > 0 ? (
                                        vacataires.map((vacataire) => (
                                            <tr key={vacataire.id} style={{ transition: "background-color 0.2s" }}>
                                                
                                                {/* Nom & Prénom combinés pour faire plus propre */}
                                                <td className="py-3 px-4">
                                                    <span className="fw-semibold text-dark d-block">
                                                        {vacataire.nom.toUpperCase()} {vacataire.prenom}
                                                    </span>
                                                    <small className="text-muted" style={{ fontSize: "11px" }}>ID: #{vacataire.id}</small>
                                                </td>

                                                <td className="text-secondary">{vacataire.email}</td>
                                                
                                                <td>
                                                    <span className="badge bg-light text-secondary border px-2 py-1" style={{ borderRadius: "6px" }}>
                                                        {vacataire.specialite}
                                                    </span>
                                                </td>

                                                {/* BADGES DE STATUT PROFESSIONNELS (Pastels) */}
                                                <td>
                                                    {vacataire.statut === "accepte" && (
                                                        <span className="badge px-3 py-2" style={{ backgroundColor: "#dcfce7", color: "#15803d", borderRadius: "20px", fontWeight: "600" }}>
                                                            ● Accepté
                                                        </span>
                                                    )}
                                                    {vacataire.statut === "refuse" && (
                                                        <span className="badge px-3 py-2" style={{ backgroundColor: "#fee2e2", color: "#b91c1c", borderRadius: "20px", fontWeight: "600" }}>
                                                            ● Refusé
                                                        </span>
                                                    )}
                                                    {vacataire.statut === "en attente" && (
                                                        <span className="badge px-3 py-2" style={{ backgroundColor: "#fef3c7", color: "#b45309", borderRadius: "20px", fontWeight: "600" }}>
                                                            ● En attente
                                                        </span>
                                                    )}
                                                </td>

                                                {/* ACTIONS STRIPDOWN (Boutons épurés et modernes) */}
                                                <td>
                                                    <div className="d-flex gap-2 justify-content-center px-3">
                                                        <Link
                                                            href={`/vacataires/${vacataire.id}`}
                                                            className="btn btn-sm text-secondary bg-light border"
                                                            style={{ borderRadius: "6px", fontSize: "13px" }}
                                                        >
                                                            Consulter
                                                        </Link>

                                                        {/* <Link
                                                            href={`/vacataires/${vacataire.id}/edit`}
                                                            className="btn btn-sm text-dark bg-light border"
                                                            style={{ borderRadius: "6px", fontSize: "13px" }}
                                                        >
                                                            Modifier
                                                        </Link> */}

                                                        {vacataire.statut !== "accepte" && (
                                                            <button
                                                                onClick={() => accepterVacataire(vacataire.id)}
                                                                className="btn btn-sm text-white"
                                                                style={{ backgroundColor: "#16a34a", borderRadius: "6px", fontSize: "13px" }}
                                                            >
                                                                Valider
                                                            </button>
                                                        )}

                                                        {vacataire.statut !== "refuse" && (
                                                            <button
                                                                onClick={() => refuserVacataire(vacataire.id)}
                                                                className="btn btn-sm text-danger bg-white border-danger-subtle"
                                                                style={{ borderRadius: "6px", fontSize: "13px" }}
                                                            >
                                                                Rejeter
                                                            </button>
                                                        )}

                                                        <button
                                                            onClick={() => supprimerVacataire(vacataire.id)}
                                                            className="btn btn-sm btn-link text-muted p-0 ms-2 text-decoration-none"
                                                            style={{ fontSize: "13px" }}
                                                            title="Supprimer définitivement"
                                                        >
                                                            Supprimer
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-5 text-muted bg-white">
                                                <div className="py-4">
                                                    <p className="mb-0 fw-medium">Aucun dossier de vacataire trouvé dans la base de données.</p>
                                                    <small className="text-muted">Les nouvelles candidatures apparaîtront ici.</small>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    );
}
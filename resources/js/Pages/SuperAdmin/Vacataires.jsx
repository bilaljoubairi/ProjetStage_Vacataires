import React from "react";

import { Link, router } from "@inertiajs/react";

import SuperAdminLayout from "@/Layouts/SuperAdminLayout";

export default function Vacataires({ vacataires }) {

    // ================= SUPPRIMER =================

    const supprimerVacataire = (id) => {

        if (
            confirm(
                "Voulez-vous vraiment supprimer ce dossier ?"
            )
        ) {

            router.post(`/vacataires/delete/${id}`);

        }

    };

    // ================= ACCEPTER =================

    const accepterVacataire = (id) => {

        if (
            confirm(
                "Valider ce dossier vacataire ?"
            )
        ) {

            router.post(`/vacataires/accepter/${id}`);

        }

    };

    // ================= REFUSER =================

    const refuserVacataire = (id) => {

        if (
            confirm(
                "Refuser ce dossier vacataire ?"
            )
        ) {

            router.post(`/vacataires/refuser/${id}`);

        }

    };

    return (

        <SuperAdminLayout>

            <div
                className="container-fluid py-4"
                style={{
                    background: "#f8fafc",
                    minHeight: "100vh",
                }}
            >

                {/* HEADER */}

                <div className="mb-5">

                    <h1
                        className="fw-bold mb-1"
                        style={{
                            color: "#0f172a",
                            fontSize: "32px",
                        }}
                    >
                        Gestion des Vacataires
                    </h1>

                    <p
                        className="text-muted"
                        style={{
                            fontSize: "15px",
                        }}
                    >
                        Gestion et validation des dossiers des
                        enseignants vacataires
                    </p>

                </div>

                {/* TABLEAU */}

                <div
                    className="card border-0 shadow-sm"
                    style={{
                        borderRadius: "18px",
                    }}
                >

                    <div className="card-body p-0">

                        <div className="table-responsive">

                            <table
                                className="table table-hover align-middle mb-0"
                            >

                                {/* HEADER TABLE */}

                                <thead
                                    style={{
                                        background:
                                            "#f1f5f9",
                                    }}
                                >

                                    <tr>

                                        <th className="px-4 py-3">
                                            Enseignant
                                        </th>

                                        <th>
                                            Email
                                        </th>

                                        <th>
                                            Spécialité
                                        </th>

                                        <th>
                                            Statut
                                        </th>

                                        <th className="text-center">
                                            Actions
                                        </th>

                                    </tr>

                                </thead>

                                {/* BODY */}

                                <tbody>

                                    {
                                        vacataires.length > 0 ? (

                                            vacataires.map(
                                                (
                                                    vacataire
                                                ) => (

                                                    <tr
                                                        key={
                                                            vacataire.id
                                                        }
                                                    >

                                                        {/* NOM */}

                                                        <td className="px-4 py-4">

                                                            <div>

                                                                <div
                                                                    className="fw-bold"
                                                                    style={{
                                                                        color:
                                                                            "#0f172a",
                                                                    }}
                                                                >
                                                                    {
                                                                        vacataire.nom
                                                                    }{" "}
                                                                    {
                                                                        vacataire.prenom
                                                                    }
                                                                </div>

                                                                <small className="text-muted">
                                                                    CIN :
                                                                    {" "}
                                                                    {
                                                                        vacataire.cin
                                                                    }
                                                                </small>

                                                            </div>

                                                        </td>

                                                        {/* EMAIL */}

                                                        <td>

                                                            <span className="text-secondary">

                                                                {
                                                                    vacataire.email
                                                                }

                                                            </span>

                                                        </td>

                                                        {/* SPECIALITE */}

                                                        <td>

                                                            <span
                                                                className="badge bg-light text-dark border px-3 py-2"
                                                                style={{
                                                                    borderRadius:
                                                                        "8px",
                                                                }}
                                                            >

                                                                {
                                                                    vacataire.specialite
                                                                }

                                                            </span>

                                                        </td>

                                                        {/* STATUT */}

                                                        <td>

                                                            {
                                                                vacataire.statut ===
                                                                    "accepte" && (

                                                                    <span
                                                                        className="badge px-3 py-2"
                                                                        style={{
                                                                            background:
                                                                                "#dcfce7",
                                                                            color:
                                                                                "#166534",
                                                                            borderRadius:
                                                                                "30px",
                                                                        }}
                                                                    >
                                                                        ● Accepté
                                                                    </span>

                                                                )
                                                            }

                                                            {
                                                                vacataire.statut ===
                                                                    "refuse" && (

                                                                    <span
                                                                        className="badge px-3 py-2"
                                                                        style={{
                                                                            background:
                                                                                "#fee2e2",
                                                                            color:
                                                                                "#b91c1c",
                                                                            borderRadius:
                                                                                "30px",
                                                                        }}
                                                                    >
                                                                        ● Refusé
                                                                    </span>

                                                                )
                                                            }

                                                            {
                                                                (
                                                                    vacataire.statut ===
                                                                        "en_attente" ||

                                                                    vacataire.statut ===
                                                                        "en attente"
                                                                ) && (

                                                                    <span
                                                                        className="badge px-3 py-2"
                                                                        style={{
                                                                            background:
                                                                                "#fef3c7",
                                                                            color:
                                                                                "#b45309",
                                                                            borderRadius:
                                                                                "30px",
                                                                        }}
                                                                    >
                                                                        ● En attente
                                                                    </span>

                                                                )
                                                            }

                                                        </td>

                                                        {/* ACTIONS */}

                                                        <td>

                                                            <div className="d-flex flex-wrap gap-2 justify-content-center">

                                                                {/* CONSULTER */}

                                                                <Link
                                                                   href={`/superadmin/vacataires/${vacataire.id}`}
                                                                    className="btn btn-sm"
                                                                    style={{
                                                                        background:
                                                                            "#eff6ff",
                                                                        color:
                                                                            "#2563eb",
                                                                        border:
                                                                            "1px solid #bfdbfe",
                                                                        borderRadius:
                                                                            "8px",
                                                                    }}
                                                                >
                                                                    Consulter
                                                                </Link>

                                                                {/* ACCEPTER */}

                                                                {
                                                                    vacataire.statut !==
                                                                        "accepte" && (

                                                                        <button
                                                                            onClick={() =>
                                                                                accepterVacataire(
                                                                                    vacataire.id
                                                                                )
                                                                            }
                                                                            className="btn btn-sm text-white"
                                                                            style={{
                                                                                background:
                                                                                    "#16a34a",
                                                                                borderRadius:
                                                                                    "8px",
                                                                            }}
                                                                        >
                                                                            Valider
                                                                        </button>

                                                                    )
                                                                }

                                                                {/* REFUSER */}

                                                                {
                                                                    vacataire.statut !==
                                                                        "refuse" && (

                                                                        <button
                                                                            onClick={() =>
                                                                                refuserVacataire(
                                                                                    vacataire.id
                                                                                )
                                                                            }
                                                                            className="btn btn-sm"
                                                                            style={{
                                                                                background:
                                                                                    "#fee2e2",
                                                                                color:
                                                                                    "#dc2626",
                                                                                border:
                                                                                    "1px solid #fecaca",
                                                                                borderRadius:
                                                                                    "8px",
                                                                            }}
                                                                        >
                                                                            Refuser
                                                                        </button>

                                                                    )
                                                                }

                                                                {/* SUPPRIMER */}

                                                                <button
                                                                    onClick={() =>
                                                                        supprimerVacataire(
                                                                            vacataire.id
                                                                        )
                                                                    }
                                                                    className="btn btn-sm text-white"
                                                                    style={{
                                                                        background:
                                                                            "#111827",
                                                                        borderRadius:
                                                                            "8px",
                                                                    }}
                                                                >
                                                                    Supprimer
                                                                </button>

                                                            </div>

                                                        </td>

                                                    </tr>

                                                )
                                            )

                                        ) : (

                                            <tr>

                                                <td
                                                    colSpan="5"
                                                    className="text-center py-5"
                                                >

                                                    <div>

                                                        <h5 className="text-muted">
                                                            Aucun dossier trouvé
                                                        </h5>

                                                        <p className="text-muted mb-0">
                                                            Les candidatures apparaîtront ici.
                                                        </p>

                                                    </div>

                                                </td>

                                            </tr>

                                        )
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </SuperAdminLayout>

    );

}
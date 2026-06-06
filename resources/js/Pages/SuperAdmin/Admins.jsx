

import React, { useState } from "react";
import { router, usePage, Link } from "@inertiajs/react";
import SuperAdminLayout from "@/Layouts/SuperAdminLayout";
export default function Admins() {

    const { admins } = usePage().props;

    const [showPassword, setShowPassword] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    // ================= AJOUT ADMIN =================

    const handleSubmit = (e) => {

        e.preventDefault();

        if (form.password.length < 8) {

            alert(
                "Le mot de passe doit contenir au moins 8 caractères."
            );

            return;

        }

        router.post("/superadmin/admins", form);

    };

    // ================= SUPPRESSION =================

    const deleteAdmin = (id) => {

        if (confirm("Supprimer cet administrateur ?")) {

            router.post(`/superadmin/admins/delete/${id}`);


    }};

    return (
<SuperAdminLayout>
        <div
            className="min-vh-100"
            style={{
                backgroundColor: "#f1f5f9"
            }}
        >

            {/* HEADER */}

            <div
                className="d-flex justify-content-between align-items-center px-5 py-4 shadow-sm"
                style={{
                    backgroundColor: "#ffffff"
                }}
            >

                <div>

                    <h2
                        className="fw-bold mb-1"
                        style={{
                            color: "#0f172a"
                        }}
                    >
                        Gestion des Administrateurs
                    </h2>

                    <p className="text-muted m-0">
                        Espace Directeur - Administration Générale
                    </p>

                </div>

                <div className="d-flex gap-3">

                    <Link
                        href="/superadmin/dashboard"
                        className="btn btn-dark"
                    >
                        Dashboard
                    </Link>

                    <button
                        className="btn btn-danger"
                        onClick={() => router.post("/logout")}
                    >
                        Déconnexion
                    </button>

                </div>

            </div>

            {/* CONTENT */}

            <div className="container py-5">

                {/* FORMULAIRE */}

                <div
                    className="card border-0 shadow-sm rounded-4 mb-5"
                >

                    <div className="card-body p-5">

                        <div className="mb-4">

                            <h4
                                className="fw-bold"
                                style={{
                                    color: "#0f172a"
                                }}
                            >
                                Ajouter un Administrateur
                            </h4>

                            <p className="text-muted">
                                Créer un nouveau compte administrateur
                            </p>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                {/* NOM */}

                                <div className="col-md-4 mb-3">

                                    <label className="form-label fw-semibold">
                                        Nom
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control py-3"
                                        placeholder="Nom complet"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                name: e.target.value
                                            })
                                        }
                                    />

                                </div>

                                {/* EMAIL */}

                                <div className="col-md-4 mb-3">

                                    <label className="form-label fw-semibold">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control py-3"
                                        placeholder="Adresse email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                email: e.target.value
                                            })
                                        }
                                    />

                                </div>

                                {/* PASSWORD */}

                                <div className="col-md-4 mb-3">

                                    <label className="form-label fw-semibold">
                                        Mot de passe
                                    </label>

                                    <div className="input-group">

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className={`form-control py-3 ${
                                                form.password.length > 0 &&
                                                form.password.length < 8
                                                    ? "is-invalid"
                                                    : ""
                                            }`}
                                            placeholder="Mot de passe"
                                            value={form.password}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    password: e.target.value
                                                })
                                            }
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowPassword(
                                                    !showPassword
                                                )
                                            }
                                        >
                                            {showPassword
                                                ? "👁️‍🗨️"
                                                : "👁️"}
                                        </button>

                                    </div>

                                    {form.password.length > 0 &&
                                        form.password.length < 8 && (

                                        <div className="text-danger mt-2 small">

                                            Le mot de passe doit contenir
                                            au moins 8 caractères.

                                        </div>

                                    )}

                                </div>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary px-4 py-2 mt-3"
                            >
                                Ajouter Administrateur
                            </button>

                        </form>

                    </div>

                </div>

                {/* TABLE */}

                <div
                    className="card border-0 shadow-sm rounded-4"
                >

                    <div
                        className="card-header bg-white border-0 p-4"
                    >

                        <h4
                            className="fw-bold m-0"
                            style={{
                                color: "#0f172a"
                            }}
                        >
                            Liste des Administrateurs
                        </h4>

                    </div>

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table align-middle">

                                <thead>

                                    <tr
                                        style={{
                                            backgroundColor: "#e2e8f0"
                                        }}
                                    >

                                      

                                        <th>
                                            Nom
                                        </th>

                                        <th>
                                            Email
                                        </th>

                                        <th className="text-center">
                                            Actions
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {admins.length > 0 ? (

                                        admins.map((admin) => (

                                            <tr key={admin.id}>

                                             

                                                <td className="fw-semibold">
                                                    {admin.name}
                                                </td>

                                                <td>
                                                    {admin.email}
                                                </td>

                                                <td className="text-center">

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger btn-sm"
                                                        onClick={() =>
                                                            deleteAdmin(admin.id)
                                                        }
                                                    >
                                                        Supprimer
                                                    </button>

                                                </td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="4"
                                                className="text-center py-5 text-muted"
                                            >
                                                Aucun administrateur trouvé
                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>
</SuperAdminLayout>
    );

}
import React, { useState } from "react";
import { router } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";

export default function EditStatut({ vacataire }) {

    const [statut, setStatut] = useState(
        vacataire.statut
    );

    function submit(e) {

        e.preventDefault();

        router.put(

            `/vacataires/${vacataire.id}/statut`,

            {
                statut
            }

        );
    }

    return (

        <AdminLayout>

            <div className="card shadow border-0">

                <div className="card-header bg-dark text-white">

                    <h3>
                        Modifier Statut
                    </h3>

                </div>

                <div className="card-body">

                    <form onSubmit={submit}>

                        <div className="mb-3">

                            <label className="form-label">
                                Statut
                            </label>

                            <select
                                className="form-select"
                                value={statut}
                                onChange={(e) =>
                                    setStatut(
                                        e.target.value
                                    )
                                }
                            >

                                <option value="en_attente">
                                    En attente
                                </option>

                                <option value="accepte">
                                    Accepté
                                </option>

                                <option value="refuse">
                                    Refusé
                                </option>

                            </select>

                        </div>

                        <button className="btn btn-dark">
                            Modifier Statut
                        </button>

                    </form>

                </div>

            </div>

        </AdminLayout>
    );
}
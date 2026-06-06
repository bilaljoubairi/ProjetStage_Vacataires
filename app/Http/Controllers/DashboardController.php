<?php

namespace App\Http\Controllers;

use App\Models\Vacataire;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $totalVacataires = Vacataire::count();

        $totalAcceptes = Vacataire::where(
            'statut',
            'accepte'
        )->count();

        $totalRefuses = Vacataire::where(
            'statut',
            'refuse'
        )->count();

        $totalAttente = Vacataire::where(
            'statut',
            'en_attente'
        )->count();

        return Inertia::render('Admin/Dashboard', [
            'totalVacataires' => $totalVacataires,
            'totalAcceptes' => $totalAcceptes,
            'totalRefuses' => $totalRefuses,
            'totalAttente' => $totalAttente,
        ]);
    }
}
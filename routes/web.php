<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VacataireController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SuperAdminController;

// ================= HOME =================

Route::get('/', function () {

    return Inertia::render('Home');
});

// ================= DEPOT DOSSIER =================

Route::get(
    '/deposer-dossier',
    [VacataireController::class, 'create']
);

Route::post(
    '/deposer-dossier',
    [VacataireController::class, 'store']
);

// ================= SUPER ADMIN =================

Route::middleware(['auth', 'superadmin'])->group(function () {

    // DASHBOARD
    Route::get(
        '/superadmin/dashboard',
        [SuperAdminController::class, 'dashboard']
    )->name('superadmin.dashboard');

    //liste des vacataires
    // ================= GESTION VACATAIRES SUPERADMIN =================

    Route::middleware(['auth', 'superadmin'])->group(function () {

        Route::get(
            '/superadmin/vacataires',
            [VacataireController::class, 'superadminIndex']
        )->name('superadmin.vacataires');

        // DETAILS
        Route::get(
            '/superadmin/vacataires/{vacataire}',
            [VacataireController::class, 'showSuperAdmin']
        )->name('superadmin.vacataires.show');
    });

    // LISTE ADMINS
    Route::get(
        '/superadmin/admins',
        [SuperAdminController::class, 'index']
    )->name('superadmin.admins');

    // AJOUT ADMIN
    Route::post(
        '/superadmin/admins',
        [SuperAdminController::class, 'store']
    )->name('superadmin.admins.store');

    // SUPPRESSION ADMIN
    Route::post(
        '/superadmin/admins/delete/{id}',
        [SuperAdminController::class, 'destroy']
    )->name('superadmin.admins.destroy');
});

// ================= ESPACE VACATAIRE =================

Route::get(
    '/espace-vacataire',
    [VacataireController::class, 'espace']
);

// Route::get(
//     '/suivi-dossier',
//     [VacataireController::class, 'suiviDossier']
// );
Route::get(
    '/suivi-dossier/{vacataire}',
    [VacataireController::class, 'suiviDossier']
)->name('suivi.dossier');
Route::post(
    '/espace-vacataire/recherche',
    [VacataireController::class, 'recherche']
);


// MODIFIER
// page edit dossier
Route::get(
    '/espace-vacataire/edit/{vacataire}',
    [VacataireController::class, 'edit']
)->name('vacataire.edit');

// update dossier
Route::put(
    '/espace-vacataire/update/{vacataire}',
    [VacataireController::class, 'update']
)->name('vacataire.update');


// AJOUT VACATAIRE
Route::get(
    '/vacataires/create',
    [VacataireController::class, 'create']
)->name('vacataires.create');

Route::post(
    '/vacataires',
    [VacataireController::class, 'store']
)->name('vacataires.store');

Route::middleware(['auth'])->group(function () {

    // LISTE VACATAIRES
    Route::get(
        '/vacataires',
        [VacataireController::class, 'index']
    )->name('vacataires.index');

    // AJOUT VACATAIRE


    // DETAILS
    Route::get(
        '/vacataires/{vacataire}',
        [VacataireController::class, 'show']
    )->name('vacataires.show');


    // SUPPRIMER


    Route::post(
        '/vacataires/delete/{id}',
        [VacataireController::class, 'destroy']
    )->name('vacataires.destroy');

    // ACCEPTER
    Route::post(
        '/vacataires/accepter/{id}',
        [VacataireController::class, 'accepter']
    )->name('vacataires.accepter');
    // REFUSER
    Route::post(
        '/vacataires/refuser/{id}',
        [VacataireController::class, 'refuser']
    )->name('vacataires.refuser');

    // STATUT
    Route::get(
        '/vacataires/{vacataire}/statut',
        [VacataireController::class, 'editStatut']
    )->name('vacataires.statut.edit');

    Route::put(
        '/vacataires/{vacataire}/statut',
        [VacataireController::class, 'updateStatut']
    )->name('vacataires.statut.update');
});
// ================= DASHBOARD =================

Route::get(
    '/dashboard',
    [DashboardController::class, 'index']
)->middleware(['auth'])->name('dashboard');

// ================= PROFILE =================

Route::middleware('auth')->group(function () {

    Route::get(
        '/profile',
        [ProfileController::class, 'edit']
    )->name('profile.edit');

    Route::patch(
        '/profile',
        [ProfileController::class, 'update']
    )->name('profile.update');

    Route::delete(
        '/profile',
        [ProfileController::class, 'destroy']
    )->name('profile.destroy');
});

require __DIR__ . '/auth.php';

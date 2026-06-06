<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Vacataire;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class SuperAdminController extends Controller
{
    // ================= DASHBOARD =================

    public function dashboard()
    {
        $totalAdmins = User::where(
            'role',
            'admin'
        )->count();

        $totalVacataires = Vacataire::count();

        return Inertia::render(
            'SuperAdmin/Dashboard',
            [
                'totalAdmins' => $totalAdmins,
                'totalVacataires' => $totalVacataires,
            ]
        );
    }

    // ================= LISTE ADMINS =================

    public function index()
    {
        $admins = User::where(
            'role',
            'admin'
        )->get();

        return Inertia::render(
            'SuperAdmin/Admins',
            [
                'admins' => $admins
            ]
        );
    }

    // ================= AJOUT ADMIN =================

    public function store(Request $request)
    {
        $request->validate([

            'name' => 'required',

            'email' => 'required|email|unique:users,email',

            'password' => 'required|min:8',

        ]);

        User::create([

            'name' => $request->name,

            'email' => $request->email,

            'password' => Hash::make(
                $request->password
            ),

            'role' => 'admin',

        ]);

        return redirect()->back();
    }

    // ================= SUPPRIMER ADMIN =================

    // public function destroy(User $admin)
    // {
    //     $admin->delete();

    //     return redirect()->back();
    // }

    public function destroy($id)
{
    $admin = User::findOrFail($id);

    $admin->delete();

    return redirect()->back();
}
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vacataire extends Model
{
    protected $fillable = [
        'user_id',
        'nom',
        'prenom',
        'cin',
        'ppr',
        'specialite',
        'email',
        'est_fonctionnaire',
        'lieu_travail',
        'cin_file',
        'arreter_file',
        'autorisation_file',
        'attestation_non_travail_file',
        'statut',
        'photo',
        'rib_file',
        'demande_file',
        'diplome_file',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

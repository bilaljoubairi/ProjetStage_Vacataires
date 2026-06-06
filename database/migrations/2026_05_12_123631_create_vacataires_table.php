<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations. 
     */
    public function up(): void
    {
        Schema::create('vacataires', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->onDelete('cascade');
            $table->string('nom');
            $table->string('prenom');
            $table->string('cin')->unique();
            $table->string('ppr')->nullable();
            $table->string('specialite');
            $table->string('email')->unique();
            $table->boolean('est_fonctionnaire')->default(false);
            $table->string('lieu_travail')->nullable();
            $table->string('cin_file')->nullable();
            $table->string('arreter_file')->nullable();
            $table->string('autorisation_file')->nullable();
            $table->string('attestation_non_travail_file')->nullable();
            $table->enum('statut', [
                'en_attente',
                'accepte',
                'refuse'
            ])->default('en_attente');
            $table->string('photo')->nullable();
            $table->string('diplome_file')->nullable();
            $table->string('rib_file')->nullable();
            $table->string('demande_file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacataires');
    }
};

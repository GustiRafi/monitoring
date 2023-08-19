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
        Schema::create('hardware_details', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('hardware')->foreign()->constrained('hardware.hardware')->cascadeOnDelete();
            $table->string('sensor')->foreign()->constrained('master_sensors.sensor')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hardware_details');
    }
};

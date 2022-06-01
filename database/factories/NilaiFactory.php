<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Nilai>
 */
class NilaiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nisn' => $this->faker->numberBetween(1, 100),
            'kode_mapel' => $this->faker->numberBetween(1001, 1010),
            'semester' => $this->faker->numberBetween(1, 6),
            'nilai' => $this->faker->numberBetween(1, 100),
        ];
    }
}

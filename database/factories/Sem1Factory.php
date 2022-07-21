<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Sem1>
 */
class Sem1Factory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nisn' => $this->faker->numberBetween(100, 110),
            'kode_mapel' => $this->faker->numberBetween(1001, 1010),
            'nilai' => $this->faker->numberBetween(1, 100),
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mapel>
 */
class MapelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nama_mapel' => $this->faker->name,
            'kode_mapel' => $this->faker->unique()->numberBetween(1, 100),
            'kkm' => $this->faker->numberBetween(75, 95),
        ];
    }
}

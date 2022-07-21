<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Siswa::factory(10)->create();
        \App\Models\Mapel::factory(10)->create();
        \App\Models\Nilai::factory(1000)->create();
        \App\Models\Sem1::factory(100)->create();
        \App\Models\Sem2::factory(100)->create();
        \App\Models\Sem3::factory(100)->create();
        \App\Models\Sem4::factory(100)->create();
        \App\Models\Sem5::factory(100)->create();
        \App\Models\Sem6::factory(100)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}

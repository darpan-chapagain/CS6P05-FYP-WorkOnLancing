<?php

namespace Database\Seeders;

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
        // \App\Models\User::factory(10)->create();
        $this->call(RoleSeeder::class);
        $this->call(SkillSeeder::class);
        $this->call(TestUserSeeder::class);
        $this->call(JobCategorySeeder::class);
        $this->call(ChatRoomSeeder::class);

    }
}

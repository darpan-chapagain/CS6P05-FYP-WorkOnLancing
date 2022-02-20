<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => 'test',
            'last_name' => 'last_test',
            'phone_no' => '12345',
            'Address' => 'Sinamangle',
            'Gender' => 'Male',
            'email'=> 'darpan@gmail.com',
            'password'=> Hash::make('pass'),
            'role_id'=> 2,
        ]);
    }
}

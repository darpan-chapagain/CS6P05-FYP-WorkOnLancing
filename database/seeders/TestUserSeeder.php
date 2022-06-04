<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Employee;
use App\Models\Employee_Skill;
use App\Models\Job;
use App\Models\UserRoles;
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
            'first_name' => 'Admin Darpan',
            'last_name' => 'Chapagain',
            'phone_no' => '9843590522',
            'Address' => 'Sinamangle',
            'Gender' => 'male',
            'email' => 'darpan@gmail.com',
            'password' => Hash::make('pass'),
        ]);

        UserRoles::create([
            'user_id' => 1,
            'role_id' => 1,
        ]);

        // User::factory()->times(71)->create();
        // for($i=2;$i<=51;$i++){
        //     UserRoles::create([
        //         'user_id' => $i,
        //         'role_id' => 2,
        //     ]); 
        // }
        User::create([
            'first_name' => 'client',
            'last_name' => 'Darpan',
            'phone_no' => '9843590522',
            'Address' => 'Sinamangle',
            'Gender' => 'male',
            'email' => 'client@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202204201136admin.png',
            'profile_path' => 'images/202204201136admin.png',
            'about' => " I’m a master coach, best-selling author and a passionate speaker. I’m the founder of the first women-only hedge fund, special counsellor in many corporations across the globe. I’ve found balance between work and life, now I’m a totally happy person, loving mother, inspiring speaker and writer, and firm investor, but it didn’t come easily. I've gone though hundreds of failures and complicated situations. You can use my previous experience in order not to fall into the same trap.",

        ]);

        UserRoles::create([
            'user_id' => 2,
            'role_id' => 2,
        ]);

        User::create([
            'first_name' => 'Employee',
            'last_name' => 'Darpan',
            'phone_no' => '9843590522',
            'Address' => 'Sinamangle',
            'Gender' => 'Male',
            'email' => 'employee@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202204201136admin.png',
            'profile_path' => 'images/202204201136admin.png',
            'about' => " I’m a master coach, best-selling author and a passionate speaker. I’m the founder of the first women-only hedge fund, special counsellor in many corporations across the globe. I’ve found balance between work and life, now I’m a totally happy person, loving mother, inspiring speaker and writer, and firm investor, but it didn’t come easily. I've gone though hundreds of failures and complicated situations. You can use my previous experience in order not to fall into the same trap.",

        ]);

        UserRoles::create([
            'user_id' => 3,
            'role_id' => 3,
        ]);

        Employee::create([
            'title' => 'Programmer',
            'user_id' => 3,
            'qualification' => '07/2021 - 10/2021
            Laravel Developer (Intern), Sarwa Technologies Pvt. Ltd, Subidhanagar, Tinkune
            Projects:
            •    Ecommerce for Epic Bags
            •    Ecommerce for Meklajung
            •    Ecommerce for Kalika
            •    Web app for Siddhartha Hotel, Boudha
            •    API for Patro
            ',
            'project_rate' => 100,
            'experience' => 'Expert',
            'employee_type' => 'Individual',
            'Job_Category_ID' =>  1,
        ]);

        Employee_Skill::create([
            'employee_id' => 1,
            'skill_id' => rand(1, 2),
        ]);
        Employee_Skill::create([
            'employee_id' => 1,
            'skill_id' => rand(3, 4),
        ]);
        Employee_Skill::create([
            'employee_id' => 1,
            'skill_id' => rand(5, 6),
        ]);
        Employee_Skill::create([
            'employee_id' => 1,
            'skill_id' => 7,
        ]);

        
    }
}

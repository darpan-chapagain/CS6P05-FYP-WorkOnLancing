<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\Employee_Skill;
use App\Models\User;
use App\Models\UserRoles;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        User::create([
            'first_name' => 'Aryan',
            'last_name' => 'Parajuli',
            'phone_no' => '9843590522',
            'Address' => 'Tinkune',
            'Gender' => 'Male',
            'email' => 'aryan@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202204201136admin.png',
            'profile_path' => 'images/202204201136admin.png',
            'about' => " I’m a master coach, best-selling author and a passionate speaker. I’m the founder of the first women-only hedge fund, special counsellor in many corporations across the globe. I’ve found balance between work and life, now I’m a totally happy person, loving mother, inspiring speaker and writer, and firm investor, but it didn’t come easily. I've gone though hundreds of failures and complicated situations. You can use my previous experience in order not to fall into the same trap.",

        ]);

        UserRoles::create([
            'user_id' => 4,
            'role_id' => 3,
        ]);

        Employee::create([
            'title' => 'Laravel Developer',
            'user_id' => 4,
            'qualification' => 'Expert',
            'project_rate' => 100,
            'experience' => 'I am qualified',
            'employee_type' => 'Individual',
            'Job_Category_ID' =>  1,
        ]);
        Employee_Skill::create([
            'employee_id' => 2,
            'skill_id' => rand(1, 2),
        ]);
        Employee_Skill::create([
            'employee_id' => 2,
            'skill_id' => rand(3, 4),
        ]);
        Employee_Skill::create([
            'employee_id' => 2,
            'skill_id' => rand(5, 6),
        ]);
    }
}

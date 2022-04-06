<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobCategory;
use App\Models\Employee;
use App\Models\Employee_Skill;
use App\Models\User;
use App\Models\UserRoles;
use App\Models\Job;
use App\Models\PostSkill;
use Illuminate\Support\Facades\Hash;


class JobCategorySeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $category = ['Programming', 'Driving', 'Plumbing', 'Digital Marketing', 'Dancing'];
        foreach ($category as $cat) {
            JobCategory::create([
                'category_name' => $cat,
            ]);
        }
        Job::factory()->times(25)->create();
        for ($i = 1; $i <= 25; $i++) {
            PostSkill::create([
                'job' => $i,
                'skill' => rand(1, 2),
            ]);
            PostSkill::create([
                'job' => $i,
                'skill' => rand(3, 4),
            ]);
            PostSkill::create([
                'job' => $i,
                'skill' => rand(5, 6),
            ]);
        }
        Employee::factory()->times(50)->create();
        for ($i = 51; $i <= 102; $i++) {
            UserRoles::create([
                'user_id' => $i,
                'role_id' => 3,
            ]);
        }
        for ($i = 1; $i <= 50; $i++) {
            Employee_Skill::create([
                'employee_id' => $i,
                'skill_id' => rand(1, 2),
            ]);
            Employee_Skill::create([
                'employee_id' => $i,
                'skill_id' => rand(3, 4),
            ]);
            Employee_Skill::create([
                'employee_id' => $i,
                'skill_id' => rand(5, 6),
            ]);
        }

        User::create([
            'first_name' => 'client',
            'last_name' => 'darpan',
            'phone_no' => '12345',
            'Address' => 'Sinamangle',
            'Gender' => 'Male',
            'email' => 'client@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202203281818DSC00425.JPG',
            'profile_path' => 'images/202203281818DSC00425.jpg',
        ]);

        UserRoles::create([
            'user_id' => 103,
            'role_id' => 2,
        ]);

        User::create([
            'first_name' => 'employee',
            'last_name' => 'darpan',
            'phone_no' => '12345',
            'Address' => 'Sinamangle',
            'Gender' => 'Male',
            'email' => 'employee@gmail.com',
            'password' => Hash::make('pass'),
            'profile' => '202203281818DSC00425.JPG',
            'profile_path' => 'images/202203281818DSC00425.jpg',
        ]);

        UserRoles::create([
            'user_id' => 104,
            'role_id' => 3,
        ]);
        // $faker = Faker\Factory::create();

        Employee::create([
            'title' => 'Programmer',
            'user_id' => 104,
            'qualification' => 'Expert',
            'hourly_rate' => 10000,
            'project_rate' => 100000,
            'experience' => 'I am qualified',
            'employee_type' => 'Individual',
            'Job_Category_ID' =>  rand(1, 3),
        ]);
        Employee_Skill::create([
            'employee_id' => 51,
            'skill_id' => rand(1, 2),
        ]);
        Employee_Skill::create([
            'employee_id' => 51,
            'skill_id' => rand(3, 4),
        ]);
        Employee_Skill::create([
            'employee_id' => 51,
            'skill_id' => rand(5, 6),
        ]);
    }
}

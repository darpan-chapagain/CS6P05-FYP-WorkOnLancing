<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;


class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    function rand_float($st_num = 0, $end_num = 1, $mul = 1000000)
    {
        if ($st_num > $end_num) return false;
        return mt_rand($st_num * $mul, $end_num * $mul) / $mul;
    }

    public function definition()
    {
        $gender = ['Male', 'Female', 'Other'];
        $picture = ['fake1.jpg', 'fake2.jpg', 'fake3.jpg', '202204201136admin.png'];
        return [
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'phone_no' => $this->faker->numerify('##########'),
            'Address' => $this->faker->address(),
            'City' => $this->faker->city(),
            'Province' => $this->faker->state(),
            'about' => $this->faker->text(),
            'Gender' => Arr::random($gender),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => Hash::make('pass'),
            'profile' => Arr::random($picture),
            'profile_path' => 'images/' . Arr::random($picture),
            'rating' => $this->rand_float(1, 5),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}

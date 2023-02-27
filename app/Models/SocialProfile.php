<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialProfile extends Model
{
    use HasFactory;
    protected $table = 'social_profile';
    protected $primaryKey = 'id';
    protected $fillable = [
        'gelar_depan',
        'gelar_belakang',
        'lulusan'
    ];
    public $timestamps = false;
}

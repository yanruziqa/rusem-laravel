<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BasicProfile extends Model
{
    use HasFactory;
    protected $table = 'profiles';
    protected $primaryKey = 'id';
    protected $fillable = [
        'no_telp',
        'tanggal_lahir',
        'jenis_kelamin'
    ];
    public $timestamps = false;
}

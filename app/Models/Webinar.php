<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Webinar extends Model
{
    use HasFactory;
    protected $table = 'webinar';
    protected $primaryKey = 'id_webinar';

    public function category()
    {
        return $this->hasOne(Category::class, 'id_kategori', 'kategori');
    }
}

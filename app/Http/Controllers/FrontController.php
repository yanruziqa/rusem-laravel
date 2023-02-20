<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;

use App\Models\testimonial;
use App\Models\Webinar;

class FrontController extends Controller
{
    public function home(){
        $testimonial = testimonial::all();
        $webinars = Webinar::join('kategori', 'webinar.kategori', '=', 'kategori.id_kategori')
        ->take(5)
        ->get();

        $webinarByCategory = array();

        foreach ($webinars as $key => $webinar) {
            // Proses tanggal
            $curr = new \DateTime($webinar['tanggal']);
            $webinars[$key]['hari'] = $curr->format('d');
            $webinars[$key]['bulan'] = $curr->format('M');

            // Proses pembagian kategori
            if(!array_key_exists($webinar['nama_kategori'], $webinarByCategory)){
                $webinarByCategory[$webinar['nama_kategori']] = array();
            }

            array_push($webinarByCategory[$webinar['nama_kategori']], $webinars[$key]);
        }

        return Inertia::render('Front/Home', [
            'testimonial' => $testimonial,
            'webinar' => $webinars,
            'webinarByCategory' => $webinarByCategory
        ]);
    }
}

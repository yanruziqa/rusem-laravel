<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBasicProfileRequest;
use App\Http\Requests\UpdateBasicProfileRequest;
use Illuminate\Support\Facades\Redirect;
use App\Models\BasicProfile;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BasicProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBasicProfileRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBasicProfileRequest $request)
    {
        $basic = Auth::user()->basic;
        if($basic == null){
            $basic = new BasicProfile;
            $basic->user_id = Auth::user()->id;
        }
        $basic->fill($request->validated());
        $basic->tanggal_lahir = date('Y-m-d', strtotime($request->tanggal_lahir));
        $basic->save();

        return Redirect::route('admin.basic-profile.show');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BasicProfile  $basicProfile
     * @return \Illuminate\Http\Response
     */
    public function show(BasicProfile $basicProfile)
    {
        $basic = Auth::user()->basic;

        return Inertia::render('Profiles/Basic', [
            'basicProfile' => $basic
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BasicProfile  $basicProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(BasicProfile $basicProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBasicProfileRequest  $request
     * @param  \App\Models\BasicProfile  $basicProfile
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBasicProfileRequest $request, BasicProfile $basicProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BasicProfile  $basicProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(BasicProfile $basicProfile)
    {
        //
    }
}

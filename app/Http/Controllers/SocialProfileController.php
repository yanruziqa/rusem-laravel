<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSocialProfileRequest;
use App\Http\Requests\UpdateSocialProfileRequest;
use App\Models\SocialProfile;

class SocialProfileController extends Controller
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
     * @param  \App\Http\Requests\StoreSocialProfileRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSocialProfileRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SocialProfile  $socialProfile
     * @return \Illuminate\Http\Response
     */
    public function show(SocialProfile $socialProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SocialProfile  $socialProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(SocialProfile $socialProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSocialProfileRequest  $request
     * @param  \App\Models\SocialProfile  $socialProfile
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSocialProfileRequest $request, SocialProfile $socialProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SocialProfile  $socialProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialProfile $socialProfile)
    {
        //
    }
}

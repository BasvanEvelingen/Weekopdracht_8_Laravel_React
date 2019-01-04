<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BidsController extends Controller
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate(['price' => 'required']);
        $bid = Bid::create([
            'price' => $validatedData['price'],
            'ad_id' => $request->ad_id,
            'user_id' => $request->user_id,
        ]);

        return $bid->toJson();
    }
}

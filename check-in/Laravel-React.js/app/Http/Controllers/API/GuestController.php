<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Guest;
use SimpleSoftwareIO\QrCode\BaconQrCodeGenerator;

class GuestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $guests = Guest::all();
        return response()->json($guests->toArray(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $guest = new Guest;
        $guest->name = $request->name;
        $guest->last_name = $request->last_name;
        $guest->email = $request->email;
        $guest->save();

        $qrcode = new BaconQrCodeGenerator;
        $qrcode
            ->size(800)
            ->format('png')
            ->generate($request->url().'/guests/confirm/'.$guest->id, public_path('images/qr/'.$guest->id.'.png'));

        return response()->json(['message'=>'success'], 200);
    }

    /**
     * Confirmate the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function confirmation($id)
    {
        $guest = Guest::find($id);
        $guest->confirmation = 1;
        $guest->save();
        
        return response()->json(['message' => 'success'], 200);
    }
}

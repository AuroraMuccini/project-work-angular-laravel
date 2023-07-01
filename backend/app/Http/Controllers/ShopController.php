<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ShopController extends Controller
{

    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'nome' => ['required', 'max:255', 'string'],
            'indirizzo_web' => ['required', 'max:255', 'string'],
            'politiche_di_spedizione' => ['required', 'max:255', 'string']
        ]);
        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }
        $shop= new Shop();
        $shop->nome=$request->input('nome');
        $shop->indirizzo_web=$request->input('indirizzo_web');
        $shop->politiche_di_spedizione=$request->input('politiche_di_spedizione');
     
       $shop->save();
       return response()->json($shop,201);

    }
    public function read(Request $request, $id) {
        
        $shop= Shop::where('id','=',$id)->firstOrFail();
        return response()->json($shop);

    }


    public function readAll(Request $request) {
        //Operazione di SELECT su DB
            
            $shop= Shop::with('products')->get();
            
            return response()->json($shop,200);
    
        }
}

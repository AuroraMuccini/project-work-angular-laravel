<?php

namespace App\Http\Controllers;

use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ShopController extends Controller
{

    
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

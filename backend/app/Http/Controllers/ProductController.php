<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{


    public function read(Request $request, $id) {
        
        $product= Product::where('id','=',$id)->firstOrFail();
        return response()->json($product);

    }
    public function readAll(Request $request) {
        //Operazione di SELECT su DB
            
            $product= Product::with('shops')->get();
            
            return response()->json($product,200);
    
        }
}

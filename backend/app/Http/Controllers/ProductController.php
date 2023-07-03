<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProductController extends Controller
{
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'nome' => ['required', 'max:255', 'string'],
            'descrizione' => ['required', 'max:255', 'string'],
            'prezzo' => ['required', 'integer'],
            'shop_id'=>['required', 'integer']
        ]);
        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 400);
        }
        $product= new Product();
        $product->nome=$request->input('nome');
        $product->descrizione=$request->input('descrizione');
        $product->prezzo=$request->input('prezzo');
        $product->shop_id=$request->input('shop_id');
     
       $product->save();
       return response()->json($product,201);

    }

    public function read(Request $request, $id) {
        
        $product= Product::where('id','=',$id)->firstOrFail();
        return response()->json($product);

    }
    public function readAll(Request $request) {
        //Operazione di SELECT su DB
            
            $product= Product::with('shops')->get();
            //id dello shop
            
            return response()->json($product,200);
    
        }
}

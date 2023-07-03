export interface Shop{
    id: number 
    nome: string 
    indirizzo_web: string 
    politiche_di_spedizione: string  
    created_at: string 
    updated_at: string
    url:string
    products:[{
        id: number
        nome: string 
        descrizione: string 
        prezzo: number 
        shop_id: number
        created_at: string 
        updated_at: string 
    }]
    
}

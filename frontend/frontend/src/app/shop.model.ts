export class Shop{
    id: number | undefined
    nome: string | undefined 
    indirizzo_web: string | undefined 
    politiche_di_spedizione: string | undefined 
    created_at: string | undefined
    updated_at: string | undefined
    products: 
        [{
            id: number
            nome: string
            descrizione: string
            prezzo: number
            shop_id: number
            created_at: string
            updated_at: string

        }]
     | undefined
}
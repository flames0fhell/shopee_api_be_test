
var TaxCalc = function($tax_code,$price){

    switch ($tax_code) {
        case 1: default: // Food
            $tax = $price * 0.1;
            break;
        case 2:
            $tax = 10 + ($price * 0.02);
            break;
        case 3:
            if($price >= 100){
                $tax = ($price-100)*0.01;
            }
            break;
    }
    $total_price = $price + $tax;

    return {
        tax : $tax,
        amount : $total_price
    }

}
module.exports = TaxCalc;
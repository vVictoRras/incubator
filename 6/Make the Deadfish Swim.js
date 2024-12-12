function parse( data )
{
    data = data.split('');
    var result = 0;
    var result_arr = [];
    for(var i = 0; i < data.length; i++){
        switch(data[i]){
            case 'i' :
                result++;
                break;
            case 'd' :
                result--;
                break;
            case 's' :
                result *= result;
                break;
            case 'o' :
                result_arr.push(result);
                break;
        }
    }
    return result_arr;

}
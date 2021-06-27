class Sort {
     insertionSort = (koleksi) =>{
        for(let i = 1; i < koleksi.length; i++){
            let j = i -1;
            let temp = koleksi[i]
            while(j >= 0 && koleksi[j] > temp){
                koleksi[j + 1 ] = koleksi[j]
                j--
            }
            koleksi[j+1] = temp
        }
        return koleksi
    }
}

module.exports = Sort
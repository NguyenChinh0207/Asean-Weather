export const aqiNumberToString=(indexVI:any) => {
   if(indexVI){
    switch (indexVI) {
        case 1:
            return "Tốt";
        case 2:
            return "Trung bình";
        case 3:
            return "Kém";
        case 4:
            return "Xấu";
        case 5:
            return "Rất xấu";
        case 6:
            return "Nguy hại";
        default:
            return null;
    }
   }
}
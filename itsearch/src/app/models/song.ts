export interface Song {
    

    wrapperType:string;
    kind:string;
    artistId:number;
    collectionId:number;
    trackId:number;
    artistName:string;
    collectionName:string;
    trackName:string;
    collectionCensoredName:string;
    trackCensoredName:string;
    artistViewUrl:string;
    collectionViewUrl:string;
    trackViewUrl:string;
    previewUrl:string;
    artworkUrl60:string;
    artworkUrl100:string;
    collectionPrice:number;
    trackPrice:number;
    collectionExplicitness:string;
    trackExplicitness:string;
    discCount:number;
    discNumber:number;
    trackCount:number;
    trackNumber:number;
    trackTimeMillis:number;
    country:string;
    currency:string;
    primaryGenreName:string;
}

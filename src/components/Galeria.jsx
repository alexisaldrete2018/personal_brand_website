import React from "react";

import GalleryFirstPart from './GalleryFirstPart';
import GallerySecondPart from './GallerySecondPart';
import Pagination from "./Pagination";
import Footer from './Footer';

function Galeria(props){
    return (
        <div className="galeria">
            <GalleryFirstPart />
            <GallerySecondPart />
            <Pagination />
            <Footer />
        </div>
    )
}

export default Galeria;
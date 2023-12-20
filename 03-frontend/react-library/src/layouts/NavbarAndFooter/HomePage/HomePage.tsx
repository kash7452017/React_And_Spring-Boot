import { Carousel } from "./components/Carousel";
import { ExploreTopBools } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBools />
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
        
    );
}
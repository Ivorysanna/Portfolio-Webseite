namespace Lebenslauf{
    interface Bildungsarten {
        titel: string;
        zweiterTitel: string;
        dauer: number;
    }
    let bildungswegArray: Bildungsarten[] = JSON.parse(localStorage.getItem("bildungsarten")!);
}
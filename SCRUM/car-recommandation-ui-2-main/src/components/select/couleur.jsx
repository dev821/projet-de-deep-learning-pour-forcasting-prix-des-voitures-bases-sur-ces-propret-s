export default function SelectCouleur({couleur, setCouleur}) {
    return (
        <select value={couleur} onChange={(e) => setCouleur(e.target.value)} className="select select-bordered w-full">
            <option disabled selected>pick a color</option>
            <option>red</option>
            <option>blue</option>
            <option>green</option>
        </select>
    );
}
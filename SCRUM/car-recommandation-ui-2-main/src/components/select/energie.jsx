export default function SelectEnergie({energie, setEnergie}) {
    return (
        <select value={energie} onChange={(e) => setEnergie(e.target.value)} className="select select-bordered w-full">
            <option disabled selected>pick an energy</option>
            <option>DSL</option>
            <option>essence</option>
            <option>haja</option>
        </select>
    );
}
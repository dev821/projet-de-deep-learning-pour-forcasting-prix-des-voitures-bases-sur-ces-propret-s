import SelectCouleur from "./select/couleur";
import SelectEnergie from "./select/energie";

export default function Form({
    model,
    marque,
    couleur,
    energie,
    annee,
    setModel,
    setMarque,
    setCouleur,
    setEnergie,
    setAnnee,
    submit
}) {
    return (
        <>
            <div className="border rounded-md p-6">
                <h3 className="text-3xl font-bold text-center ">
                    Form input :
                </h3>
                <div className="h-16" />

                <form className="p-6 h-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full mt-2">
                        <p className="mb-2 text-start text-lg font-bold">model</p>
                        <input value={model} onChange={(e) => setModel(e.target.value)} className="input input-bordered w-full" type="text" placeholder="model" />
                    </div>
                    <div className="w-full mt-2">
                        <p className="mb-2 text-start text-lg font-bold">marque</p>
                        <input value={marque} onChange={(e) => setMarque(e.target.value)} className="input input-bordered w-full" type="text" placeholder="marque" />
                    </div>
                    <div className="w-full mt-2">
                        <p className="mb-2 text-start text-lg font-bold">couleur</p>
                        <SelectCouleur couleur={couleur} setCouleur={setCouleur} />
                    </div>
                    <div className="w-full mt-2">
                        <p className="mb-2 text-start text-lg font-bold">energie</p>
                        <SelectEnergie energie={energie} setEnergie={setEnergie} />
                    </div>
                    <div className="w-full mt-2">
                        <p className="mb-2 text-start text-lg font-bold">annee</p>
                        <input value={annee} onChange={(e) => setAnnee(e.target.value)} type="number" className="input input-bordered w-full" placeholder="annee" />
                    </div>
                    <button onClick={(e) => { e.preventDefault(); submit() }} className="btn btn-primary w-full mt-12">submit</button>
                </form>
            </div>
        </>
    );
}

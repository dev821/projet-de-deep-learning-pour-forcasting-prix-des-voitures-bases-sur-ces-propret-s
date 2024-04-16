import { useState } from "react";

export default function Result({ isLoading, cars}) {
    const [page, setPage] = useState(0);
    return (
        <>
            <div className=" border rounded-md p-6">
                <h3 className="text-3xl font-bold text-center">
                    Result :
                </h3>
                <div className="h-16" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {isLoading ? <SkeletonLoading /> : <CarCards cars={cars.slice((page) * 4, (page) * 4 + 4)}/>}
                </div>
                <div className="w-full flex justify-center items-center mt-6">
                    {cars ? (<>
                        {cars.length && (<>
                            <div className="join">
                            {Array(Math.ceil(cars.length / 4)).fill(0).map((_, index) => (
                                <button onClick={() => setPage(index)} key={index} className={`join-item btn ${page === index ? "btn-active" : ""}`}>{index + 1}</button>
                            ))}
                            </div>
                        </>)}
                    </>) : <></>}
                </div>
            </div>      
        </>
    );
}




function SkeletonLoading() {
    return (
        <>
            {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="aspect-[5/6] skeleton w-full/" />
            ))}
        </>
    );
}


function CarCards({cars}) {
    return (
        <>
            {
                cars.map((car, index) => (
                    <div key={index}>
                    <div  className="card bg-base-100 border-2 shadow-xl">
                        <figure><img className="aspect-[6/4] object-cover  " src={car.Photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{`${car.Marque} ${car.Modele}`}</h2>
                            <p>{`${car.Prix}0000,00 DA`}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => document.getElementById(`Modal-${index}`).showModal()} className="btn btn-primary">Show Details</button>
                            </div>
                        </div>
                    </div>
                <dialog id={`Modal-${index}`} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{`${car.Marque} ${car.Modele}`}</h3>
                    <p className="py-4">{`${car.Prix}0000,00 DA`}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <img className="w-full rounded-lg shadow-xl mb-4" src={car.Photo} alt="something" />
                            <ul className="text-lg">
                                <li><span className="font-bold">Moteur :</span> {car.Moteur}</li>
                                <li><span className="font-bold">Energie :</span> {car.Energie}</li>
                                <li><span className="font-bold">Boite :</span> {car.Boite}</li>
                                <li><span className="font-bold">Annee :</span> {car.Annee}</li>
                                <li><span className="font-bold">Kilométrage :</span> {`${car.Kilometrage} Km`}</li>
                                <li><span className="font-bold">Etat :</span> {`${car.Etat}/10`}</li>
                                <li><span className="font-bold">Couleur :</span> {car.Couleur}</li>
                            </ul>
                            <div className="w-full flex justify-end items-center">
                                <button className="btn btn-primary">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
            </div>
                ))}
        </>
    );
}
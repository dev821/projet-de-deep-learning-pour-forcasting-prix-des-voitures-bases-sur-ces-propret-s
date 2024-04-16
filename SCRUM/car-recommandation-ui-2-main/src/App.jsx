import Navbar from "./components/navbar";
import * as tf from '@tensorflow/tfjs';
import Hero from "./components/hero"
import { useEffect, useState } from "react";
import Form from "./components/form";
import Result from "./components/result"
import axios from "axios"








export default function App({ setTheme }) {
  const [model, setModel] = useState("");
  const [marque, setMarque] = useState("");
  const [couleur, setCouleur] = useState("Blanc");
  const [energie, setEnergie] = useState("essence");
  const [annee, setAnnee] = useState(2000);
  const [cars, setCars] = useState([])
  
  
  const [modell, setModell] = useState(null);
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
      const loadModel = async () => {
          try {
              // Replace 'path/to/your/model/model.json' with the actual path to your H5 model file
              const loadedModel = await tf.loadLayersModel('/my_model.h5');
              setModell(loadedModel);
          } catch (error) {
              console.error('Error loading model:', error);
          }
      };

      loadModel();
  }, []);


  

  


  

    const fetchCars = async (couleur, energie, model, marque, annee) => {
      console.table({couleur, energie, model, marque, annee})
      const result = await axios.post('http://localhost:5000/api/results', { 
      Couleur:couleur,
      Energie:energie,
      Modele:model,
      Marque:marque,
      Annee:annee,
    })
    setCars(result.data);
  }

  useEffect(() => {
    fetchCars(couleur, energie, model, marque, annee);
  }, [])

  const submitHandeler = async () => {
    console.log("submitting")
    setCars([])
    await new Promise(resolve => setTimeout(resolve, 1000));
    await fetchCars(couleur, energie, model, marque, annee)
  }
  return (
    <>
      <div className="container mx-auto">
        <Navbar setTheme={setTheme} />
      </div>
      <hr className="my-2" />
      <div className="h-16" />
      <div className="container mx-auto">
        <Hero />
        <div className="h-16" />
        <div className="container w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form
            model={model}
            marque={marque}
            couleur={couleur}
            energie={energie}
            annee={annee}
            setModel={setModel}
            setMarque={setMarque}
            setCouleur={setCouleur}
            setEnergie={setEnergie}
            setAnnee={setAnnee}
            submit={submitHandeler}
          />
          {(cars.length > 0) ? (
            <Result isLoading={false} cars={cars} />
            ): (
              <Result isLoading={true} cars={[]} />
          )}
        </div>
      </div>
    </>
  );
}

